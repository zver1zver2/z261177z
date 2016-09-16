input_list = [2, 2, 1, 3, 2, 1, 5]

print('Input: ', input_list)
for each_number in input_list:
    if input_list.count(each_number) == 1:
        input_list.remove(each_number)
print('Output', input_list)