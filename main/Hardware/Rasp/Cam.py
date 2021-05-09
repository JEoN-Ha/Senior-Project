import cv2
import time
import zbar
import os

# cv2.namedWindow('img', cv2.WINDOW_NORMAL)
class J_Cam():
    def __init__(self, videoNumber):
        self.cap = cv2.VideoCapture(videoNumber)
        self.cap.set(cv2.CAP_PROP_FRAME_WIDTH,640)
        self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT,480)
        self.cap.set(cv2.CAP_PROP_FPS, 30)
        self.cuurentfolder = os.path.join(os.path.dirname(os.path.abspath('Cam.py')))

    def photoClick(self):
        if self.cap.isOpened():
            now = time.localtime()
            imgName = 'cam_' + str(now.tm_year) + '_' + str(now.tm_mon) + '_' + str(now.tm_mday) + '_' + str(now.tm_hour) + '_' + str(now.tm_min) + '_' +  str(now.tm_sec) + '.jpg'
            ret, frame = self.cap.read()
            # cv2.imshow("cam", frame) # showing Image
            # print("imshow")
            imgPath = self.cuurentfolder + "/img/" + imgName
            print(imgName)
            print(imgPath)
            cv2.imwrite(imgPath, frame)
            return imgName
        else:
            print("can't open camera")

    def qrCodeScanning(self, fileName):
        if self.cap.isOpened():
            filePath = self.cuurentfolder + "/img/" + fileName
            qrImg = cv2.imread(filePath, cv2.IMREAD_GRAYSCALE)
            decodeData = []
            scanner = zbar.Scanner()
            results = scanner.scan(qrImg)
            for result in results:
                decodeData.append(result.data.decode())
            
            if (decodeData == "null"):
                print("QR Code not detected")
            else:
                print(decodeData)
                if os.path.isfile(filePath):
                    os.remove(filePath)

# cap.release()
