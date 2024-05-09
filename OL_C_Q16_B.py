
# Please enter name:

from datetime import datetime

prompt = input("Please enter prompt:")


if prompt.__contains__("hello"):
    print("Hi there, how are you?")
elif prompt.__contains__("name"):
    print("My name is ExamBot, how can I help?")
elif prompt.__contains__("time"):
    now = datetime.now()
    current_time = now.strftime("%H:%M:%S")
    print("Current Time =", current_time)
