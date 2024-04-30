str1 = input("Enter a string: ") # abc0ip

count = 0
var = 1
def f1(str1,count):
   temp = str1[count]
   print(temp)
   l = len(str1)
   if temp.isdigit():
       print(temp,"True")
       x = "True"
       return x;
   count = count +1
   if count == l:
        print("False")
        y = "False"
        return y;
   else:
        f1(str1,count)
        

f1(str1,count) 
