"""
Python coding problem
- you are given a random list of people with their birth months
- return to me the list sorted by birth month
- please do this in linear time
- can you analyze the time complexity of your implementation?
 
E.g.
given [('John', 3), ('Jane', 8), ('Jim', 0)]
return [('Jim', 0), ('John', 3), ('Jane', 8)]
"""

peopleList = [('John', 3), ('Jane', 8), ('Jim', 0)]

def bubble_sort(items):
    """ Implementation of bubble sort """
    for i in range(len(items)): 
        for j in range(len(items)-1-i):
            if items[j][1] > items[j+1][1]:		#check the actual month value of the tupple
                items[j], items[j+1] = items[j+1], items[j]     # Swap!
    print (peopleList)

bubble_sort(peopleList)	