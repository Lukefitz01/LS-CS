import serial
import time
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db


#C:/Users/18LFitzpatric.ACC/OneDrive/6th yr CS/PYTHON/Firebase/lccs-test-de459-firebase-adminsdk-rkiji-d710c81e03.json
# C:/A_Work/S/Firebase/lccs-test-de459-firebase-adminsdk-rkiji-d710c81e03.json
# 
#cred = credentials.Certificate("C:\\Users\\18LFitzpatric.ACC\\OneDrive\\6th yr CS\\PYTHON\\Firebase\\lccs-test-de459-firebase-adminsdk-rkiji-d710c81e03.json")
#firebase_admin.initialize_app(cred,{'databaseURL': 'https://lccs-test-de459-default-rtdb.europe-west1.firebasedatabase.app/'})
cred = credentials.Certificate("C:\\Users\\18LFitzpatric.ACC\\OneDrive\\6th yr CS\\PYTHON\\Firebase\\lccs-test-de459-firebase-adminsdk-rkiji-d710c81e03.json")
firebase_admin.initialize_app(cred,{'databaseURL': 'https://lccs-test-de459-default-rtdb.europe-west1.firebasedatabase.app/'})

ser = serial.Serial()
ser.baudrate = 115200
ser.port= "COM7"
ser.open()


while True:
    toggle = "1\n"
    ser.write(toggle.encode('utf-8'))
    time.sleep(5)
    toggle = "0\n"
    ser.write(toggle.encode('utf-8'))
    time.sleep(5)
    
    