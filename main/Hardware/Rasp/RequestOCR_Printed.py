from azure.cognitiveservices.vision.computervision import ComputerVisionClient
from azure.cognitiveservices.vision.computervision.models import OperationStatusCodes
from azure.cognitiveservices.vision.computervision.models import VisualFeatureTypes
from msrest.authentication import CognitiveServicesCredentials

from array import array
import os
from PIL import Image
import sys
import time

def requestREST_handwritten(imgString):
    '''
    Authenticate
    Authenticates your credentials and creates a client.
    '''
    subscription_key = "c70b344116df425b8b9b63a83e735bbc"# "PASTE_YOUR_COMPUTER_VISION_SUBSCRIPTION_KEY_HERE"
    endpoint = "https://jeonha-ocr.cognitiveservices.azure.com/"# "PASTE_YOUR_COMPUTER_VISION_ENDPOINT_HERE"

    computervision_client = ComputerVisionClient(endpoint, CognitiveServicesCredentials(subscription_key))


    images_folder = os.path.join(os.path.dirname(os.path.abspath('RequestOCR.py')))


    '''
    Recognize Printed Text with OCR - local
    This example will extract, using OCR, printed text in an image, then print results line by line.
    '''
    print("===== Detect Printed Text with OCR - local =====")
    # Get an image with printed text
    local_image_printed_text_path = os.path.join (images_folder + "/img/" + imgString)
    print(local_image_printed_text_path)

    local_image_printed_text = open(local_image_printed_text_path, "rb")

    ocr_result_local = computervision_client.recognize_printed_text_in_stream(local_image_printed_text)

    result = ""
    for region in ocr_result_local.regions:
        for line in region.lines:
            print("Bounding box: {}".format(line.bounding_box))
            s = ""
            for word in line.words:
                s += word.text + " "
            result += s
            print(s)
    
    return result
    '''
    END - Recognize Printe
    '''