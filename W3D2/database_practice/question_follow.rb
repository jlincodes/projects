require_relative 'required_files'

class QuestionFollow

  attr_accessor :follower_id, :question_id

  def self.all
    data = QuestionsDatabase.instance.execute(<<-SQL)
      SELECT *
      FROM question_follows
    SQL
    data.map { |d| QuestionFollow.new(d) }
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT *
      FROM question_follows
      WHERE replies.id = ?
    SQL
    data.map { |d| QuestionFollow.new(d) }.first
  end

  def self.followers_for_question_id(question_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      select *
      FROM question_follows
      join users on question_follows.follower_id = users.id
      where question_follows.question_id = ?
    SQL

    data.map { |d| User.new(d) }
  end

  def self.followed_questions_for_user_id(user_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      select *
      from question_follows
      join questions on question_follows.question_id = questions.id
      where question_follows.follower_id = ?
    SQL

  end

  def initialize(options)
    @id = options['id']
    @follower_id = options['follower_id']
    @question_id = options['question_id']
  end

  def self.most_followed_questions(n)
    data = QuestionsDatabase.instance.execute(<<-SQL, n)
      SELECT questions.title, COUNT(follower_id) AS total_followers
      FROM question_follows
      JOIN questions ON questions.id = question_follows.question_id
      GROUP BY questions.title
      ORDER BY total_followers DESC
      LIMIT ?
    SQL
  end
end
