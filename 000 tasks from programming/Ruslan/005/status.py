file1 = open("input.txt", "r")
file2 = open("output.txt", "w")

numbers_list = []

for i in file1:
    numbers = i.split()
    int_list = [int(i) for i in numbers]
    divisible =