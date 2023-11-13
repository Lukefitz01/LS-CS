import time
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

cred = credentials.Certificate("C:/A_Work/S/lccs-test-de459-firebase-adminsdk-rkiji-d710c81e03.json")
firebase_admin.initialize_app(cred,{'databaseURL': 'https://lccs-test-de459-default-rtdb.europe-west1.firebasedatabase.app/'})
#ref = db.reference() # / is referencing root of data base. the data page (assuming nothing in bracket)
# info needs to be in dict format
# set means send info to database
#ref.set({'users': {'user1':{'name':'bob',
#                           'height':'tall',
#                            'age':200},
#                   'user2':{'name':'jane',
#                            'height':'small',
#                            'age':200}
                   
#        }})
  
#ref.update({'class_enrolements':''})
#ref.update({'classes':''})

#ref = db.reference().child('class_enrolements')
#ref.update({'Biology123':''})
#ref.update({'Maths123':''})

#   ref = db.reference().child('classes')
#    ref.update({'Biology123':''})
#    ref.update({'Maths123':''})

#    ref = db.reference().child('classes').child('Biology123')
#    ref.update({'Description':'Biology123 class','id':'Biology123', 'title':'Biology 123'})


#    ref = db.reference().child('classes').child('Maths123')
#    ref.update({'Description':'Maths123 class','id':'Maths123', 'title':'Maths 123'})

#ref = db.reference().child('classes').child('Biology123')
#ref.delete()

ref = db.reference().child('classes')
results = ref.get()
#print(results)
#print(type(results))
for k,v in results.items():
    print("Key is: ",k, "/t value it: ",v)
    for k2,v2 in v.items():
         print("Key is: ",k2, "/t value it: ",v2)