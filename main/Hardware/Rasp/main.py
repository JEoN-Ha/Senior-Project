import Motor_Sensor
import time

P_C_Mortor = Motor_Sensor.J_Servo(12)        # P_C is Product Classification
# Test
P_C_Mortor.pwm.start(P_C_Mortor.angle_to_percent(0))
time.sleep(1)

P_C_Mortor.pwm.ChangeDutyCycle(P_C_Mortor.angle_to_percent(90))
time.sleep(1)

P_C_Mortor.pwm.ChangeDutyCycle(P_C_Mortor.angle_to_percent(180))
time.sleep(1)

P_C_Mortor.exitServo()