#include "opencv2/opencv.hpp"
#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/types.h>
#include <termios.h>
#include <fcntl.h>
#include <sys/stat.h>

#define BUF_MAX 1

using namespace cv;  
using namespace std;  

//사진 촬영 함수 
int Capture(int count)
{
    VideoCapture cap(0);  // 캠으로부터 영상을 받아옴
    char savefile[200];
    Mat frame;  
    namedWindow("camera1",1);
    cap >> frame;  

    // 영상 출력 
    imshow("camera1", frame);  

    //사진 저장 시 사진 크기 downsizing
    resize(frame,frame,Size(300,300),0,0,INTER_CUBIC);
    sprintf(savefile,"image%d.jpg",count++);
    imwrite(savefile,frame);

    destroyWindow("camera1");
    return count;
}

//파일 읽기 
int SerialComm(int count)
{
    int fd, size;
    char buf[BUF_MAX];
    buf[0]='\0';
    printf("차량인식중");
     
    while (1) {
       
        if(0<(fd = open("/dev/ttyACM0",O_RDWR)))
        {

            read(fd,buf,BUF_MAX);
            //1을 받은 경우 while문 탈출
            if(buf[0] == '1')
            {
                puts(buf);
                break;
            }
            close(fd);
        }
         
    }
    count = Capture(count);
    return count;
}
  
int main(int, char**)  
{
    int count = 0;
    
    while(1) 
    {  
        count = SerialComm(count);
        int key = waitKey();
        if (waitKey(100) >= 0) break;  
    }  
  
  
    return 0;  
}