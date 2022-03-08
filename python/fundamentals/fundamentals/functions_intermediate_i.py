#Update Values in Dictionaries and Lists

# x = [ [5,2,3], [10,8,9] ] 
# students = [
#     {'first_name':  'Michael', 'last_name' : 'Jordan'},
#     {'first_name' : 'John', 'last_name' : 'Rosales'}
# ]
# sports_directory = {
#     'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
#     'soccer' : ['Messi', 'Ronaldo', 'Rooney']
# }
# z = [ {'x': 10, 'y': 20} ]

# x[1][0]=15
# students[0]['last_name']='Bryant'
# sports_directory['soccer'][0]='Andres'
# z[0]['y']=30

#Iterate Through a List of Dictionaries

# students = [
#         {'first_name':  'Michael', 'last_name' : 'Jordan'},
#         {'first_name' : 'John', 'last_name' : 'Rosales'},
#         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#         {'first_name' : 'KB', 'last_name' : 'Tonel'}
#     ]
# # iterateDictionary(students) 
# # should output: (it's okay if each key-value pair ends up on 2 separate lines;
# # bonus to get them to appear exactly as below!)
# # first_name - Michael, last_name - Jordan
# # first_name - John, last_name - Rosales
# # first_name - Mark, last_name - Guillen
# # first_name - KB, last_name - Tonel

# def iterateDictionary(x):
#     x = ""
#     for i in range(len(students)):
#         x += (students[i]['first_name'])
#         x += (students[i]['last_name'])
#         if i < len(students):
#             x += (" - ")

#     str(x)
#     return x
# print(iterateDictionary(students))

#Create a function printInfo(some_dict) that given a dictionary whose values are all lists,
#prints the name of each key along with the size of its list, and then prints the associated
#values within each key's list. For example:

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def printInfo(x):
    print(str(len(dojo['locations'])) +' locations')
    for i in range(len(dojo['locations'])):
        print(dojo['locations'][i]) 
    print(str(len(dojo['instructors'])) + ' instructors')
    for j in range(len(dojo['instructors'])):
        print(dojo['instructors'][j])

print(printInfo(dojo))
