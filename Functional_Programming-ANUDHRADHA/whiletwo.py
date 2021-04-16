import random
print("What is the Guess number'")
num = int(random.randint(1,100))
print(num)
guess_count = int(1)
guess = int(input("The Guess number is : "))
guess = previous 
while guess != num:-
    guess_count += 1
    if (guess - num) <= 10:
        print("WARM")
    if (guess - num) > 10:
        print("COLD")
    if guess <= 0:
        print("OUT OF BOUNDS")
    if guess > 100:
        print("OUT OF BOUNDS")
    guess = int(input("Agian Guess "))
if guess == num:
    print("Won the game  " % (guess_count))
   

