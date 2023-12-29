/***** NOT WORKING YET ****/

showPopUps()
function showPopUps() {

    //mc21 -  Hover over / pop ups
    /* Check DOM in page */
    const alertPopUps = document.querySelectorAll(" [onclick] ");
    const confirmPopUps = document.querySelectorAll(" [oncontextmenu] ");
    const promptPopUps = document.querySelectorAll(" [ondblclick] ");

    // check javascript in window
    const jsKeyPress = this.onclick;
    const jsKeyDown = this.oncontextmenu;
    const jsKeyUp = this.ondblclick;

    /* Check css for hover states too*/
    /* Note: look at animationChecker.js */

    let hasTestPassed;

    const popUp = [
        alertPopUps,
        confirmPopUps,
        promptPopUps,
    ];

    popUp.forEach(element => {
        if(element.size>0){
            console.log("There is a pop up event: ",element);
            hasTestPassed = "false";
        }else{
            console.log("There is no mouse events :) ");
            hasTestPassed = "true";
        }
    })
    sendMessage(hasTestPassed);
}

function sendMessage(message) {
    let testResult;
    console.log(message);
    if(message === "true"){
        testResult = "Pass";
    }else{
        testResult = "Fail";
    }
    (async () => {
        await chrome.runtime.sendMessage({showPopUpsMessage: message, testName: "mc21", testResult: testResult})
    })();
    console.log("Show pop ups message: ", message);
}