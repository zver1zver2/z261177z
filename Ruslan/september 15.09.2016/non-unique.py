list_with_numbers = [1, 2, 3, 2, 1, 5]

for each_num in list_with_numbers:
    if list_with_numbers.count(each_num) == 1:
        list_with_numbers.remove(each_num)
print(list_with_numbers)