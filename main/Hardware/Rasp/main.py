import Motor_Sensor
import Cam
import time
import RequestOCR_hand
import requests
import json

class J_System():
    def __init__(self):
        self.P_C_Mortor = Motor_Sensor.J_Servo(12)        # P_C is Product Classification
        self.USV_Sensor = Motor_Sensor.J_USV(16, 18)
        # self.Car_Cam = Cam.J_Cam(0)
        self.qrcode_Cam = Cam.J_Cam(0)
        # self.P_C_Mortor.pwm.start(P_C_Mortor.angle_to_percent(90))

        

    def updateDistanceList(self):
        distanceList = []
        for i in range(10):
            distanceList.append(self.USV_Sensor.getDistance())

        return (sum(distanceList) / len(distanceList))
        

    def start(self):
        if (self.updateDistanceList() <= 10):
            # 사진 찰칵
            imgFileName = self.Car_Cam.photoClick()

            # Api 요청
            carNumber = RequestOCR_hand.requestREST_handwritten(imgFileName)

            # Api응답에 따른 Logic
            isEqual = True
            if (isEqual):
                self.P_C_Mortor.pwm.ChangeDutyCycle(P_C_Mortor.angle_to_percent(180))   # 180도로 돌림 : 차단바 오픈
                time.sleep(1)

                # TODO: Product Classification Cam Start
                # TODO: QR 코드 인식
                # TODO: 함수 형태로 물건 가림막 작동 시작
    
    def qrcode(self):
        self.qrcode_Cam.qrCodeScanning()

        



if __name__ == "__main__":
    JEoNHa = J_System()
    # JEoNHa.start()
    JEoNHa.qrcode()

# P_C_Mortor.exitServo()
