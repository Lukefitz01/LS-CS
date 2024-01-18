import serial
import time
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
#C:/Users/18LFitzpatric.ACC/OneDrive/6th yr CS/PYTHON/Firebase/lccs-test-de459-firebase-adminsdk-rkiji-d710c81e03.json
# C:/A_Work/S/Firebase/lccs-test-de459-firebase-adminsdk-rkiji-d710c81e03.json

#https://fire10db-5cdc9-default-rtdb.europe-west1.firebasedatabase.app/
#C:/A_Work/S/LS-CS-main/pYTHON/A_Project/fire10db-5cdc9-firebase-adminsdk-60918-83f459e38a.json
cred = credentials.Certificate("C:/A_Work/S/LS-CS-main/pYTHON/A_Project/fire10db-5cdc9-firebase-adminsdk-60918-83f459e38a.json")
firebase_admin.initialize_app(cred,{'databaseURL': 'https://fire10db-5cdc9-default-rtdb.europe-west1.firebasedatabase.app/'})

ser = serial.Serial()
ser.baudrate = 115200
ser.port = "COM5"
ser.open()


ref = db.reference()
ref.update({'reaction log':''})
ref = db.reference().child('ProjReactionLog')



while True:
    print("-------")
    mb_re = str(ser.readline().decode("utf-8"))
    
    mb_re = mb_re.replace(" ","")
    mb_re = mb_re.replace("\r\n","")
    testing = len(mb_re)
    mb_temp = mb_re[-2:]
    mb_re = mb_re[0:testing - 3]
    print(mb_re)
    print(mb_temp)
   
    ref.update({str(int(time.time())):{'ReactionTime':mb_re,'Temp':mb_temp}})
    #10N23 5 char
    #100N23 6
    #1000N23 7 
    #10000N23 8