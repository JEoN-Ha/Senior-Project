import cv2

cap = cv2.VideoCapture(0)
if cap.isOpened():
    while True:
        ret, frame = cap.read()
        if ret:
            cv2.imshow("cam", frame) # showing Image
            if cv2.waitKey(1) != -1:
                cv2.imwrite("./img/photo.png", frame)
                break
            else:
                print("no frame")
                break
else:
    print("can't open camera")

cap.release()
cv2.destroyAllWinodws()