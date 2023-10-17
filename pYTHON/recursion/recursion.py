#1
def sumcalc(lis):
    if len(lis) == 0:
       return 0
    else:
       return lis[0] + sumcalc(lis[1:])
li = [1,7,99,65,3]
#print(sumcalc(li))

#2
def q2(num):
    if num == 0:
        return 1
    else:
        return num * q2(num - 1)
    
    
#print(q2(3))



def q3(initnum,n,n2):
    if n2 - 1 == n:
     
     return initnum
    else:
     n = n + 1
     initnum2 = initnum + q3(initnum,n,n2)
     initnum = initnum + initnum2
     return initnum
    
    
initnum = 0
n2 = 5
n = 0
#print(q3(initnum , n,n2))

def q4(q4nstr,n):
   
   if n == 0:
        return 0
   else:
      addvalue1 = int(q4str[n - 1])
      addtotal = addtotal + addvalue1
      n = n - 1
      q4(q4str,n)
                
    
    
    
    
    
q4num = 1152
q4str = str(q4num)
n = len(q4str)
print(q4(q4str,n))