f = open("1000 random numbers - corrupted 1.txt","r")
alexander = []
y = f.readline()
print(y)

# print(type(y))

lenny = len(y)
print(lenny)

x = y.split(" ")
print(x)

lenny2 = len(x)
print(lenny2)


for adam in range(0,lenny2):
    temp = x[adam]
    if temp.isdigit():
        x[adam] = int(x[adam])
    else:
        print(temp)
    

    
        
