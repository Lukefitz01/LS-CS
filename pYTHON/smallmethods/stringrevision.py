#020
input1 = input("Enter your first name: ")

a = len(input1)
print(a)

#021
input2 = input("Enter your surname: ")
fullname = input1 + " " + input2

lenname = len(fullname)

print(fullname,lenname)

#022


fupper = fullname.upper()
print(fupper)

#023
input3 = input("Enter the 1st line of a nursery rhyme: ")
in3len = len(input3)

print(in3len)

input4 = int(input("Enter a starting num"))
input5 = int(input("Enter an ending num"))

ret = input3[input4:input5]
print(ret)


#025
input6 = input("Enter your first name: ")

len6 = len(input6)

if len6 < 6 :
    input7 = input("Enter your surname")
    fullname2 = input6 + input7
    fn3u = fullname2.upper()
    print(fn3u)
else:
    firstlower = input6.lower
    print(firstlower)
    
    
#026
input8 = input("input 026: ")

    