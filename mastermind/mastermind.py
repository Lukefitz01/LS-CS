import random

colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
l2 = []
guesses = 0
death = 0

print("colours are red, orange, yellow, green, blue, indigo, violet")
c1 = random.choice(colours)
c2 = random.choice(colours)
c3 = random.choice(colours)
c4 = random.choice(colours)
l2.append(c1)
l2.append(c2)
l2.append(c3)
l2.append(c4)

print(l2)
while death < 4:
    i1 = input("Choose a colour: ")
    i2 = input("Choose a colour: ")
    i3 = input("Choose a colour:")
    i4 = input("Choose a colour:")
    guesss = guesses + 1

    l3 = []
    l3.append(i1)
    l3.append(i2)
    l3.append(i3)
    l3.append(i4)
    correct = 0
    correct1 = 0
    if l2[0] == l3[0]:
        correct = correct + 1
        death = death + 1
    if l2[1] == l3[1]:
        death = death + 1
        correct = correct + 1
    if l2[2] == l3[2]:
        death = death + 1
        correct = correct + 1
    if l2[3] == l3[3]:
        death = death + 1
        correct = correct + 1
        
    print("Correct colour in the correct place : ",correct);
    guesses = guesses + 1
    if death == 4:
        break
        
    for i in range (0,4):
        if i == 0:
            if l3[i] == l2[1]:
                correct1 = correct1 + 1
            if l3[i] == l2[2]:
                correct1 = correct1 + 1
            if l3[i] == l2[3]:
                correct1 = correct1 + 1
        if i == 1:
            if l3[i] == l2[0]:
                correct1 = correct1 + 1
            if l3[i] == l2[2]:
                correct1 = correct1 + 1
            if l3[i] == l2[3]:
                correct1 = correct1 + 1
        if i == 2:
            if l3[i] == l2[0]:
                correct1 = correct1 + 1
            if l3[i] == l2[1]:
                correct1 = correct1 + 1
            if l3[i] == l2[3]:
                correct1 = correct1 + 1
        if i == 3:
            if l3[i] == l2[0]:
                correct1 = correct1 + 1
            if l3[i] == l2[1]:
                correct1 = correct1 + 1
            if l3[i] == l2[2]:
                correct1 = correct1 + 1
    print("Correct colour but in wrong place, ",correct1)
   
    
print("You have won you took",guesses,"guesses")
            
        
        


