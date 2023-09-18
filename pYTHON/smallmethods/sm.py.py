#1
txt = "Among Us"

utxt = txt.upper()
print(utxt)

#2
ltxt = txt.lower()
print(ltxt)

#3
ctxt = txt.count("n")
print(ctxt)

#4
findtxt = txt.find("A")
print(findtxt)

#5
replace = txt.replace("Us","You")
print(replace)

#6
lower = txt.islower()
print(lower)

#7
upper = txt.isupper()
print(upper)

#8
isanum = txt.isalnum()
print(isanum)

#9
isalpha = txt.isalpha()
print(isalpha)

#10
isdigit = txt.isdigit()
print(isdigit)

#11
index = txt.index("s")
print(index)

#12
strip = txt.strip("Us")
print(strip)

#13
li = ["terrorism" , "Ireland" , 777 , "Lukaku"]

li.append("sheesh")
print(li)

#14
li.extend("s")
print(li)

#15

li.insert(2,"China")
print(li)

#16
li.remove("Ireland")
print(li)

#17
li.pop(1)
print(li)

#18
# li.clear()
print(li)

#19
indexx = li.index("terrorism")
print(indexx)

#20
cc= li.count(777)
print(cc)

#21
# li.sort()
print(li)

#22
#sorted(li)

#23
li.reverse()
print(li)

#24
p = li.copy()
print(p)
