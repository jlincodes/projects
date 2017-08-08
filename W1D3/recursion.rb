def range(start, end_val)
  return [] if end_val < start
  range(start, end_val - 1 ) << end_val
end

def sum_of_array_iterative(arr)
  sum = 0
  arr.each {|val| sum += val}
  sum
end

def sum_of_array_recursive(arr)
  return nil if arr.empty?
  return arr[0] if arr.length == 1
  arr.last + sum_of_array_recursive(arr[0..-2])
end


def exponent_one(base, power)
  return 1 if power == 0
  base * exponent_one(base, power - 1)
end

def exponent_two(base, power)
  return 1 if power == 0
  return base if power == 1
  if power%2 == 0
    exponent_two(base, power/2) ** 2
  else
    base * (exponent_two(base, (power - 1)/2) ** 2)
  end
end

def deep_dup(arr)
  new_arr = []
  arr.each do |el|
    if el.is_a?(Array)
       new_arr << deep_dup(el)
    else
      new_arr << el
    end
  end
  new_arr
end

def fibonnaci_iterative(n)
  arr = [1]
  1.upto(n) do |idx|
    if idx != 1
      arr << arr[idx-1] +arr[idx-2]
    else
      arr << arr[idx-1]
    end
  end
  arr
end

def fibonnaci_recursive(n)
  return [1] if n == 1
  return [1,1] if n == 2
  prev_fib = fibonnaci_recursive(n - 1)
  prev_fib + [prev_fib.last + prev_fib[prev_fib.length - 2]]
end

def subsets(array)
  return [[]] if array.empty?

  results = []
  subsets(array[1..-1]).each do |el|
    results << el
    results << ([array.first] + el)
  end
  results
end

def permutations(array)
  return [array] if array.length == 1
  results = []
  permutations(array[0...-1]).each do |permut|
    results += inserted_at_all_pos(permut, array.last)
  end
  results.sort
end

def inserted_at_all_pos(array, value)
  results = []
  0.upto(array.length - 1) do |idx|
    array_copy = array.dup
    array_copy.insert(idx,value)
    results << array_copy
  end
  results << (array + [value])
  results
end

def b_search(arr, val)
  # return nil if arr.empty?
  # middle = arr.length/ 2
  # if( val < arr[middle])
  #   b_search(arr[0...middle], val)
  # elsif (val == arr[middle])
  #   return middle
  # else
  #   b_search(arr[middle..-1], val)
  # end

  b_search_helper(arr, 0, arr.length - 1, val)


end

def b_search_helper(arr, start_idx, end_idx, val)
  return nil if start_idx == end_idx
  middle = start_idx + end_idx
  if val < arr[middle]
    b_search_helper(arr, start_idx, middle - 1, val)
  elsif (val == arr[middle])
    return middle
  else
    b_search_helper(arr, middle, end_idx, val)
  end
end

def merge_sort(array)
  return array if array.length == 1

  middle = array.length/2
  first_half = array[0...middle]
  second_half = array[middle..-1]
  sorted_array = merge(merge_sort(first_half),merge_sort(second_half))
  array.clear
  sorted_array.each {|el| array << el}
end

def merge(array1, array2)
  merged_array = []
  idx1 = 0
  idx2 = 0

  arr1 = array1.dup
  arr2 = array2.dup
  until(arr1.empty? && arr2.empty?)
    if arr1.empty?
      merged_array += arr2
      arr2 = []
    elsif arr2.empty?
      merged_array += arr1
      arr1 = []
    else
      if arr1[0] < arr2[0]
        merged_array << arr1.shift
      else
        merged_array << arr2.shift
      end
    end
  end
  merged_array
end

def greedy_make_change(amount, coin_values)
  coins = []
  coin_values.sort!
  coins_left = coin_values.dup
  amount_left = amount
  until coins_left.empty?
    until coins_left.last > amount_left
      return nil if impossible_to_reach_amount?(amount_left, coins_left)
      coins << coins_left.last
      amount_left -= coins_left.last
    end
    coins_left.pop
  end
  coins
end

def impossible_to_reach_amount?(amount_left, coins_left)
  return coins_left.length == 1 && coins_left.last > amount_left
end

def make_better_change(amount, coin_values)
  return coin_values if amount == coin_values.first || coin_values.length == 1

  possible_solutions = []
  coin_values.sort.reverse.each do |coin|
    ps = possible_solution_minus_coin(
                          coin, amount, coin_values)
    possible_solutions << ps unless ps.nil?
  end
  least = possible_solutions.first
  possible_solutions.each do |solution|
    if solution.length < least.length
      least = solution
    end
  end
  least
end

def possible_solution_minus_coin (coin, amount, coin_values)
  remainder = amount - coin
  coin_values = coin_values.select {|c| c < remainder}
  if remainder != 0 && !coin_values.nil?
    better_change_without_coin = make_better_change(remainder, coin_values)
    better_change_without_coin + [coin]
  end
end
