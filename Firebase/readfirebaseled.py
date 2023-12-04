import serial
import time
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

def doSomething(response):
    print(response.data)
#C:/Users/18LFitzpatric.ACC/OneDrive/6th yr CS/PYTHON/Firebase/lccs-test-de459-firebase-adminsdk-rkiji-d710c81e03.json
# C:/A_Work/S/Firebase/lccs-test-de459-firebase-adminsdk-rkiji-d710c81e03.json
# 
#cred = credentials.Certificate("C:\\Users\\18LFitzpatric.ACC\\OneDrive\\6th yr CS\\PYTHON\\Firebase\\lccs-test-de459-firebase-adminsdk-rkiji-d710c81e03.json")
#firebase_admin.initialize_app(cred,{'databaseURL': 'https://lccs-test-de459-default-rtdb.europe-west1.firebasedatabase.app/'})
cred = credentials.Certificate("C:\\Users\\18LFitzpatric.ACC\\OneDrive\\6th yr CS\\PYTHON\\Firebase\\lccs-test-de459-firebase-adminsdk-rkiji-d710c81e03.json")
firebase_admin.initialize_app(cred,{'databaseURL': 'https://lccs-test-de459-default-rtdb.europe-west1.firebasedatabase.app/'})


ref = db.reference()
#ref.update({'Led log':''})
ref = db.reference().child('led_log')
#LED_colour = input("Please input led colour: ")
ref.listen(doSomething)
#while True:

    #print(type(ser.readline()))
    #mb_led = str(ser.readline().decode("utf-8"))
    #mb_temperature.replace('"',"")
    #mb_led = mb_led.replace(" ","")
    #mb_led = mb_led.replace("\r\n","")
    #print("a")
    #print("Len of temp:",len(mb_led))
    #print(mb_led)
  #  if mb_led.isdigit():
   #     if 
    #    else:
           
        
        # time . time is standard reading of time on alll PCS- sorts by time
  #  else:
   #     print("Check data source")