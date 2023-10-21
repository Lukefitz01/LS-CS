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
    #print(low,high)
   
    while 1 > 0:
        mid1 = low + high
        mid = mid1 // 2
        if binary[mid] == bininp:
            return mid
            break
           
            
        elif binary[mid] < bininp:
            low = mid + 1
          
            
        elif binary[mid] > bininp:
            high = mid - 1
           
            
    
c = binary1(bininp)
print(c)

def binrec(low,high,binary,bininp2):
        mid1 = low + high
        mid = mid1 // 2
        print(low,high,mid)
        print(bininp2)
        if binary[mid] == bininp2:
            print("ENDING IS",mid)
            return mid 
            
        elif binary[mid] < bininp2:
            low = mid + 1
            binrec(low,high,binary,bininp2)
          
        elif binary[mid] > bininp2:
            high = mid - 1
            binrec(low,high,binary,bininp2)
            
bininp2 = int(input("give a search argument for binary rec : "))
def binary2(bininp2):
    binary = [2,4,14,7,8,9,12,5,17,19,22,25,37,28,33,28]
    binary.sort()
    low = 0
    high = len(binary) - 1
   
    cc = binrec(low,high,binary,bininp2)
    print("cc",cc)
    return(cc)
           
            
    
c2 = binary2(bininp2)
print(c2)


def simplesort():
    list1 = [1,22,764,2,90]
    list2 = []
    value = 0
    y = 0
    y2 = 999
    lenL = len(list1) 
    for u in range(lenL):
        y = 0
        y2 = 999
        for x in list1:
            
            if y == 0:
               value = list1[0]
               y2 = y
            elif list1[y] < value:
                value = list1[y]
                y2 = y
            y = y + 1
          
        list2.append(value)
        list1.pop(y2)
          
    return list2
v = simplesort()
print(v)
    
