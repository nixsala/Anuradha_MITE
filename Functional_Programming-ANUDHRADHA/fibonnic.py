times = int(input("Enter the Times of Fibonnic Number "))
number1, number2 = 0, 1
count = 0
if times <=0:
   print("Incorrect Enter the Number Again")
elif times == 1:
   print("Fibonacci sequence upto",times,":")
   print(number1)
else:
   print("Fibonacci sequence:")
   while count < times:
       print(number1)
       nth = number1 + number2
      
       number1 = number2
       number2 = nth
       count += 1
