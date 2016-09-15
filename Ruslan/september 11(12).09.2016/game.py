grid = 8

block = '#'

first = []
second = []

count = 0

for i in range(1,grid+1):
    count += 1
    if count == 1:
        first.append(block)
    elif count == 2:
        count = 0
        first.append(' ')

for i in range(1,grid+1):
    count += 1
    if count == 1:
        second.append(' ')
    elif count == 2:
        count = 0
        second.append(block)


f_str = ''
s_str = ''


for i in first:
    f_str += i
for c in second:
    s_str += c

counter = 0

for ban in range(1,grid+1):
    counter += 1
    if counter == 1:
        print(f_str)
    elif counter == 2:
        counter = 0
        print(s_str)