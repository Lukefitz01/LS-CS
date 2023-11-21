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
ser.port = "COM3"
ser.open()


ref = db.reference()
ref.update({'Temp log':''})
ref = db.reference().child('temperature_log')
source = input("Please input data source")

while True:
    #print(type(ser.readline()))
    mb_temperature = str(ser.readline().decode("utf-8"))
    #mb_temperature.replace('"',"")
    mb_temperature = mb_temperature.replace(" ","")
    mb_temperature = mb_temperature.replace("\r\n","")
    print("Len of temp:",len(mb_temperature))
    print(mb_temperature)
    if mb_temperature.isdigit():
        ref.update({str(int(time.time())):{'Temperature':mb_temperature, 'Location':source}})
        # time . time is standard reading of time on alll PCS- sorts by time
    else:
        print("Check data source")
    