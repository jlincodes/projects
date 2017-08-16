require_relative 'required_files'

class Reply

  def self.all
    data = QuestionsDatabase.instance.execute(<<-SQL)
      SELECT *
      FROM replies
    SQL
    data.map { |d| Reply.new(d) }
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT *
      FROM replies
      WHERE replies.id = ?
    SQL
    data.map { |d| Reply.new(d) }.first
  end

  def self.find_by_user_id(user_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT *
      from replies
      where replies.author_id = ?
    SQL
    data.map { |d| Reply.new(d) }
  end

  def self.find_by_question_id(question_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT *
      FROM replies
      WHERE replies.question_id = ?
    SQL
  end

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @author_id = options['author_id']
    @parent_reply_id = options['parent_reply_id']
    @body = options['body']
  end

  def author
    raise "reply does not exist" unless @id
    User.find_by_id(@author_id)
  end

  def question
    raise "reply does not exist" unless @id
    Question.find_by_id(@question_id)
  end

  def parent_reply
    raise "reply does not exist" unless @id
    raise "parent does not exist" unless @parent_reply_id
    Reply.find_by_id(@parent_reply_id)
  end

  def child_replies
    raise "reply does not exist" unless @id
    data = QuestionsDatabase.instance.execute(<<-SQL, @id)
      SELECT *
      FROM replies
      WHERE replies.parent_reply_id = ?
    SQL
    raise "children does not exist" if data.empty?
    data.map { |d| Reply.new(d) }
  end
end
