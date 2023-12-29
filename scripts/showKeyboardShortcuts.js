/***** NEEDS TESTING WHEN THERE IS A KEYBOARD EVENT PRESENT!!! ****/

showKeyboardShortcuts()
function showKeyboardShortcuts() {

    //mc18 -  Keyboard shortcuts
    let checkTestResult;
    // check html DOM
    const htmlOnKeyPress = document.querySelectorAll(" [onkeypress] ");
    const htmlOnKeyDown = document.querySelectorAll(" [onkeydown] ");
    const htmlOnKeyUp = document.querySelectorAll(" [onkeyup] ");

    // check javascript in window
    const jsKeyPress = this.onkeypress;
    const jsKeyDown = this.onkeydown;
    const jsKeyUp = this.onkeyup;

    const domKeyboardArray = [
        htmlOnKeyPress,
        htmlOnKeyDown,
        htmlOnKeyUp,
    ];

    const jsKeyboardArray = [
        jsKeyPress,
        jsKeyDown,
        jsKeyUp,
    ];

    domKeyboardArray.forEach(element => {
        if(element.size>0){
            console.log("There is a DOM keyboard event: ",element);
            // checkTestResult = "check";
            checkTestResult = "fail";
        }else{
            console.log("There is no mouse events :) ");
            checkTestResult = "true";
        }
    })

    jsKeyboardArray.forEach(element => {
        if(element != null){
            console.log("There is a DOM keyboard event: ",element);
            // checkTestResult = "check";
            checkTestResult = "fail";
        }else{
            console.log("There is no mouse events :) ");
            checkTestResult = "true";
        }
    })

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
        await chrome.runtime.sendMessage({showAudioMessage: message, testName: "mc18", testResult: testResult})
    })();
    console.log("Show tab index message: ", message);
    console.log("Show tab index testResult: ", testResult);
}