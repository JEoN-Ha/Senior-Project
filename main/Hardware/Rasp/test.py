import qrcode

for i in range(10):
    fileName = str(i)
    img = qrcode.make(fileName)
    img.save('./img/qrcode/' + fileName +'.jpg')