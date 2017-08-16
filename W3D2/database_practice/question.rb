require_relative 'required_files'

class Question
  attr_accessor :title, :body, :author_id


  def self.all
    data = QuestionsDatabase.instance.execute(<<-SQL)
      SELECT *
      FROM questions
    SQL

    data.map { |d| Question.new(d) }
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT *
      FROM questions
      WHERE questions.id = ?
    SQL

    data.map { |d| Question.new(d) }.first
  end

  def self.find_by_author_id(author_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, author_id)
      SELECT *
      FROM questions
      WHERE questions.author_id = ?
    SQL

    data.map { |d| Question.new(d) }
  end

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @author_id = options['author_id']
  end

  def author
    raise "question not created" unless @id
    User.find_by_id(@author_id)
  end

  def replies
    raise "question not created" unless @id
    Reply.find_by_question_id(@id)
  end

  def followers
    QuestionFollow.followers_for_question_id(@id)
  end

  def self.most_followed(n)
    QuestionFollow.most_followed_questions(n)
  end

  def likers
    QuestionLike.likers_for_question_id(@id)
  end

  def num_likes
    QuestionLike.num_likes_for_question_id(@id)
  end

end
