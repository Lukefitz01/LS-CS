#sentence = input("Enter a sentence: ")
#chars = {}
#for char in sentence:
    #if char in chars:
   #     chars[chars] = chars[chars] + 1
  #  else:
 #       chars[chars] = 1
#print(chars)
# The program asks  the user to enter a sentence , creates a dictionary, and prints and amount of letters in the string and gives each letter a value
#2
#sentence = input("Enter a sentence: ")
#chars = {}
#for char in sentence:
 #   print(char)
 #   if char in chars:
 #       chars[char] = chars[char] + 1
 #   else:
 #       chars[char] = 1
#print(chars)
# prints each letter before doing #1

#3. chars is a dictionary

#4 keys are letter
# values are number

#5
#sentence = input("Enter a sentence: ")
#chars = {}
#for char in sentence:
 #   chars[char] = chars.get(char,0) + 1
#print(chars)

#6  Return the value for key if key is in the dictionary, else default. If default is not given, it defaults to None, so that this method never raises a KeyError. It does the same thing


#7
#vowles =  ['a',"e","i","o","u"]
#sentence = input("Enter a sentence: ")
#chars = {}
#for char in sentence:
#    if char in vowles:
#        if char in chars:
 #           chars[char] = chars[char] + 1
#        else:
#            chars[char] = 1
#print(chars)

#8
#vowles =  ["a","e","i","o","u"]
#sentence = input("Enter a sentence: ")
#chars = {}
#chars["Vowles"] = 0
#chars["conso"] = 0
#for char in sentence:
#    if char in vowles:
#            chars["Vowles"] = chars["Vowles"] + 1
#    else:
#            chars["conso"] = chars["conso"] + 1
#         
#print(chars)

#9
#sentence = input("Enter a sentence: ")
#chars = {}

#x = sentence.split(" ")
#print(x)

#for thing in x:
#    if thing in chars:
#        chars[thing] = chars[thing] + 1
#    else:
#        chars[thing] = 1
#print(chars)

#10
#sentence = input("Enter a sentence: ")
#chars = {}
#for char in sentence:
#    if char in chars:
#        chars[char] = chars[char] + 1
#    else:
#        chars[char] = 1
#print(chars)
#from collections import Counter
#c = Counter(chars)
#max_pair = c.most_common() [0]
#print("%s occurs most often %d times" %(max_pair[0], max_pair[1]))

# the program displays the letter that occurs most often and says how many times

#11
# ???

#12
# i prefer the solution in part k , as it uses terminology that i understand and not random imports
sentence = input("Enter a sentence: ")
chars = {}
for char in sentence:
    if char in chars:
        chars[char] = chars[char] + 1
    else:
        chars[char] = 1
print(chars)
max_key = ""
max_value = 0

count = 1
for k,v in chars.items():
count = count + 1
    if v > max_value:
        max_value = v
        max_key = k
    elif count > chars.items():
        pop
    

        

    print("%s occurs most often %d times" %(max_key, max_value))

    

 