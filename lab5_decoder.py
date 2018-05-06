test = "#10#65636ba#9#q"
def decoder(str):
    code=''
    i=0
    while i<len(str):
        if str[i]=='#':
            g=i+1
            num=''
            count=0
            while str[g]!='#':
                num+=str[g]
                g+=1
                count+=1
            i+=count+2
            for k in range (0,int(num)):
                  code+=str[i]
            i+=1

        else:
            code+=str[i]
            i+=1
    
    return code

print(decoder(test))
