import serial
import time
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
def something_Changed(response):
    print(response.event_type)
    print(response.data)
   

cred = credentials.Certificate("C:/A_Work/S/Firebase/lccs-test-de459-firebase-adminsdk-rkiji-d710c81e03.json")
firebase_admin.initialize_app(cred,{'databaseURL': 'https://lccs-test-de459-default-rtdb.europe-west1.firebasedatabase.app/'})

ser = serial.Serial()
ser.baudrate = 115200
ser.port = "COM3"
ser.open()

ref = db.reference().child('temperature_log')
my_ref = ref.listen(something_Changed)