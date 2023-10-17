import random

mynum = random.random()
print(mynum)
mynum = random.randint(0,9)
#print(mynum)
mynum = random.randrange(0,10,2)
#print(mynum)
mynum = random.choice("abc")
#print(mynum)

#Q1
q1 = random.randint(0,100)
print(q1)

#q2
q2list = ["apple","pear","grape","pear2","orange"]
q2 = random.choice(q2list)
print(q2)

#q54
q3list = ["h","t"]
q3 = random.choice(q3list)

a = input("Choose h for heads or t for tails: ")

if a == q3:
    print("You win")
else:
    print("bad luck")
    
print("computer picked",q3)


#q55
q55 = random.randint(1,5)
b = int(input("Choose a num between 1 and 5: "))


if b == q55:
    print("Well done")
elif b > q55:
    print("too high")
    b2 = int(input("Choose a num between 1 and 5: "))
    if b2 == q55:
        print("Correct")
    else:
        print("You lose")
elif b < q55:
    print("too low")
    b3 = int(input("Choose a num between 1 and 5: "))
    if b3 == q55:
        print("Correct")
    else:
        print("You lose")
        
#q56
q56 = random.randint(1,10)
c = int(input("Choose a num between 1 and 10: "))
x = 0
while x < 10:
    c = int(input("Choose a num between 1 and 10: "))
    if c == q56:
       break
    
#q57
q57 = random.randint(1,10)
d = int(input("Choose a num between 1 and 10: "))
y =  0
while y < 10:
    d = int(input("Choose a num between 1 and 10: "))
    if d == q57:
       break
    elif d > q57:
        print("Too high")
    elif d < q57:
        print("Too low")
        
#q58
q5811 = random.randint(0,10)
q5812 = random.randint(0,10)
q5813 = q5811 + q5812

q5821 = random.randint(0,10)
q5822 = random.randint(0,10)
q5823 = q5821 + q5822

q5831 = random.randint(0,10)
q5832 = random.randint(0,10)
q5833 = q5831 + q5832

q5841 = random.randint(0,10)
q5842 = random.randint(0,10)
q5843 = q5841 + q5842

q5851 = random.randint(0,10)
q5852 = random.randint(0,10)
q5853 = q5851 + q5852
#print(q5853)
points = 0

for i in range(1,5,1):
    userin = int(input("Choose a num between one and 20 : "))
    if userin == q5813 or userin == q5823 or userin == q5833 or userin == q5843 or userin == q5853:
        print("Correct! ")
        points = points + 1
        print("Points are ",points)
    else:
        print("Incorrect")
        
print("points are totaled",points)


#q59


q59list = ["Green","Blue","Green2","Red","Yellow"]
q5921 = random.choice(q59list)
ha = 0
while ha == 0:
    q59 = input("Choose Green Blue Green2 Red or Yellow: ")
    if q59 == q5921:
        print("WELL DONE. YOU HAVE CHOSEN THE CORRECT COLOUR ")
        ha = ha + 1
    elif q5921 == "Green":
        print("I bet you are GREEN with envy")
    elif q5921 == "Blue":
        print("You are probably feeling BLUE right now")
    elif q5921 == "Green2":
        print("I bet your favourite colour is GREEN2")
    elif q5921 == "Red":
        print("Your piss is now RED")
    elif q5921 == "Yellow":
        print("The sun is no longer YELLOW")
