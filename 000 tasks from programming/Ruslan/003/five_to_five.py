file1 = open("input.txt", "r")
file2 = open("output.txt", "w")

for i in file1:
    number = i.split()
    int_list = [int(i) for i in number]
    multiply = int_list[0] ** 2
file2.write()
