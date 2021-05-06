import cv2
import time

# cv2.namedWindow('img', cv2.WINDOW_NORMAL)
class J_Cam():
    def __init__(self, videoNumber):
        self.cap = cv2.VideoCapture(videoNumber)
        self.cap.set(cv2.CAP_PROP_FRAME_WIDTH,640)
        self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT,480)
        self.cap.set(cv2.CAP_PROP_FPS, 30)

    def photoClick(self):
        if cap.isOpened():
            now = time.localtime()
            imgName = 'cam_' + str(now.tm_year) + '/' + str(now.tm_mon) + '/' + str(now.tm_mday) + '/' + str(now.tm_hour) + '/' + str(now.tm_min) + '/' +  str(now.tm_sec) + '.jpg'
            ret, frame = cap.read()
            # cv2.imshow("cam", frame) # showing Image
            # print("imshow")
            imgPath = "./img/" + imgName
            cv2.imwrite(imgPath, frame)
            return imgName
        else:
            print("can't open camera")

# cap.release()
