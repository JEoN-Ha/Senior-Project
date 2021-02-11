#include <NewPing.h>
#include <Servo.h>

Servo servo;
const byte servoPin = 7; 
const byte green_Pin = 8;
const byte yellow_Pin = 9;
int distance=0; //거리
boolean state = false; //차단막 제어를 위한 상태값
unsigned long timeVal=0;

NewPing sonar(6, 5, 200); // (Trig, Echo, 최대제한거리)

void setup() {
  
  Serial.begin(9600);
  pinMode(green_Pin, OUTPUT); 
  pinMode(yellow_Pin, OUTPUT);   

  servo.attach(servoPin); //서보모터를 몇번 핀으로 제어할지
  delay(1000);
  
  digitalWrite(yellow_Pin, HIGH);
  digitalWrite(green_Pin, LOW);
}

void loop() {  
  delay(50);            
  distance=sonar.ping_cm();  //초음파센서로 거리계산함수  
  Serial.println(distance);
  delay(1000);
  if(distance<20){
    Serial.println("차량 접근 후 번호 인식 완료, 차단기 열기");
    servo.write(80);
    delay(500);
    servo.write(90);
    delay(500);
    digitalWrite(yellow_Pin, LOW);
    digitalWrite(green_Pin, HIGH);
    while(true){
      distance=sonar.ping_cm();
      Serial.println(distance);
      delay(1000);
      if(distance>30){
        Serial.println("차단기 닫기");
        servo.write(100);
        delay(500);
        servo.write(90);
        delay(500);
        digitalWrite(yellow_Pin, HIGH);
        digitalWrite(green_Pin, LOW);
        delay(1000);
        break;
      }
    }
  }
}
