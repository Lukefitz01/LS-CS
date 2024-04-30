li = [1,4,6,4,9,11]
count = 0
value = 0
def f1(li,count,value):
    value = value + li[count]
    count = count + 1
    print(value)
    if count == len(li):
        print(value)
        return value;
    else:
        f1(li,count,value)
        
print(f1(li,count,value))
    

