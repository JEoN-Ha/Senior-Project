import cv2
import time
import zbar

# cv2.namedWindow('img', cv2.WINDOW_NORMAL)
class J_Cam():
    def __init__(self, videoNumber):
        self.cap = cv2.VideoCapture(videoNumber)
        self.cap.set(cv2.CAP_PROP_FRAME_WIDTH,640)
        self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT,480)
        self.cap.set(cv2.CAP_PROP_FPS, 30)

    def photoClick(self):
        if self.cap.isOpened():
            now = time.localtime()
            imgName = 'cam_' + str(now.tm_year) + '/' + str(now.tm_mon) + '/' + str(now.tm_mday) + '/' + str(now.tm_hour) + '/' + str(now.tm_min) + '/' +  str(now.tm_sec) + '.jpg'
            ret, frame = self.cap.read()
            # cv2.imshow("cam", frame) # showing Image
            # print("imshow")
            imgPath = "./img/" + imgName
            cv2.imwrite(imgPath, frame)
            return imgName
        else:
            print("can't open camera")

    def qrCodeScanning(self):
        if self.cap.isOpened():
            ret, frame = self.cap.read()
            decodeData = ""
            scanner = zbar.Scanner()
            results = scanner.scan(frame)
            for result in results:
                decodeData += result.data
            
            if (decodeData == "null"):
                print("QR Code not detected")
            else:
                print(decodeData)

# cap.release()
