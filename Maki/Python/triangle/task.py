a = True
c = 0
x = input("Enter one symbol/number/string:")
while a:
    if len(x) != 1 or x == ' ':
        print("Try again")
        a = False
    else:
        c+=1
        print(x*c)
        if c == 7:
            a = False
