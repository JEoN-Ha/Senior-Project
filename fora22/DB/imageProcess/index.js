'use strict';

const async = require('async');
const fs = require('fs');
const https = require('https');
const path = require("path");
const createReadStream = require('fs').createReadStream
const sleep = require('util').promisify(setTimeout);
const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;


/**
 * AUTHENTICATE
 * This single client is used for all examples.
 */
const key = '70a6e0db652c4dd8bcc94d8e5f2e7d44';
const endpoint = 'https://fora22-computer-vision.cognitiveservices.azure.com/';

const computerVisionClient = new ComputerVisionClient(
    new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);

// Status strings returned from Read API. NOTE: CASING IS SIGNIFICANT.
// Before Read 3.0, these are "Succeeded" and "Failed"
const STATUS_SUCCEEDED = "succeeded";
const STATUS_FAILED = "failed"

async function readTextFromFile(client, localImagePath) {
    // To recognize text in a local image, replace client.read() with readTextInStream() as shown:
    let result = await client.readInStream(() => createReadStream(localImagePath));
    // Operation ID is last path segment of operationLocation (a URL)
    let operation = result.operationLocation.split('/').slice(-1)[0];

    // Wait for read recognition to complete
    // result.status is initially undefined, since it's the result of read
    while (result.status !== STATUS_SUCCEEDED) { await sleep(1000); result = await client.getReadResult(operation); }
    return result.analyzeResult.readResults; // Return the first page of result. Replace [0] with the desired page if this is a multi-page file such as .pdf or .tiff.
}




// Perform read and await the result from URL
async function readTextFromURL(client, url) {
    // To recognize text in a local image, replace client.read() with readTextInStream() as shown:
    let result = await client.read(url);
    // Operation ID is last path segment of operationLocation (a URL)
    let operation = result.operationLocation.split('/').slice(-1)[0];
    
    // Wait for read recognition to complete
    // result.status is initially undefined, since it's the result of read
    while (result.status !== STATUS_SUCCEEDED) { await sleep(1000); result = await client.getReadResult(operation); }
    return result.analyzeResult.readResults; // Return the first page of result. Replace [0] with the desired page if this is a multi-page file such as .pdf or .tiff.
}

// Prints all text from Read result
function printRecText(readResults) {
    console.log('Recognized text:');
    for (const page in readResults) {
        if (readResults.length > 1) {
            console.log(`==== Page: ${page}`);
        }
        const result = readResults[page];
        if (result.lines.length) {
            for (const line of result.lines) {
                console.log(line.words.map(w => w.text).join(' '));
            }
        }
        else { console.log('No recognized text.'); }
    }
}

function computerVision() {
    async.series([
        async function () {
            // URL images containing printed and/or handwritten text. 
            // The URL can point to image files (.jpg/.png/.bmp) or multi-page files (.pdf, .tiff).
            // const printedTextSampleURL = 'https://moderatorsampleimages.blob.core.windows.net/samples/sample2.jpg';
            // const multiLingualTextURL = 'https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/MultiLingual.png';
            // const mixedMultiPagePDFURL = 'https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/MultiPageHandwrittenForm.pdf';
            
            const handwrittenImageLocalPath =  __dirname + '\\_imgs\\sample2.jpg';
            
            console.log(handwrittenImageLocalPath);
            const handwritingResult = await readTextFromFile(computerVisionClient, handwrittenImageLocalPath);
            printRecText(handwritingResult);
            
            
            // // Recognize text in printed image from a URL
            // console.log('Read printed text from URL...', printedTextSampleURL.split('/').pop());
            // const printedResult = await readTextFromURL(computerVisionClient, printedTextSampleURL);
            // printRecText(printedResult);

            // // Recognize multi-lingual text in a PNG from a URL
            // console.log('\nRead printed multi-lingual text in a PNG from URL...', multiLingualTextURL.split('/').pop());
            // const multiLingualResult = await readTextFromURL(computerVisionClient, multiLingualTextURL);
            // printRecText(multiLingualResult);

            // // Recognize printed text and handwritten text in a PDF from a URL
            // console.log('\nRead printed and handwritten text from a PDF from URL...', mixedMultiPagePDFURL.split('/').pop());
            // const mixedPdfResult = await readTextFromURL(computerVisionClient, mixedMultiPagePDFURL);
            // printRecText(mixedPdfResult);
        },
        function () {
            return new Promise((resolve) => {
                resolve();
            })
        }
    ], (err) => {
        throw (err);
    });
}

computerVision();