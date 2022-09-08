# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Create a method that will take in an array of words AND a letter variable
# Method will return an array of words that contain the letter of the letter argument to the method
# Use the select method (works like the filter method in JS) on the array parameter
    # if the word in the array contains the letter argument, it will be returned in a new array


def words_with_letter(arr, letter)
    arr.select do |word|
        word.include? letter
    end
end


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 

# Create a method that will take in a hash as argument
# The return will be the values from every hash in one single array, sorted alphabetically
# Create an empty container array to be returned. We will push every value from the hash into this container.
# Use each method on hash to iterate over every key-value pair in hash.
    # push every value into our empty container array
# Use flatten method on container to remove nested arrays and sort method to sort our single array into alphabetical order

def noHash hash
    container = []
    hash.each do |key, value|
        container << value
    end
    p container.flatten!.sort!
end


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Create a Bike class
# initialize method with model string, number of wheels, and current_speed
# set default values of any new bike object to be 2 wheels, current_speed at 0, and model will be trek. This allows every new bike instance to have these default values without an argument being passed. We can change these values if we want by adding arguments when we create a new object.
# We can use string interpolation on our bike_info method to pass in the class properties into one string
# Our pedal_faster method will take an argument of a certain number. We will add the value of the current speed with our argument to change the current_speed property.
# The brake method will take an argument of a certain number and will first check for the current_speed
    # If it's over 0, we can use the brake method to subtract our argument from the current_speed
        # If the argument subtracted from the current_speed happens to go below zero, we will assign current_speed to 0. -- This prevents negative values being assigned to current_speed.

class Bike
    def initialize model = 'Trek', wheels = 2, current_speed = 0
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end

    def bike_info
        p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
    end

    def pedal_faster mph_num
        @current_speed += mph_num
    end

    def brake brake_amt
        if @current_speed > 0
            @current_speed -= brake_amt
            if @current_speed <= 0
                @current_speed = 0
            end
        else
           p "You're already stopped!"
        end
    end
end

my_bike = Bike.new
my_bike.bike_info
my_bike.pedal_faster(10)
my_bike.bike_info
my_bike.pedal_faster(18)
my_bike.bike_info
my_bike.brake(5)
my_bike.bike_info
my_bike.brake(25)
my_bike.bike_info