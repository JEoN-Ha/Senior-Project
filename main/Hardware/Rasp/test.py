import cv2
img = cv2.imread('./img/photo.jpg')

crop_img = img[50:200, 10:200]

cv2.imshow("original", crop_img)
cv2.waitKey(0)