showImageAltText()

function showImageAltText() {

    //mc20 - text in images
    const allImages = document.getElementsByTagName("img");
    let imageAltMessage;
    console.log("Show images alt text?")
    if (allImages.length > 0) {
        for (let i = 0; i < allImages.length; i++) {
            if (allImages[i].getAttribute('alt')) {
                console.log("Html page --- Image " + [i] + " alt: ", allImages[i].getAttribute('alt'), allImages[i]);
                allImages[i].insertAdjacentHTML('afterend', "<h5 class='ext-alt-img'>Image alt: " + allImages[i].getAttribute('alt') + "</h5>");
                imageAltMessage = "Html page --- Image " + [i] + " alt: " + allImages[i].getAttribute('alt');
                sendMessage("check");
            } else {
                console.log("Html page --- Image " + [i] + " alt: ", allImages[i].getAttribute('alt'), allImages[i]);
                allImages[i].insertAdjacentHTML('afterend', "<h5 class='ext-alt-img'>Image alt: None</h5>");
                imageAltMessage = "Html page --- Image " + [i] + " alt: Does not exists";
                sendMessage("false");
            }
        }
    } else {
        sendMessage("na");
    }

}

function sendMessage(message) {
    let testResult;
    console.log(message);

    switch (message) {
        case "true":
            testResult = "Pass";
            break;
        case  "check":
            testResult = "Check";
            break;
        case  "na":
            testResult = "N/A";
            break;
        default :
            testResult = "Fail";
    }

    (async () => {
        await chrome.runtime.sendMessage({showImageAltTxtMessage: message, testName: "mc20", testResult: testResult})
    })();
    console.log("Show image alt text message: ", message);
    console.log("Show image testResult: ", testResult);
}