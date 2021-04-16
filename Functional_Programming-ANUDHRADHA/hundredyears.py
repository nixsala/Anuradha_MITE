from datetime import datetime
name = input('What is your name? \n')
age = int(input('Enter your age \n'))
hundred = int((100-age) + datetime.now().year)
print ('Hii %s. You are %s years old. You will turn 100 years old in %s.' % (name, age, hundred))
