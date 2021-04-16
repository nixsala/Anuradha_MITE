import random
num = int(random.randint(1,100)) 
print(num)
guess = int(input("Take a number"))
if guess < 1:
        print("Out of Bounds")
elif guess > 100:
        print("Out of Bounds")
       
if (guess - num) <= 10:
    print("WARM!")
else:
    print("COLD")
previous = guess 
while guess != num: 
    guess = int(input("Take another number"))
    if guess == num: 
        print("WON The number is: " % (guess)) 
        break 
        
    if warmer: 
        print("Warmer")
    if colder:
        print("Colder")

    
    guess = previous 
