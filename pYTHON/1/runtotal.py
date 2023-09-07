# 1
rt = 0
v1 = 12
rt = rt + v1

v2 = 24
rt = rt + v2

v3 = 36
rt = rt + v3

v4 = 48
rt = rt + 48

#2

#f = open("daffodils.txt")
#content = f.read()
#print(content)
#f.close()

# 3
#Counter = 0
#f = open("daffodils.txt")
#content = f.read()
#c1 = content.split("\n")

#for i in c1:
 #   if i:
  #      Counter += 1
    
#print(Counter)

# 4
#a = int(input("Enter num "))
#b = int(input("Enter num "))
#c = int(input("Enter num "))
#d =int(input("Enter num "))
#e = int(input("Enter num "))
#f =int(input("Enter num "))
#g = int(input("Enter num "))
#h = int(input("Enter num "))
#i = int(input("Enter num "))
#j = int(input("Enter num "))
#k = int(input("Enter num "))
#l = int(input("Enter num "))
#m = int(input("Enter num "))
#n = int(input("Enter num "))
#o = int(input("Enter num "))
#p = int(input("Enter num "))
#q = int(input("Enter num "))
#r = int(input("Enter num "))
#s = int(input("Enter num "))
#t = int(input("Enter num "))

#total = a +b +c + d +e + f + g + h + i + j + k +l +m +n +o +p +q +r +s + t

#t1 = total / 20
#print(t1)


#5



f = open("avg.txt","w")

count = 0
   
while(count<10):
   num1 = input("Enter num ")
   f.write(num1)
   f.write("\n")
   count = count + 1
   
f.close()

f99 = open("avg.txt")

rt1 = 0
for line in f99:
    line = line.strip()
    if(line.isdigit()):
        rt1 = rt1 + int(line)
        print(rt1)
        
rt2 = rt1 / count
print(rt2)



