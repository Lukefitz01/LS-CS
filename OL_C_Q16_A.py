
# Please enter name:

print("******************")
print("*  Conversions   *")
print("******************")
print("1) From teaspoons   to ml")
print("2) From tablespoons to ml")
print("3) From cups        to ml")
print("4) From ml          to teaspoons")
print("5) From ml          to tablespoons")
print("6) From ml          to cups")

conversion = int(input("Please enter conversion:"))


if conversion == 1:
    teaspoons = int(input("Please enter number of teaspoons:"))
    ml = teaspoons * 5
    print("The ml is:", ml)
elif conversion == 2:
    tablespoons = int(input("Please enter number of tablespoons:"))
    ml = tablespoons * 15
    print("The ml is:", ml)





