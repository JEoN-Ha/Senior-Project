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
        # self.Car_Cam = Cam.J_Cam(0)
        self.qrcode_Cam = Cam.J_Cam(0)

        # self.VCB_Motor.pwm.start(VCB_Motor.angle_to_percent(90))
        # self.PC_Motor.pwm.start(PC_Motor.angle_to_percent(90))

        

    def updateDistanceList(self):
        distanceList = []
        for i in range(10):
            distanceList.append(self.USV_Sensor.getDistance())

        return (sum(distanceList) / len(distanceList))
        

    def start(self):
        if (self.updateDistanceList() <= 10):
            # 사진 찰칵
            imgFileName = self.Car_Cam.photoClick()

            # TODO: Api 요청
            carNumber = RequestOCR_hand.requestREST_handwritten(imgFileName)

            # Api응답에 따른 Logic
            isEqual = True
            if (isEqual):
                self.VCB_Motor.pwm.ChangeDutyCycle(VCB_Motor.angle_to_percent(180))   # 180도로 돌림 : 차단기 오픈
                time.sleep(1)

                if (self.updateDistanceList > 10):
                    self.VCB_Motor.pwm.ChangeDutyCycle(VCB_Motor.angle_to_percent(90))   # 90도로 돌림 : 차단기 닫힘

                # QR 코드 인식
                orderNumber = 1                
                productNumber = 0
                while(True):
                    productNumber = self.qrCodeScan()
                    if int(productNumber) == orderNumber:
                        break


                # 함수 형태로 물건 가림막 작동 시작
                self.PC_Motor.pwm.ChangeDutyCycle(PC_Motor.angle_to_percent(180))   # 180도로 돌림 : 가림막으로 가림
                time.sleep(3)
                self.PC_Motor.pwm.ChangeDutyCycle(PC_Motor.angle_to_percent(90))   # 180도로 돌림 : 가림막 원상태
    
    def qrCodeScan(self):
        filePath = self.qrcode_Cam.photoClick()
        return self.qrcode_Cam.qrCodeScanning(filePath)
        

        



if __name__ == "__main__":
    JEoNHa = J_System()
    # JEoNHa.start()
    JEoNHa.qrcode()

# VCB_Motor.exitServo()
