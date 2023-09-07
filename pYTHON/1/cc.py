# 1
#a = d
#b =e
#c =f
#d =g
#e =h
#f =i
#g =j
#h =k
#i =l
#j =m
#k = n
#l = o
#m =p
#n =q
#o =r
#p =s
#q =t
#r =u
#s =v
#t =w
#u =x
#v =y
#w =z
#x =a
#y =b
#z =c



# 2
 # dweilkb zljjrkfqv zliibdb
 
#3
 # 25 keys
 
# 4
# what do you get when you cross a snowman with a vampire? Frostbite

#5

    
input1 = input("Enter String: ")
n = int(input("Enter shift number: "))
ans = ""

uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

for i in input1:
    ch = i
        
    if (ch == " "):
        ans = ans + " "
    # check if a character is uppercase then encrypt it accordingly 
    elif (i in uppercase):
        ans = ans + chr((ord(ch) + n-65) % 26 + 65)
     # check if a character is lowercase then encrypt it accordingly
        
    elif(i in lowercase):
        ans = ans + chr((ord(ch) + n-97) % 26 + 97)
    
    


print("Input is : ", input1)
print("Answer is : ", ans)

