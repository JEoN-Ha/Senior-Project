import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD) #Use Board numerotation mode
GPIO.setwarnings(False) #Disable warnings

class J_Servo():
    def __init__(self, pinNumber):
        self.pinNumber = pinNumber
        self.frequency = 50
        GPIO.setup(pwm_gpio, GPIO.OUT)
        self.pwm = GPIO.PWM(self.pinNumber, frequency)        

    #Set function to calculate percent from angle
    def angle_to_percent (angle):
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
