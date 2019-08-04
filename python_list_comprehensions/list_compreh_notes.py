# List comprehensions are a way to shorten common tasks that we do with list
# Take the regular way to do the below example:

result_list = []
for num in range(3):
    result_list.append(num)

# print(result_list)
# >> [0, 1, 2]

# Previous example took three lines. Line 4 - 6
# Look how we can solve the same problem with list comprehensions:

list_result = [ num for num in range(3)]


# List comprehension syntax explained:
#-------------------------------------
# first step to do list comprehensions: (note this is sudo code)
# Stablish for loop, without the colon
for num in range(3)

# second step, the variable that is going to be added to the array in EACH iteration goes INFRONT of the for loop
num for num in range(3)

# Third step, wrap everything in the array that is going to be created
[num for num in range(3)]