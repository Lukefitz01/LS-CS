#1
#MyFloatValue = 9.82

#MyIntValue = int(MyFloatValue)
#print(type(MyIntValue))
#MyStrValue = str(MyFloatValue)
#print(type(MyStrValue))
###2
#MyString = "Romelu Lukaku"

# Mynum = int(MyString)

# ValueError: invalid literal
# for int() with base 10: 'Romelu Lukaku'


#3
# year = int(input("Enter the current year: "))
# age = int(input("What age will you be at the end of this year? ")) 
# print("You were born in", year-age)

#4
# A will give an error as 2000 is a string and 18 is an int.


# 10
##mars = 1.00
#coke = 1.50
#crisp = 0.80
#tea = 2.00
 #bread = 3.50

#totalmars = mars*5
#totalcoke = coke*4
#totalcrisp = crisp*3
#totaltea = tea*2

#total = totalmars + totalcoke + totalcrisp + totaltea + bread
#print(total)


## 11
#number1 = int(input("Enter first number: "))
#number2 = input("Enter second number: ")
#number2 = int(number2)
#sum = number1  + number2
#print(number1, "+" , number2 , "=", sum)

# 12
#far = int(input("Enter Fahrenheit: "))
#far1 = far - 32
#fivenine = 5/9
#c1 = far1*fivenine
#c = round(c1 , 2)
#print(c)

# 13

dd = int(input("Enter Day Of the month: "))
mm = int(input("Enter Month number: "))
y =  int(input("Enter Year: "))

if mm == 1 :
   mm = 13
   y = y - 1
elif mm == 2:
    mm = 14
    y = y - 1
    
c = y // 100
y = y % 100


mm1 = mm + 1 # works
mm2 = 13 * mm1 # works
mmtotal = mm2 // 5 # works 

mmdd = mmtotal + dd # works 37 


y1 = y//4 # works 
c1 = c//4 # works 5
c2 = 2 * c # works

cy = y1 + c1 + y # works

subtotal = cy + mmdd 

subtotal1 = subtotal - c2

w = subtotal1 % 7

print("This is the",w,"day of the week")






