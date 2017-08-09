class Employee

  attr_accessor :name, :title, :salary, :boss

  def initialize(name, title, salary, boss)
    @name = name
    @title = title
    @salary = salary
    @boss = boss

  end

  def bonus(multiplier)
    bonus = @salary * multiplier
  end


  # def assign_to_boss
  #   boss.employees << self
  # end

  def manager
  end

end

class Manager < Employee
  attr_accessor :employees, :name

  def initialize(name, title, salary, boss)
    super(name, title, salary, boss)
    @employees = []
    # @employees << super(name) if super(boss) == boss_name
  end

  def bonus(multiplier)
    multiplier * @employees.map{|e| e.salary}.reduce(:+)
  end

end



david = Employee.new("David", "TA", 10_000, "Darren")
shawna = Employee.new("Shawna", "TA", 12_000, "Darren")
ned = Manager.new("Ned", "Founder", 1_000_000, "")
darren = Manager.new("Darren", "TA Manager", 78_000, "Ned")
