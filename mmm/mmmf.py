f = open("mmmf.csv","r")
dic = {}
li = []

for line in f:
    line2 = line.strip()
    line2 = line[:-1]
    line2 = line.split(",")
    if line2[0] != "\n":
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
            print(value)
            
            if value in dic:
                dic[value] = dic[value] + 1
            else:
                dic[value] = 1
            counter = counter + 1
           
        print(dic)
            
  
    
       
    