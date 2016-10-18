file1 = open("input.txt", "r")
file2 = open("output.txt", "w")

for i in file1:
    number = i.split()
    int_list = [int(i) for i in number]
    int_list.append(9)
    summing = int_list[1] - int_list[0]
    int_list.append(summing)
    file2.write(str(int_list))
