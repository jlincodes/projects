require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    return @columns if @columns
    cols = DBConnection.execute2(<<-SQL).first
      SELECT *
      FROM #{self.table_name}
      LIMIT 0
    SQL

    cols.map! { |col| col.to_sym }
    @columns = cols
  end

  def self.finalize!
    self.columns.each do |col|
      define_method(col) do
        self.attributes[col]
      end
      define_method("#{col}=") do |value|
        self.attributes[col] = value
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name || self.name.tableize
  end

  def self.all
    results = DBConnection.execute(<<-SQL)
      SELECT #{self.table_name}.*
      FROM #{self.table_name}
    SQL

    parse_all(results)
  end

  def self.parse_all(results)
    results.map { |el| self.new(el) }
  end

  def self.find(id)
    result = DBConnection.execute(<<-SQL, id)
      SELECT #{table_name}.*
      FROM #{table_name}
      WHERE #{table_name}.id = ?
    SQL

    parse_all(result).first
  end

  def initialize(params = {})
    params.each do |attr_name, value|
      attr_name = attr_name.to_sym
      if self.class.columns.include?(attr_name)
        self.send("#{attr_name}=", value)
      else
        raise "unknown attribute '#{attr_name}'"
      end
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    # ...
  end

  def insert
    colums = self.class.columns.drop(1)
    col_names = columns.map(&:to_s).joins(",")
    question_marks =(["?"]) * columns.count).join(", ")

    DBConnection.execute(<<-SQL, *attribute_values.drop(1))
    INSERT INTO
      #{self.class.table_name} (#{col_names})
    VALUES
      (#{question_marks})
    SQL

    self.id = DBConnection.last_insert_row_id
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
