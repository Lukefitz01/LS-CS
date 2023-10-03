import random
def oneoneeight():
    num = int(input("Enter a number: "))
    oneoneeight2(num)


def oneoneeight2(num):
    count = 0
    for x in range(0,num,1):
        count = count + 1
        print(count)
    
def oneonenine2(output1):
    print("I am thinking of a number:")
    j = int(input("What is it: "))
    output1 = output1
    oneonenine3(output1, j)
    
    
def oneonenine3(output1, j):
    if output1 == j:
        print("correct")
        
    elif j > output1:
        print("too high")
    else:
        print("too low")
    
def oneonenine():
    num = int(input("Enter a low number: "))
    num2 = int(input("Enter a high number: "))
    output1 = random.randrange(num, num2)
    
    oneonenine2(output1)
  
def onetwozero4(o1 , num4):
    if o1 == num4:
        print("correct")
    else:
        print("no")
def onetwozero2():
     num1 = random.randrange(5,20)
     num2 = random.randrange(5,20)
     print(num1)
     print(num2)
     o1 = int(input("Add the numbers"))
     num3 = num1 + num2
     print("Your answer is",num3)
     print("Correct answer is",o1)
     
     onetwozero4(o1,num3)
def onetwozero3():
     num1 = random.randrange(25,50)
     num2 = random.randrange(25,50)
     print(num2)
     print(num1)
     o1 = int(input("Subtract the numbers"))
     num3 = num2 - num1
     print("Your answer is",num3)
     print("Correct answer is",o1)
     
     onetwozero4(o1,num3)
def onetwozero():
    inp = 0
    print("1) Addition")
    print("2) Subtraction")
    inp = int(input(("Enter one or two: ")))
    if inp == 1:
        onetwozero2()
    elif inp == 2:
        onetwozero3()
    else:
        print("invalid input")
        
        
def onetwoone():
    print("1) Add name")
    print("2) Change name")
    print("3) Delete name")
    print("4) View all names")
    print("5) End program")
    
    