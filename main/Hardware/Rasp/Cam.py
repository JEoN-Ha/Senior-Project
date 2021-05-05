import cv2

cv2.namedWindow('img', cv2.WINDOW_NORMAL)

cap = cv2.VideoCapture(0)
cap.set(cv2.CAP_PROP_FRAME_WIDTH,640)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT,480)
cap.set(cv2.CAP_PROP_FPS, 30)
if cap.isOpened():
    while True:
        ret, frame = cap.read()
        cv2.imshow("cam", frame``) # showing Image
        print("imshow")
        # cv2.imwrite("./img/photo.jpg", frame)
else:
    print("can't open camera")

cap.release()
