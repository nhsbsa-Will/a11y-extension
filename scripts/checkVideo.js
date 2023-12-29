/***** NEEDS BATTLE TESTING && NEEDS FUNCTIONALITY TO SHOW WHERE THE VIDEO IS ****/

checkVideo()
function checkVideo() {
    console.log("check if video !!!!")
    //Check DOM for video tag
    const hmtlVideoTags = document.getElementsByTagName("video");
    //Check scr of iframe if its coming from a video site e.g youtube
    const iframeTags = document.getElementsByTagName("iframe");
    const videoSiteUrls = [
        "youtube",
        "vimeo"
    ]
    let isIframeVideo;
    for(const iframeEl of iframeTags){
        for(const checkedUrls of videoSiteUrls){
            isIframeVideo = (iframeEl.src.includes(checkedUrls)) ?  true :  false;
            //Might need to store it to reference it later in functionality ???
            console.log(iframeEl);
            break;
        }
    }

    //Found a video do something
    if(isIframeVideo || hmtlVideoTags.length > 0){
        console.log("Found a video please check!");
        if(hmtlVideoTags.length > 0){
            for (const el of hmtlVideoTags) {
                //check if controls true && check autoplay is false
                if (el.controls && el.autoplay === false) {
                    console.log("Controls on video element", el);
                    sendMessage("pass");
                } else {
                    console.log("No controls on video element", el);
                    sendMessage("fail");
                    break;
                }
            }
        }else{
            console.log(iframeTags);
            sendMessage("check");
        }
    }else{
        console.log("Found no videos :)");
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
        await chrome.runtime.sendMessage({showVideoAudioMessage: message, testName: "mc14", testResult: testResult})
    })();
    console.log("Show tab index message: ", message);
    console.log("Show tab index testResult: ", testResult);
}