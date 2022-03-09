import cv2
import numpy as np
import pytesseract
import matplotlib.pyplot as plt
plt.style.use('dark_background')

img_ori = cv2.imread('../img/test1.jpg')
gray = cv2.cvtColor(img_ori, cv2.COLOR_BGR2GRAY)

height, width, channel = img_ori.shape



#Gaussian Blur and Adative Thresholding

# threshold only
img_thresh = cv2.adaptiveThreshold(
    gray, 
    maxValue=255.0, 
    adaptiveMethod=cv2.ADAPTIVE_THRESH_GAUSSIAN_C, 
    thresholdType=cv2.THRESH_BINARY_INV, 
    blockSize=19, 
    C=9
)

# blur and threshold
img_blurred = cv2.GaussianBlur(gray, ksize=(5, 5), sigmaX=0)

img_blur_thresh = cv2.adaptiveThreshold(
    img_blurred, 
    maxValue=255.0, 
    adaptiveMethod=cv2.ADAPTIVE_THRESH_GAUSSIAN_C, 
    thresholdType=cv2.THRESH_BINARY_INV, 
    blockSize=19, 
    C=9
)

#

plate_cx, plate_cy = 508.75, 300.5
width, height = 940, 626 
plate_width, plate_height = 188.5, 49
angle = 11.9565

rotation_matrix = cv2.getRotationMatrix2D(center=(plate_cx, plate_cy), angle=angle, scale=1.0)
img_rotated = cv2.warpAffine(img_thresh, M=rotation_matrix, dsize=(width, height))

#

img_cropped = cv2.getRectSubPix(
    img_rotated, 
    patchSize=(int(plate_width), int(plate_height)), 
    center=(int(plate_cx), int(plate_cy))
)

# cv2.imwrite('../img/testify.jpg', img_cropped)
plt.imshow(img_cropped, cmap='gray')
plt.savefig('../img/testify.jpg')