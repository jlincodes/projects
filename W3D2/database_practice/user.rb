require_relative 'required_files'

class User
  attr_accessor :fname, :lname
  def self.all
    data = QuestionsDatabase.instance.execute(<<-SQL)
      SELECT
        *
      FROM
        users
    SQL

    data.map { |d| User.new(d) }
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT *
      FROM users
      WHERE users.id = ?
    SQL

    data.map { |d| User.new(d) }.first
  end

  def self.find_by_name(fname, lname)
    data = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
      SELECT *
      FROM users
      WHERE users.fname = ? and users.lname = ?
    SQL
  end

  def initialize(options)
    @id = options['id']
    @fname = options['fname']
    @lname = options['lname']
  end

  def authored_questions
    raise "user not created" unless @id
    Question.find_by_author_id(@id)
  end

  def authored_replies
    raise "user not created" unless @id
    Reply.find_by_user_id(@id)
  end

  def followed_questions
    QuestionFollow.followed_questions_for_user_id(@id)
  end

  def liked_questions
    QuestionLike.liked_questions_for_user_id(@id)
  end

end
