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

    def photoClick(self, isCarOrQR):
        print('photoClick')
        if self.cap.isOpened():
            now = time.localtime()
            if (isCarOrQR == "car"):
                imgName = 'car_' + str(now.tm_year) + '_' + str(now.tm_mon) + '_' + str(now.tm_mday) + '_' + str(now.tm_hour) + '_' + str(now.tm_min) + '_' +  str(now.tm_sec) + '.jpg'
                imgPath = self.cuurentfolder + "/img/car/" + imgName
            elif (isCarOrQR == "qr"):
                imgName = 'qr_' + str(now.tm_year) + '_' + str(now.tm_mon) + '_' + str(now.tm_mday) + '_' + str(now.tm_hour) + '_' + str(now.tm_min) + '_' +  str(now.tm_sec) + '.jpg'
                imgPath = self.cuurentfolder + "/img/qrcode/" + imgName

            # cv2.imshow("cam", frame) # showing Image
            # print("imshow")
            ret, frame = self.cap.read()
            print(imgName)
            print(imgPath)
            cv2.imwrite(imgPath, frame)
            return imgName
        else:
            print("can't open camera")

    def qrCodeScanning(self, fileName):
        print('qrCodeScanning')
        if self.cap.isOpened():
            filePath = self.cuurentfolder + "/img/qrcode/" + fileName
            qrImg = cv2.imread(filePath, cv2.IMREAD_GRAYSCALE)
            scanner = zbar.Scanner()
            results = scanner.scan(qrImg)            
            decodeData = []
            for result in results:
                decodeData.append(result.data.decode())
            # decodeData = ""
            

            # decodeData = results.data.decode()
                
            if (len(decodeData) == 0):
                print("QR Code not detected")
                return -1
            else:
                print(decodeData)
                if os.path.isfile(filePath):
                    os.remove(filePath)
                return decodeData[0]
            
            
            # try:
                # decodeData = results.data.decode()
                
                # if (decodeData == ""):
                #     print("QR Code not detected")
                #     return -1
                # else:
                #     print(decodeData)
                #     if os.path.isfile(filePath):
                #        os.remove(filePath)
                #    return decodeData
            # except:
            #     print("QR decoding Error")
                
            #     return -1


# cap.release()
