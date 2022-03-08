#Create a function that accepts a nmber as an inoput. Return a new list that counts down byi one from the number down to 0

# list = []
# def listMaker(num):
#     for num in range(num,0-1,-1):
#         list.append(num)
#     return list
# listMaker(10)
# print(list)

#Create a function that will receive a list with two numbers Print the first value and return the second

# def print_and_return(num1,num2):
#     print(num1)
#     return(num2)
# print_and_return(1,2)

#Create a function that aaccepts a list and returns the sum of the first value in the list plus the list's length

# def first_plus_length(arr):
#     return arr[0] + len(arr)
# print(first_plus_length([1,2,3,4,5]))

"""Write a function that accepts a list and creates a new list containing only the values from the original list that are 
greater than its 2nd value. Print how many values this is and then return the new list. If the list has less than 2 elements,
have the function return False"""

# def values_greater_thanSecond(arr):
#     newList=[]
#     for num in range(len(arr)):
#         if arr[num] > arr[1]:
#             newList.append(arr[num])
#     if len(newList) < 2:
#         return False
#     print(len(newList))
#     return newList
# print(values_greater_thanSecond([5,2,3,2,1,4]))

#Write a function that accepts two integers as parameters: size and value.
#The function should create and return a list whose length is equal to the given size, and whose values are all the given value.

# def length_and_value(x,y):
#     output=[]
#     for i in range(x):
#         output.append(y)
#     return output
# print(length_and_value(4,6))