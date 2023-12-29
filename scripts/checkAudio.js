/***** NEEDS BATTLE TESTING && NEEDS FUNCTIONALITY TO SHOW WHERE THE AUDIO IS AND TEST CONTROLLER FOR AUDIO ****/

checkAudio()

function checkAudio() {
    console.log("check if audio !!!!")
    //Check DOM for video tag
    const audioTags = document.getElementsByTagName("audio");
    //Check scr of iframe if its coming from a video site e.g youtube
    const iframeTags = document.getElementsByTagName("iframe");
    //Not sure if array needed to check if audio is coming from iframe??
    const audioSiteUrls = [
        "youtube",
        "vimeo"
    ]
    let isIframeAudio;
    for (const iframeEl of iframeTags) {
        for (const checkedUrls of audioSiteUrls) {
            isIframeAudio = (iframeEl.src.includes(checkedUrls)) ? true : false;
            //Might need to store it to reference it later in functionality ???
            console.log(iframeEl);
            break;
        }
    }

    //Found an audio do something
    if (isIframeAudio || audioTags.length > 0) {
        console.log("Found a audio please check!");
        if (audioTags.length > 0) {
            for (const el of audioTags) {
                //check if controls true && check autoplay is false
                if (el.controls && el.autoplay === false) {
                    console.log("Controls on audio element", el);
                    sendMessage("pass");
                } else {
                    console.log("No controls on audio element", el);
                    sendMessage("fail");
                    break;
                }
            }
        } else {
            console.log(iframeTags);
            sendMessage("check");
        }

    } else {
        console.log("Found no audio :)");
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
        await chrome.runtime.sendMessage({showAudioMessage: message, testName: "mc22", testResult: testResult})
    })();
    console.log("Show tab index message: ", message);
    console.log("Show tab index testResult: ", testResult);
}