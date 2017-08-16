require_relative 'required_files'

class QuestionLike

  attr_accessor :follower_id, :question_id

  def self.all
    data = QuestionsDatabase.instance.execute(<<-SQL)
      SELECT *
      FROM question_likes
    SQL
    data.map { |d| QuestionLike.new(d) }
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT *
      FROM question_likes
      WHERE replies.id = ?
    SQL
    data.map { |d| QuestionLike.new(d) }.first
  end

  def self.likers_for_question_id(question_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT users.*
      FROM question_likes
      join users on users.id = question_likes.user_id
      where question_likes.question_id = ?
    SQL
    data.map { |d| User.new(d) }
  end

  def self.num_likes_for_question_id(question_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      select question_id, count(likes) as total_likes
      from question_likes
      where question_id = ?
      group by question_id
    SQL
    data.first
  end

  def self.liked_questions_for_user_id(user_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      select count(*) as total_likes
      from question_likes
      group by question_likes.user_id
      having user_id = ?
    SQL

  end

  def initialize(options)
    @id = options['id']
    @likes = options['likes']
    @question_id = options['question_id']
    @user_id = options['user_id']
  end

end
