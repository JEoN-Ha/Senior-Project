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


    images_folder = os.path.join(os.path.dirname(os.path.abspath('RequestOCR_hand.py')))

    '''
    Read File, recognize handwritten text - local
    This example extracts text from a handwritten local image, then prints results.
    This API call can also recognize remote image text (shown in next example, Read File - remote).
    '''
    print("===== Read File - local =====")
    # Get image of handwriting
    local_image_handwritten_path = os.path.join (images_folder + "/img/" + imgString)
    # Open the image
    local_image_handwritten = open(local_image_handwritten_path, "rb")

    # Call API with image and raw response (allows you to get the operation location)
    recognize_handwriting_results = computervision_client.read_in_stream(local_image_handwritten, raw=True)
    # Get the operation location (URL with ID as last appendage)
    operation_location_local = recognize_handwriting_results.headers["Operation-Location"]
    # Take the ID off and use to get results
    operation_id_local = operation_location_local.split("/")[-1]

    # Call the "GET" API and wait for the retrieval of the results
    while True:
        recognize_handwriting_result = computervision_client.get_read_result(operation_id_local)
        if recognize_handwriting_result.status.lower () not in ['notstarted', 'running']:
            break
        print ('Waiting for result...')
        time.sleep(1)
    result = ""
    # Print results, line by line
    if recognize_handwriting_result.status == OperationStatusCodes.succeeded:
        for text_result in recognize_handwriting_result.analyze_result.read_results:
            for line in text_result.lines:
                print(line.text)
                result += line.text
                # print(line.bounding_box)
    
    return result
    '''
    END - Read File - local
    '''




    # '''
    # Read File, recognize handwritten text - remote
    # This example will extract handwritten text in an image, then print results, line by line.
    # This API call can also recognize handwriting (not shown).
    # '''
    # print("===== Read File - remote =====")
    # # Get an image with handwritten text
    # remote_image_handw_text_url = "https://raw.githubusercontent.com/MicrosoftDocs/azure-docs/master/articles/cognitive-services/Computer-vision/Images/readsample.jpg"

    # # Call API with URL and raw response (allows you to get the operation location)
    # recognize_handw_results = computervision_client.read(remote_image_handw_text_url,  raw=True)

    # # Get the operation location (URL with an ID at the end) from the response
    # operation_location_remote = recognize_handw_results.headers["Operation-Location"]
    # # Grab the ID from the URL
    # operation_id = operation_location_remote.split("/")[-1]

    # # Call the "GET" API and wait for it to retrieve the results 
    # while True:
    #     get_handw_text_results = computervision_client.get_read_result(operation_id)
    #     if get_handw_text_results.status not in ['notStarted', 'running']:
    #         break
    #     time.sleep(1)

    # # Print the detected text, line by line
    # if get_handw_text_results.status == OperationStatusCodes.succeeded:
    #     for text_result in get_handw_text_results.analyze_result.read_results:
    #         for line in text_result.lines:
    #             print(line.text)
    #             print(line.bounding_box)
    # print()


    # '''
    # Recognize Printed Text with OCR - local
    # This example will extract, using OCR, printed text in an image, then print results line by line.
    # '''
    # print("===== Detect Printed Text with OCR - local =====")
    # # Get an image with printed text
    # local_image_printed_text_path = os.path.join (images_folder + "/img/test1.jpg")
    # print(local_image_printed_text_path)

    # local_image_printed_text = open(local_image_printed_text_path, "rb")

    # ocr_result_local = computervision_client.recognize_printed_text_in_stream(local_image_printed_text)
    # for region in ocr_result_local.regions:
    #     for line in region.lines:
    #         print("Bounding box: {}".format(line.bounding_box))
    #         s = ""
    #         for word in line.words:
    #             s += word.text + " "
    #         print(s)
    # print()
    # '''
    # END - Recognize Printe
    # '''