import Motor_Sensor
import Cam
import time
import RequestOCR_hand
import requests
import json
import numpy as np


class J_System():
    def __init__(self):
        self.USV_Sensor = Motor_Sensor.J_USV(16, 18)
        self.servo = Motor_Sensor.J_Servo_pigpio()
        print("Motor & Sensor Set")
        
        self.Car_Cam = Cam.J_Cam(2)
        self.JeonhaURL = "https://expressway-dt.azurewebsites.net"
        
        print("Cameras Set")
        

    def updateDistanceList(self):
        print('updateDistanceList')
        distanceList = []
        for i in range(9):
            distanceList.append(self.USV_Sensor.getDistance())
    
        return (np.median(distanceList))
        

    def start(self):
        print("")
        print("======= System Start =======")
        threshold = 8
        while True:
            self.servo.moveAngle(18, 170)  # 170도로 돌림 : 가림막 열림 
            self.servo.moveAngle(17, 90)  # 90도로 돌림 : 차단기 닫힘
            testDistance = self.updateDistanceList()
            print(testDistance, "cm")
            if ((testDistance <= threshold) and (testDistance > 0)):
                
                # 사진 찰칵
                imgFileName = self.Car_Cam.photoClick("car")

                # TODO: Api 요청
                carNumber = RequestOCR_hand.requestREST_handwritten(imgFileName)

 
                # Api응답에 따른 Logic
                print("OCR End\n")
                
                print("Server Request")
                data = {"imgCarNumber": carNumber}
                rq = requests.post(self.JeonhaURL + '/carNumberIsEqual', json=data)
                orderNumber =  rq.json()
                
                print("Request End\n")
                if (rq.status_code == 200):
                    self.servo.moveAngle(17, 180)  # 180도로 돌림 : 차단기 오픈
                    time.sleep(3)

                    if (self.updateDistanceList() > 5):
                        self.servo.moveAngle(17, 90)  # 90도로 돌림 : 차단기 닫힘

                    # QR 코드 인식
                    productNumber = 0
                    while True:
                        productNumber = self.qrCodeScan()
                        # print(productNumber, type(productNumber), int(productNumber))
                        if int(productNumber) == orderNumber:
                            print('======= is Same!! ======')


                            # 함수 형태로 물건 가림막 작동 시작
                            print("Belt Screen Move")
                            self.servo.moveAngle(18, 50)  # 160도로 돌림 : 가림막으로 가림
                            time.sleep(8)
                            self.servo.moveAngle(18, 170)  # 50도로 돌림 : 가림막으로 가림
                            break
        
    def qrCodeScan(self):
        qrcode_Cam = Cam.J_Cam(0)
        while True:
            print("")
            print("QR Code Scanning")
            filePath = qrcode_Cam.photoClick("qr")
            resultQRCode = qrcode_Cam.qrCodeScanning(filePath)
            if (resultQRCode != -1):
                break
        return resultQRCode
        
    def test(self):
        print("test")
        #self.servo.moveAngle(17, 90)  # 50도로 돌림 : 차단기 닫힘
        #self.servo.moveAngle(18, 50)  # 50도로 돌림 : 차단기 닫힘
        #time.sleep(3)
        
        #self.servo.moveAngle(17, 180)  # 160도로 돌림 : 차단기 오픈
        #self.servo.moveAngle(18, 170)  # 160도로 돌림 : 차단기 오픈
        #time.sleep(3)
        imgFileName = self.Car_Cam.photoClick("car")

        # TODO: Api 요청
        carNumber = RequestOCR_hand.requestREST_handwritten(imgFileName)
        print(carNumber)
    



if __name__ == "__main__":
    JEoNHa = J_System()
    
    # while True:
    #     print("here test")
    #JEoNHa.test()
    JEoNHa.start()
    

# VCB_Motor.exitServo()
