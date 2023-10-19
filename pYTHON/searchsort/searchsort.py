li = [11,1,2,4,7]
lininp = int(input("give a search argument "))
x = 0
y = 0
for x in li:
    #print(y)
    if lininp == li[y] :
        print("YES")
        print(y)
        break
    else:
        print("NO")
    y = y + 1
    
lininprec = int(input("give a search argument hfiuiuygf : "))
yy = 0

def recursion1(lininprec,yy):
    lirec = [11,1,2,4,7]
    
    if lininprec == li[y]:
        print("YES")
        return y
    else:
        print("NO")
        yy = yy + 1
        recursion1(lininprec, yy)
        
xx = recursion1(lininprec,yy)
print(xx)


bininp = int(input("give a search argument for binary : "))
def binary1(bininp):
    binary = [2,4,14,7,8,9,12,5,17,19,22,25,37,28,33,28]
    binary.sort()
    low = 0
    high = len(binary) - 1
    print(low,high)
    mid1 = low + high
    mid = mid1 // 2
    while 1 > 0:
        if binary[mid] == bininp:
            return mid 
        elif binary[mid] < bininp:
            low = mid + 1
        elif binary[mid] > bininp:
            high = mid - 1
    
c = binary1(bininp)
print(c)