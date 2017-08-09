require_relative 'pieces.rb'

class Board

  def initialize
    @grid = Array.new(8){Array.new(8)}

  end

  def render
    @grid
  end
  def [](pos)
    row, col = pos
    @grid[pos]
  end

  def []=(pos, value)
    row, col = pos
    @grid[pos] = value
  end

  def dup()
  end

  def move_piece(start_pos, end_pos)
    raise "No piece there!" if start_pos.null?
    raise "Invalid position!" if valid?(end_pos)
  end

  def valid?(pos)
  end

  def checkmate?()
  end

  protected

  def make_starting_grid()
  end

  def find_king(color)
  end

end
