import random

for each_number in range(1, 100):
    if each_number % 3 == 0 and each_number % 5 == 0:
        print('FizzBuzz')
    elif each_number % 3 == 0:
        print('Fizz')
    elif each_number % 5 == 0:
        print('Buzz')
    else:
        print(each_number)