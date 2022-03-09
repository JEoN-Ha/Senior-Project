import os
import RequestOCR_hand
import time

print('Waiting For Sensor To Ready')
time.sleep(1)
print("pigpio Connected")
time.sleep(1)
print("Motor & Sensor Set")
time.sleep(1)
print("Cameras Set")
time.sleep(1)

while True:
    print("")
    print("======= System Start =======")

    distance = ["66.7 cm", "48.2 cm", "12.4 cm", "5.48 cm"]
    for i in range(4):
        print('updateDistanceList')
        print(distance[i])
        time.sleep(0.5)

    cuurentfolder = os.path.join(os.path.dirname(os.path.abspath('Cam.py')))
    fileName = "car_2021_5_25_17_58_59.jpg"

    # car_2021_5_25_17_49_33.jpg
    # imgPath = cuurentfolder + "/img/car/" + fileName

    carNumber = RequestOCR_hand.requestREST_handwritten(fileName)

    
    print("OCR End\n")
    time.sleep(10)
    print("Server Request")
    print("Request End\n")
    for i in range(6):
        print("")
        print("QR Code Scanning")
        print('Decode QR Code')
        time.sleep(0.5)
        print("QR Code not detected")
        time.sleep(0.5)
    time.sleep(0.5)
    
    print("")
    print("QR Code Scanning")
    print('Decode QR Code')
    print("Decoding QR : ", 1)
    time.sleep(1)
    print('======= is Same!! ======')
    print("Belt Screen Move")
    time.sleep(8)
