class KnightPathFinder
  def initialize(start_pos)
    @start_pos = start_pos
  end

  def build_move_tree
    # initialized our root parent directory at starting position
    move_tree = PolyTreeNode.new(@start_pos)
    #create a recurive method
    # 1) create next pos val
    #  2) check whether new pos val is val_pos?
    # 3) if val_pos?, initialize new node with the [x,y] positons as value
    # 4) assign new node to its parent


  end

  def valid_pos? #checks if pos node exists on board
  end


end
