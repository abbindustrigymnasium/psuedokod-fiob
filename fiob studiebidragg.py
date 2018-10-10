antalar = (3)
manader = (10)
studiebidrag = (1250)

Birthmonth = input("Birthmonth ") 

product = (antalar * manader * studiebidrag)

if Birthmonth in ['July','August','September']:
    print ("Ditt studiebidrag är ", product - 625*3)
else:
    print ("Ditt studiebidrag är ", product)