
showTouchGestures()
function showTouchGestures() {

    //mc23 Touch / pointer gestures
    let checkTestResult;

    // check touch gestures?
    if(this.showTouchGestures.length >0){

        const onTouchStart = ('ontouchstart' in window);
        console.log("onTouchStart >>> ",onTouchStart);
        const onTouchMove = ('onTouchMove' in window);
        console.log("onTouchMove >>> ",onTouchMove);
        const onTouchEnd = ('onTouchEnd' in window);
        console.log("onTouchEnd >>> ",onTouchEnd);

        const touchEventsArray = [
            onTouchStart,
            onTouchMove,
            onTouchEnd,
        ];

        touchEventsArray.forEach(element => {
            if(element){
                console.log("There is a touch event: ",element);
                /** Check that there is an alternative for touch event else fail **/
                // checkTestResult = "check";
                checkTestResult = "fail";
            }else{
                console.log("There is an alt for the touch event :) ");
                checkTestResult = "true";
            }
        })
    }else{
        checkTestResult = "na";
    }


    sendMessage(checkTestResult);
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
        await chrome.runtime.sendMessage({showTouchGesturesMessage: message, testName: "mc23", testResult: testResult})
    })();
    console.log("Show touch gestures message: ", message);
    console.log("Show touch gestures testResult: ", testResult);
}