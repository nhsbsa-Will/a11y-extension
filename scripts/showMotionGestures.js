/**THIS NEEDS CHECKING AS NOT SURE IF MOTION EVENT IS SAME AS TOUCH GESTURES ????**/
showMotionGestures()
function showMotionGestures() {

    //mc24 Motion gestures
    let checkTestResult;

    // check touch gestures?
    if(this.showTouchGestures.length >0){

        /**IS THIS RIGHT???? **/
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
                /** Check that there is an alternative for motion event else fail **/
                // checkTestResult = "check";
                checkTestResult = "fail";
            }else{
                console.log("There is an alt for the motion event :) ");
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
        await chrome.runtime.sendMessage({showMotionGesturesMessage: message, testName: "mc24", testResult: testResult})
    })();
    console.log("Show motion gestures message: ", message);
    console.log("Show motion gestures testResult: ", testResult);
}