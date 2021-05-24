angle = 2450
if ((angle >= 600) and (angle <= 2400)):
    servoPulseWidth = 600 + (10 * angle)
    test = 3
elif ((angle >= 500) and (angle <= 2500)):
    servoPulseWidth = 500 + (11.11 * angle)
    test = 2
else:
    servoPulseWidth = 0
    test = 1

print(test)

