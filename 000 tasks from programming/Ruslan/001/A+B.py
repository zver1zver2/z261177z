"""Задача №1
A+B
(Время: 1 сек. Память: 16 Мб Сложность: 2%)
Требуется сложить два целых числа А и В.

Входные данные

В единственной строке входного файла INPUT.TXT записано два натуральных числа через пробел, не превышающих 109.

Выходные данные

В единственную строку выходного файла OUTPUT.TXT нужно вывести одно целое число — сумму чисел А и В."""


file1 = open('input.txt', 'r')
file2 = open('output.txt', 'w')

for i in file1:
    number = i.split()
    int_list = [int(i) for i in number]
    sum_numbers = sum(int_list)
    file2.write(str(sum_numbers))
