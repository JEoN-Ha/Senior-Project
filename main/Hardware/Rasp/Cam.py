import cv2

cap = cv2.VideoCapture(0)
if cap.isOpened():
    while True:
        ret, frame = cap.read()
        if ret:
            cv2.imshow("cam", frame) # showing Image
            print("imshow")
            cv2.imwrite("./img/photo.jpg", frame)
        else:
            print("can't ret")
            

else:
    print("can't open camera")

cap.release()
