import Motor_Sensor
import Cam
import time
import RequestOCR_hand
import requests
import json

class J_System():
    def __init__(self):
        self.VCB_Motor = Motor_Sensor.J_Servo(11) # VCB is Vehicle circuit breaker
        self.PC_Motor = Motor_Sensor.J_Servo(12)        # P_C is Product Classification
        self.USV_Sensor = Motor_Sensor.J_USV(16, 18)
        self.qrcode_Cam = Cam.J_Cam(0)
        self.Car_Cam = self.qrcode_Cam# Cam.J_Cam(0)

        self.VCB_Motor.pwm.start(self.VCB_Motor.angle_to_percent(90))
        self.PC_Motor.pwm.start(self.PC_Motor.angle_to_percent(90))
        self.distanceList = []
        

    def updateDistanceList(self):
        print('updateDistanceList')
        
        while (len(self.distanceList) < 10):
            getDistance = self.USV_Sensor.getDistance()
            if ((getDistance < 15) and (getDistance > 2)):
                self.distanceList.append(getDistance)
            if (len(self.distanceList) > 10):
                self.distanceList.pop(0)
    
        return (sum(self.distanceList) / len(self.distanceList))
        

    def start(self):
        while True:
            print('start')
            testDistance = self.updateDistanceList()
            print(testDistance)
            if ((testDistance <= 5) and (testDistance > 0)):
                
                # 사진 찰칵
                imgFileName = self.Car_Cam.photoClick()

                # TODO: Api 요청
                carNumber = RequestOCR_hand.requestREST_handwritten(imgFileName)

                # Api응답에 따른 Logic
                print(carNumber)
                isEqual = False
                if carNumber == '69구 4381':
                    isEqual = True
                if (isEqual):
                    self.VCB_Motor.pwm.ChangeDutyCycle(self.VCB_Motor.angle_to_percent(180))   # 180도로 돌림 : 차단기 오픈
                    time.sleep(1)

                    if (self.updateDistanceList() > 5):
                        self.VCB_Motor.pwm.ChangeDutyCycle(self.VCB_Motor.angle_to_percent(90))   # 90도로 돌림 : 차단기 닫힘

                    # QR 코드 인식
                    orderNumber = 4                
                    productNumber = 0
                    # while(True):
                    for i in range(30):
                        productNumber = self.qrCodeScan()
                        print(productNumber, type(productNumber), int(productNumber))
                        if int(productNumber) == orderNumber:
                            print('is Same!!')
                            break


                    # 함수 형태로 물건 가림막 작동 시작
                    self.PC_Motor.pwm.ChangeDutyCycle(self.PC_Motor.angle_to_percent(180))   # 180도로 돌림 : 가림막으로 가림
                    time.sleep(5000)
                    self.PC_Motor.pwm.ChangeDutyCycle(self.PC_Motor.angle_to_percent(90))   # 180도로 돌림 : 가림막 원상태
    
    def qrCodeScan(self):
        filePath = self.qrcode_Cam.photoClick()
        return self.qrcode_Cam.qrCodeScanning(filePath)
        
    def test(self):
        self.PC_Motor.pwm.ChangeDutyCycle(self.PC_Motor.angle_to_percent(180))   # 180도로 돌림 : 가림막으로 가림
        self.VCB_Motor.pwm.ChangeDutyCycle(self.VCB_Motor.angle_to_percent(180))   # 180도로 돌림 : 차단기 오픈
        time.sleep(3)
        
        self.PC_Motor.pwm.ChangeDutyCycle(self.PC_Motor.angle_to_percent(90))   # 180도로 돌림 : 가림막 원상태
        self.VCB_Motor.pwm.ChangeDutyCycle(self.VCB_Motor.angle_to_percent(900))   # 180도로 돌림 : 차단기 오픈
        time.sleep(3)
        

        



if __name__ == "__main__":
    JEoNHa = J_System()
    JEoNHa.test()
    

# VCB_Motor.exitServo()
