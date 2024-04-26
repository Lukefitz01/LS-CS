f = open("1000 random numbers - corrupted 1.txt","r")
alexander = []
y = f.readline()
#print(y)

# print(type(y))

lenny = len(y)
#print(lenny)

x = y.split(" ")
#print(x)

lenny2 = len(x)
print(lenny2)

print(type(x))

for adam in range(0,lenny2):
    temp = x[adam]
    #print(adam,temp)
    if temp.isdigit():
        alexander.append(int(x[adam])) 
        #print("hshs")

        
lenny2 = len(alexander)      
temp2 =  0  
for chuck in range(0,lenny2):
    temp2 = temp2 + int(alexander[chuck])
    
temp2 = temp2 / lenny2
mean = temp2


print(lenny2,mean)


ben_mcmenamin = lenny2 /2
print(ben_mcmenamin)
ben_mcmenamin = int(ben_mcmenamin)

for chuck2 in range(0,lenny2):
    if chuck2 == ben_mcmenamin:
        temp3 = 
    


    


    
        
