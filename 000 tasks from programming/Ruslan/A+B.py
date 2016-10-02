file1 = open('input.txt', 'r')
file2 = open('output.txt', 'w')

for i in file1:
    number = i.split()
    int_list = [int(i) for i in number]
    sum_numbers = sum(int_list)
file2.write(str(sum_numbers))
