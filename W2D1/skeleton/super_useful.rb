# PHASE 2
def convert_to_int(str)
  begin
    Integer(str)
    raise ArgumentError => e
  rescue e
    return nil
  end
end

# PHASE 3
FRUITS = ["apple", "banana", "orange"]

def reaction(maybe_fruit)
    if FRUITS.include? maybe_fruit
      puts "OMG, thanks so much for the #{maybe_fruit}!"
    else
      raise StandardError
    end
end

def feed_me_a_fruit
    puts "Hello, I am a friendly monster. :)"
    begin
    puts "Feed me a fruit! (Enter the name of a fruit:)"
    maybe_fruit = gets.chomp
    reaction(maybe_fruit)
    rescue
      puts "Give me the correct beverage first and you can try again!"
      maybe_coffee = gets.chomp
      if maybe_coffee == "coffee"
        retry
      end
    end
end

# PHASE 4
class BestFriend
  def initialize(name, yrs_known, fav_pastime)
    @name = name
    @yrs_known = yrs_known
    @fav_pastime = fav_pastime

    if @name.length < 1 || @fav_pastime.length < 1
      raise StandardError.new "You have to have a name and a favorte pasttime!"
    end 
  end

  def talk_about_friendship
    raise ArgumentError.new "We can't be best friends; we haven't known each other that long..." if @yrs_known < 5
    puts "Wowza, we've been friends for #{@yrs_known}. Let's be friends for another #{1000 * @yrs_known}."

  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me."
  end
end
