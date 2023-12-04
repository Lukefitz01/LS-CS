import serial
import time
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
#C:/Users/18LFitzpatric.ACC/OneDrive/6th yr CS/PYTHON/Firebase/lccs-test-de459-firebase-adminsdk-rkiji-d710c81e03.json
# C:/A_Work/S/Firebase/lccs-test-de459-firebase-adminsdk-rkiji-d710c81e03.json
cred = credentials.Certificate("C:\\Users\\18LFitzpatric.ACC\\OneDrive\\6th yr CS\\PYTHON\\Firebase\\lccs-test-de459-firebase-adminsdk-rkiji-d710c81e03.json")
firebase_admin.initialize_app(cred,{'databaseURL': 'https://lccs-test-de459-default-rtdb.europe-west1.firebasedatabase.app/'})

ser = serial.Serial()
ser.baudrate = 115200
ser.port = "COM9"
ser.open()


ref = db.reference()
ref.update({'Reaction_Log':''})
ref = db.reference().child('Reaction_Log')
#LED_colour = input("Please input led colour: ")

while True:

    #print(type(ser.readline()))
    mb_re = str(ser.readline().decode("utf-8"))
    #mb_temperature.replace('"',"")
    mb_re = mb_led.replace(" ","")
    mb_re = mb_led.replace("\r\n","")
    #print("a")
    #print("Len of temp:",len(mb_led))
    print(mb_re)
    if mb_re.isdigit():
        if mb_led == '1':
            val = "ON"
        else:
            val = "OFF"
        ref.update({str(int(time.time())):{'MB_AB':mb_re,'Time':val}})
        
        # time . time is standard reading of time on alll PCS- sorts by time
    else:
        print("Check data source")