def insertionsort(li,li2,marker):
    #print("start li2",li2)
    var1 = 0
    length = len(li2)
    for var in li2:
        #print("yes",var1)
        if li[marker] > var:
            var1 = var1 + 1
        #print("var1",var1)
    if var1 > length or var1 == length:
        li2.append(li[marker])
    else:
        li2.insert(var1,li[marker])
    length = len(li2)
    if length == len(li):
        print(li2)
        return li2
    else:
        #print("li",li)
        #print("li2",li2)
        #print("marker", marker)
        #print("length",length)
        #print("----------------------------------")
        marker = marker + 1
        insertionsort(li,li2,marker)
        return li2
    
li = [5,7,3,6,2,9,1,8,4]
li2 = li[:1]
marker = 1
print("The end is",insertionsort(li,li2,marker))



def quicksort(unsorted,pivot,left,middle,right):
    for var in unsorted:
        if var > pivot:
        elif var == pivot:
        elif var < pivot:
    
unsorted = [88,46,25,11,18,22]
pivot = unsorted[-1]
left = []
middle = []
right = []
print(quicksort(unsorted,pivot,left,middle,right))
    
