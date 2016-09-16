try:
    range_choice1 = int(input('From: '))
    range_choice2 = int(input('To: '))

    for each_number in range(range_choice1, range_choice2+1):
        if each_number % 3 == 0 and each_number % 5 == 0:
            print('FizzBuzz')
        elif each_number % 3 == 0:
            print('Fizz')
        elif each_number % 5 == 0:
            print('Buzz')
        else:
            print(each_number)
except ValueError:
    print('Please write numbers!')

