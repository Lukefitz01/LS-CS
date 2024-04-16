life = 1;
while life == 1:
    print("1) Create a new User ID")
    print("2) Change a password")
    print("3) Display all User IDs")
    print("4) Quit")
    print("      ")
    select = input("Enter Selection: ")
    print(select)
    if select == "1":
        def select1():
            userid =  input("Enter UserID: ");
            f = open("password.csv",'r');
            #Lines = f.readlines();
            #print(Lines)
            a = 0
            for line in f:
                if userid == line:
                    a = 1
                    break
                print(line)
            if a == 1:
                print("userid already exists")
                select1()
            if a == 0:
                f = open("password.csv",'w');
                f.write(userid)
                print("Userid entered successfully")
                def pw1():
                     
                     pw = input("Enter a password: ")
                     score = 0
                     pwlen = len(pw)
                     if pwlen > 7:
                         score = score + 1
                         print("len")
                     li = []
                     for y in range(0,pwlen):
                         if pw[y].isupper():
                             score = score + 1;
                             print("up")
                         if pw[y].islower():
                             score = score + 1;
                             print("low")
                         if pw[y].isdigit():
                             score = score + 1;
                             print("dig")
                         if pw[y].isalnum():
                             score = score
                         else:
                             print("spec")
                             score = score + 1
                            
                     if score == 0 or score == 1 or score == 2:
                        print("Weak Password")
                        pw1()
                     elif score == 3 or score == 4:
                        print("This password could be improved")
                        tr = input("Enter 1 to try again. 0 to not")
                        
                        if tr == "1":
                            pw1()
                        else:
                            f.write(pw)
                            print("Password entered")
                     elif score == 5:
                        print("Password is strong")
                        f.write(pw)
                        print("Password entered")
                        
                pw1()
                        
                    
                                
        select1()
            
        
   # else if select == 2:
        
   # else if select == 3:
        
   # else if select == 4:
    #    life == 0
    #    break
   # else: