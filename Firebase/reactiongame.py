import serial
import time
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
#C:/Users/18LFitzpatric.ACC/OneDrive/6th yr CS/PYTHON/Firebase/lccs-test-de459-firebase-adminsdk-rkiji-d710c81e03.json
# C:/A_Work/S/Firebase/lccs-test-de459-firebase-adminsdk-rkiji-d710c81e03.json
cred = credentials.Certificate("C:/Users/18LFitzpatric.ACC/OneDrive/6th yr CS/PYTHON/Firebase/lccs-test-de459-firebase-adminsdk-rkiji-d710c81e03.json")
firebase_admin.initialize_app(cred,{'databaseURL': 'https://lccs-test-de459-default-rtdb.europe-west1.firebasedatabase.app/'})

ser = serial.Serial()
ser.baudrate = 115200
ser.port = "COM7"
ser.open()


ref = db.reference()
ref.update({'reaction log':''})
ref = db.reference().child('Reaction_Log')



while True:
    xyz = time.time()
    xyz = int(xyz)
    print("-----------------------------")
    c = 0
    ref = db.reference().child('Reaction_Log')
    
    while c < 2:
        #print("a")
        #print(type(ser.readline()))
        mb_re = str(ser.readline().decode("utf-8"))
        print(mb_re)
        mb_re = mb_re.replace(" ","")
        mb_re = mb_re.replace("\r\n","")
        #val1 = mb_re[0]
        #val2 = mb_re[1:]
        #print("v1",val1)
        #print("v2",val2)
        print("x",xyz)
        if c == 1:
            ref = db.reference().child('Reaction_Log').child(xyz)
            ref.update({'Time':mb_re})
            print("a")
            c = c + 1
            # time . time is standard reading of time on alll PCS- sorts by time
        else:
             ref.update({str(xyz):{'MB_AB':mb_re}})
             print("b")
             c = c + 1
