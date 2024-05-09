
# Enter name:

county = ["Dublin", "Laois", "Dublin", "Dublin", "Dublin", "Dublin", "Dublin", "Kildare", "Laois", "Kildare", "Dublin", "Laois", "Dublin"]

rent = [2500, 1200, 2000, 2100, 1900, 1999, 1790, 1500, 1000, 1390, 1980, 1105, 1999]

# Part i
total = len(rent)
print("The total people in the survey is: ",total)

# Part ii
inp1 = input("Enter your county name: ")
inp2 = int(input("Enter your rent amount: "))

county.append(inp1)
rent.append(inp2)

total =len(rent)

print("-"*18)
print("{:<12}".format("County")+"{:<12}".format("Rent €"))
print("-"*18)
for index in range(len(county)):
    print("{:<12}".format(county[index])+"{:<12}".format(rent[index]))

# Part iii
adam = 0
for y in range(0,total):
    print(rent[y])
    adam = adam + rent[y]


adam = adam / total
adam = round(adam,2)
print("Average rent for all counties: ",adam)

# Part iv


t1 = 0
t11 = 0
t2 = 0
t22 = 0
t3 = 0
t33 = 0

for u in range(0,total):
    if county[u] == "Dublin":
        t1 = t1 + rent[u]
        t11 = t11 + 1
    if county[u] == "Kildare":
        t2 = t2 + rent[u]
        t22 = t22 + 1
    if county[u] == "Laois":
        t3 = t3 + rent[u]
        t33 = t33 + 1
        
        
t1 = t1 / t11
t2 = t2 / t22
t3 = t3 / t33

t1 = round(t1,1)
t2 = round(t2,1)
t3 = round(t3,1)

print("Average rent for Dublin: ",t1)
print("Average rent for Kildare: ",t2)
print("Average rent for Laois: ",t3)