f = open("mmmf.csv","r")
dic = {}
li = []

for line in f:
    line2 = line.strip()
    #line2 = line[-1]
    line2 = line2.split(",")
    
    if line2[0] != "":
        #print(line2)
        dic.clear()
        sizelist = len(line2)
        sizelist1 = sizelist - 1
        last = line2[sizelist1]
        #print(last)
        #print(line2)
        #print(sizelist)
        
        counter = 0
        for x in range(0,sizelist,1):
            value = line2[counter]
            #print(value)
            
            if value in dic:
                dic[value] = dic[value] + 1
            else:
                dic[value] = 1
            counter = counter + 1
           
        #print(dic)
        counteradd = 0
        counteradd2 = 0
        counteradd3 = 0
        for y in dic:
            val = dic.get(y)
            #print(val)
            y = int(y)
            val = int(val)
            counteradd = y * val
            counteradd3 = val + counteradd3
            counteradd2 = counteradd2 + counteradd
            
            mean = counteradd2 / counteradd3
            
        print("The Mean is",mean)
        counteradd = 0
        counteradd2 = 0
        counteradd3 = 0
        for a in dic:
            val = dic.get(a)
            val = int(val)
            counteradd3 = val + counteradd3
            
        if counteradd3 % 2 == 0:
            counteradd4 = counteradd3 / 2
            counteradd4 = int(counteradd4)
            median = line2[counteradd4]
           
            print("Median is",median)
        else:
            counteradd4 = counteradd3 - 1
            counteradd4 = counteradd4 / 2
            #print(counteradd4)
            counteradd4 = int(counteradd4)
            line2c = int(line2[counteradd4])
            line2c1 = int(line2[counteradd4 + 1])
            median = line2c + line2c1
            median = median / 2
            print("Median is",median)   
       
        counteradd3 = 0
        counter33 = 0
        list33 = []
        for s in dic:
            val = dic.get(s)
            #val = int(val)
            #print(val)
            if val not in list33:
                list33.append(val)
               
        #print(list33)     
        modal = 0    
        for ss in list33:
            if counter33 == 0:
                modal = list33[0]
            elif list33[counter33] > modal:
                modal = list33[counter33]
            
            #print(modal)
            counter33 = counter33 + 1
        for kk,vv in dic.items():
            if vv == modal:
                print("This is the modal: ",kk)
                
        for kk2,vv2 in dic.items():
            print(kk2, "appears",vv2,"times")
        
        
          
            
            
            
        
            
            

            
  
    
       
    