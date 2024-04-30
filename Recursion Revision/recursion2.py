num = 10
total = 0
count = 0 
numc2 = num
def f1(num,total,count,numc2):
    
    count = count + 1
    numc = num - count
    print(numc,numc2)
    # total = 90
    # num = 10
    if count == 1:
        total = total + num * numc
    else:
        total = total * numc
    print(total)
    if count == num - 1:
        print(total)
        return total;
    else:
        f1(num,total,count,numc2)
        

f1(num,total,count,numc2) 

