x = int(input("How much numbers:"))
y = input("Numbers:")

no = []
yes = []

list_with_nums = y.split()

if len(list_with_nums) < x:
    print('Mistake')

else:
    for i in list_with_nums:
        num = int(i)
        if num % 2 == 0:
            yes.append(i)
        else:
            no.append(i)

    yes_n = ''
    no_n = ''

    for i in yes:
        yes_n+=i + ' '
    for i in no:
        no_n += i + ' '

    if len(no) == len(yes):
        print("MISTAKE")
    elif len(no) > len(yes):
        print(no_n)
        print('NO')
    elif len(yes) > len(no):  
        print(yes_n)
        print("YES")
