#sports = ["football", "eating"]
#print(sports)
#input1 = input("What is your favourite sport:")

#sports.append(input1)
#print(sports)

#072
#subjects = ["maths", "economics", "physics" , "computer science" , "irish", "english"]

#input2 = input("Which of maths , economics , physcis , cs , irish or english do you like the least? ")
#subjects.remove(input2)

#print(subjects)

#074
#colours = ["white", "black","purple", "pink", "blue", "green", "grey", "indigio", "yellow","1994"]

#input3 = int(input("Input starting num 0-4"))
#input4 = int(input("Input ending num 5-9 "))

#colours1 = colours[input3:input4]
#print(colours)

#075
#nums = ["100", "634" , "999"]

#for x in nums:
 #   print(x)
    
#input5 = input("Enter a 3 digit number: ")


#if input5 in nums:
 #   y = nums.index(input5)
#    print(y)
#else:
#    print("Not in list")
    

#076
#people = []
#yes = "true"
#yy = 0
#yyy = 0
#while yes == "true" :
#    if yy > 2:
#        input7 = input("Do you want to enter another name? ")
#        if input7 == "yes":
#            input8 = input("Enter a name: ")
#            people.append(input8)
#        else:
 #           for x in people:
 #               yyy = yyy + 1
 #           yes = "false"
  #          print(yyy)
 #   else:
#        input6 = input("Enter a name: ")
#        people.append(input6)
 #   yy = yy + 1
    
    


#077
people = []
yes = "true"
yy = 0
yyy = 0
while yes == "true" :
    if yy > 2:
        input7 = input("Do you want to enter another name? ")
        if input7 == "yes":
            input8 = input("Enter a name: ")
            people.append(input8)
        else:
            for x in people:
                yyy = yyy + 1
            yes = "false"
            print(yyy)
    else:
        input6 = input("Enter a name: ")
        people.append(input6)
    yy = yy + 1
    
    
print(people)
input9 = input("Enter a name on the list: ")

yyyy = people.index(input9)
print(input9, "is posistion", )