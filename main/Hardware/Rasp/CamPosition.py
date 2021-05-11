import cv2
import os

videoNumber = 0

cap = cv2.VideoCapture(videoNumber)
cap.set(cv2.CAP_PROP_FRAME_WIDTH,640)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT,480)
cap.set(cv2.CAP_PROP_FPS, 30)

if cap.isOpened():
    imgName = 'A_Postion_' + str(videoNumber) +'.jpg'
    ret, frame = cap.read()
    # cv2.imshow("cam", frame) # showing Image
    cuurentfolder = os.path.join(os.path.dirname(os.path.abspath('Cam.py')))
    imgPath = cuurentfolder + "/img/" + imgName
    cv2.imwrite(imgPath, frame)
    