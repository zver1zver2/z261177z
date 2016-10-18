"""Задача №2
Сумма
(Время: 1 сек. Память: 16 Мб Сложность: 19%)
Требуется посчитать сумму целых чисел от 1 до N.

Входные данные

В единственной строке входного файла INPUT.TXT записано единственное целое число N, не превышающее по абсолютной величине 104.

Выходные данные

В единственную строку выходного файла OUTPUT.TXT нужно вывести одно целое число — сумму чисел от 1 до N."""


file1 = open("input.txt", "r")
file2 = open("output.txt", "w")

for line in file1:
    number = line.split()
    int_list = [int(line) for line in number]
    rages = range(0, int_list[0]+1)

for i in rages:
    sums = sum(rages)
    file2.write(str(sums))









