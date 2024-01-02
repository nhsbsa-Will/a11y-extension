/**THIS NEEDS CHECKING AS NOT SURE IF DRAGGABLE EVENT **/
showInstructionStyling()

function showInstructionStyling() {

    //mc26 Instruction styling
    let checkTestResult;
    // Search pattern array e.g "click"
    const searchArray = [
        "click",
        "press",
        "click here"
    ]

    checkTestResult = "true";
    let domElements = document.querySelectorAll("*"),
        results = Array.from(domElements).find(v => {
            searchArray.forEach(el => {
                if (v.textContent === el) {
                    console.log(results ? 'found!' : 'not found');
                    // checkTestResult = "check";
                    checkTestResult = "fail";
                }
            })
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
        await chrome.runtime.sendMessage({showInstructionStylingMessage: message, testName: "mc26", testResult: testResult})
    })();
    console.log("Show instruction styling message: ", message);
    console.log("Show instruction styling testResult: ", testResult);
}