import re
f = open('test.txt')
i = 0

for line in f:

    result = [re.findall(r'^\w[A-Z,\-,\s]{1,}\;'[0], line), line]
    print result
    if result!=[]:
        i+=1

print(i)
