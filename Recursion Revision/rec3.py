num = 1234
total = 0
count = 0
num = str(num)
def f1(num,total,count):
    l = len(num)
    
    total = total + int(num[count])
    count = count + 1

    print(total)
    if count == l:
        print(total)
        return total;
    else:
        f1(num,total,count)
        

f1(num,total,count) 
