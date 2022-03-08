#Comparing files between file.txt
num1 = 42 #Variable Decloration
num2 = 2.3 #Variable Decloration
boolean = True # Variable Decloration, Data Type, Primitive, Boolean
string = 'Hello World'#Variable Decloration, Data Type, Composite, list, initialize
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives']#Variable Decloration, Data Type, Composite, list, initialize
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}#Variable Decloration, Data Type, dictionary, initialize
fruit = ('blueberry', 'strawberry', 'banana')#Variable Decloration, Data Type, Primitive, Composite, tuples, initialize
print(type(fruit))#Log Statement
print(pizza_toppings[1])#Log Statement
pizza_toppings.append('Mushrooms')#.push (js) string to the last index
print(person['name'])#Log Statement
person['name'] = 'George'#'name' in "person" variable get replaced with 'George'
person['eye_color'] = 'blue'#eye color gets added to dictionary with value pair of blue
print(fruit[2])#Log 'banana'

if num1 > 45:#conditional - if
    print("It's greater")#log statement
else:#conditional - else
    print("It's lower")#log statement

if len(string) < 5:#conditional - if
    print("It's a short word!")#log statement
elif len(string) > 15:#conditional - else if
    print("It's a long word!")#log statement
else:#conditional - else
    print("Just right!")#log statement

for x in range(5):#for loop start
    print(x)#log statement, for loop - stop
for x in range(2,5):#for loop start
    print(x)#log statement, for loop - stop
for x in range(2,10,3):#for loop start
    print(x)#log statement, for loop - stop
x = 0#Variable Decloration
while(x < 5):#while loop start
    print(x)#log statement
    x += 1#Variable Decloration, for loop - stop

pizza_toppings.pop()#List - delete value
pizza_toppings.pop(1)# list - delete value - index 1

print(person)#log statement
person.pop('eye_color')#List - delete value - 'eye_color'
print(person)#log_statement

for topping in pizza_toppings:#for loop
    if topping == 'Pepperoni':#conditional - if 
        continue# for loop continue
    print('After 1st if statement')#log statement
    if topping == 'Olives':#conditional - if
        break# for loop - break

def print_hello_ten_times():#function
    for num in range(10):#for loop
        print('Hello')#log statement

print_hello_ten_times()#function argument(0)

def print_hello_x_times(x):#function - parameter (x)
    for num in range(x):#for loop
        print('Hello')#log statement

print_hello_x_times(4)#function argument (4)

def print_hello_x_or_ten_times(x = 10):#function
    for num in range(x):#for loop
        print('Hello')#log statement

print_hello_x_or_ten_times()#function - argument (0)
print_hello_x_or_ten_times(4)#function - arguement (4)


"""
Bonus section
"""

# print(num3) -NameError: name <variable name> is not defined
# num3 = 72
# fruit[0] = 'cranberry' - TypeError: 'tuple' object does not support item assignment
# print(person['favorite_team']) - KeyError: 'favorite_team'
# print(pizza_toppings[7]) - IndexError: list index out of range
#   print(boolean)- IndentationError: unexpected indent
# fruit.append('raspberry')- AttributeError: 'tuple' object has no attribute 'append'
# fruit.pop(1)- AttributeError: 'tuple' object has no attribute 'pop'