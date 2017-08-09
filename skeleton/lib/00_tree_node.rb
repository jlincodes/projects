class PolyTreeNode
  attr_accessor :value, :children, :parent

  def initialize(value)
    @value = value
    @children = []
    @parent = nil
  end

  def parent=(p_node)
    if !self.parent.nil? && self.parent != p_node
      @parent.children.delete(self)
      @parent = p_node
      p_node.children << self unless p_node.nil? || p_node.children.include?(self)
    elsif self.parent.nil?
      @parent = p_node
      p_node.children << self unless p_node.nil? || p_node.children.include?(self)
    end
  end

  def add_child(child_node)
    child_node.parent=(self)
  end

  def remove_child(child_node)
    if self.children.include?(child_node)
      child_node.parent=(nil)
    else
      raise "Node is not a child"
    end
  end

  def dfs(target_value)
    return self if self.value == target_value
    self.children.each do |child|
      result = child.dfs(target_value)
      return result if result
    end
    nil
  end

  def bfs(target_value)
    queue = []
    queue << self
    until queue.empty?
      current_node = queue.shift
      return current_node if current_node.value == target_value
      queue.concat(current_node.children)
    end
  end
end

if __FILE__ == $PROGRAM_NAME

n1 = PolyTreeNode.new("1")
n2 = PolyTreeNode.new("2")
# n3 = PolyTreeNode.new("3")
# n4 = PolyTreeNode.new("4")
# n5 = PolyTreeNode.new("5")

n2.parent=(n1)
# n3.parent=(n2)
# n4.parent=(n2)
# n5.parent=(n1)



# arr = [n1, n2, n3, n4, n5]
p n1.dfs("3")

end
