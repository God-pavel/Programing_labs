def hash_function(str):
    h = 0
    for i in range (0,len(str)):
        print(ord(str[i]))
        h = (h*13 + ord(str[i])) % 100000
    return h
kok = " GERBILLE"
has = hash_function(kok)
print(has)
