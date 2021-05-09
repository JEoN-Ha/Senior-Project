import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD) #Use Board numerotation mode
GPIO.setwarnings(False) #Disable warnings


class J_Servo():
    def __init__(self, pinNumber):
        # GPIO.setUp pin Number 7, 11, 12, 13, 15
        self.pinNumber = pinNumber
        self.frequency = 50
        GPIO.setup(self.pinNumber, GPIO.OUT)
        self.pwm = GPIO.PWM(self.pinNumber, self.frequency)        

    #Set function to calculate percent from angle
    def angle_to_percent(self, angle):
        if angle > 180 or angle < 0:
            return False

        start = 4
        end = 12.5
        ratio = (end - start)/180 #Calcul ratio from angle to percent

        angle_as_percent = angle * ratio

        return start + angle_as_percent

    def exitServo(self):
        self.pwm.stop()
        GPIO.cleanup()

class J_USV(): # USV is UltraSonic Wave
    def __init__(self, trig, echo):
        # GPIO.setUp pin Number (Board, BCM) : (33, 13), (35, 19), (16, 23), (18, 24)
        self.trig = trig
        self.echo = echo        
        
        #거리 타임 아웃 용
        self.MAX_DISTANCE_CM = 300
        self.MAX_DURATION_TIMEOUT = (self.MAX_DISTANCE_CM * 2 * 29.1) #17460 # 17460us = 300cm

        GPIO.setup(self.trig, GPIO.OUT) # 트리거 출력
        GPIO.setup(self.echo, GPIO.IN)  # 에코 입력

        # HC-SR04 시작 전 잠시 대기
        GPIO.output(self.trig, False)
        print('Waiting For Sensor To Ready')
        time.sleep(1) # 1초

    
    
    def distanceInCm(self, duration):
        # cm 환산 함수
        # 아두이노 UltraDistSensor 코드에서 가져옴 Known Issue
        # 물체에 도착후 돌아오는 시간 계산
        # 시간 = cm / 음속 * 왕복
        # t   = 0.01/340 * 2= 0.000058824초 (58.824us)

        # 인식까지의 시간
        # t = 0.01/340 = 0.000029412초 (29.412us)

        # duration은 왕복 시간이니 인식까지의 시간에서 2로 나눔
        return (duration/2)/29.1

    def print_distance(self, distance):
        # 거리 표시
        if distance == 0:
            distanceMsg = 'Distance : out of range \r'
        else:
            distanceMsg = 'Distance : ' + str(distance) + 'cm' + '        \r'



    def getDistance(self):
        # 거리 구하기 메서드
        while True:
            #171206 중간에 통신 안되는 문제 개선용      
            fail = False
            time.sleep(0.1)
            # 트리거를 10us 동안 High 했다가 Low로 함.
            # sleep 0.00001 = 10us
            GPIO.output(self.trig, True)
            time.sleep(0.00001)
            GPIO.output(self.trig, False)

            # ECHO로 신호가 들어 올때까지 대기
            timeout = time.time()
            while GPIO.input(self.echo) == 0:
                #들어왔으면 시작 시간을 변수에 저장
                pulse_start = time.time()
                if ((pulse_start - timeout)*1000000) >= self.MAX_DURATION_TIMEOUT:
                    # 중간에 통신 안되는 문제 개선용 Known Issue       
                    fail = True
                    break
            # 중간에 통신 안되는 문제 개선용 Known Issue
            if fail:
                continue

            # ECHO로 인식 종료 시점까지 대기
            timeout = time.time()
            while GPIO.input(self.echo) == 1:
                #종료 시간 변수에 저장
                pulse_end = time.time()
                if ((pulse_end - pulse_start)*1000000) >= self.MAX_DURATION_TIMEOUT:
                    print_distance(0) 
                    # 중간에 통신 안되는 문제 개선용 Known Issue    
                    fail = True
                    break
            # 중간에 통신 안되는 문제 개선용 Known Issue
            if fail:
                continue

            #인식 시작부터 종료까지의 차가 바로 거리 인식 시간
            pulse_duration = (pulse_end - pulse_start) * 1000000

            # 시간을 cm로 환산
            distance = self.distanceInCm(pulse_duration)

            # 자리수 반올림
            distance = round(distance, 2)

            # 표시
            self.print_distance(distance)
            
            return distance
