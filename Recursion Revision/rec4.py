num1 = int(input("Enter a number:")) # 2
num2 = int(input("Enter another number:")) # 4
total = 0
count = 0
var = 1
def f1(num1,num2,total,count,var):
    if count == 0:
        total = num1 * var
    else:
        total = total * num1
    print(var,count)
    var = var + 1
    count = count + 1
    print(total)
    if count == num2:
        print(total)
        return total;
    else:
        f1(num1,num2,total,count,var)
        

f1(num1,num2,total,count,var) 
