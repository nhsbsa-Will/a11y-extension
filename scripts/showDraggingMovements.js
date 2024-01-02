/**THIS NEEDS CHECKING AS NOT SURE IF DRAGGABLE EVENT **/
showDraggingMovements()

function showDraggingMovements() {

    //mc31 Dragging movements
    let checkTestResult;

    // check html DOM
    const htmlDraggable = document.querySelectorAll(" [draggable] "); //null or false
    const htmlOnDrag = document.querySelectorAll(" [ondrag] ");
    const htmlOnStartDrag = document.querySelectorAll(" [onstartdrag] ");
    const htmlOnEndDrag = document.querySelectorAll(" [onenddrag] ");

    const htmlOnDragEntre = document.querySelectorAll(" [ondragenter] ");
    const htmlOnDragLeave = document.querySelectorAll(" [ondragleave] ");
    const htmlOnDragOver = document.querySelectorAll(" [ondragover] ");
    const htmlOnDrop = document.querySelectorAll(" [ondrop] ");

    // check javascript in window
    const jsOnDrag = this.ondrag;
    const jsOnDragEnd = this.ondragend;
    const jsOnDragLeave = this.ondragleave;
    const jsOnDragOver = this.ondragover;
    const jsOnDragStart = this.ondragstart;
    const jsOnDrop = this.ondrop;


    const domDragEventsArray = [
        htmlDraggable,
        htmlOnDrag,
        htmlOnStartDrag,
        htmlOnEndDrag,
        htmlOnDragEntre,
        htmlOnDragLeave,
        htmlOnDragOver,
        htmlOnDrop
    ];

    const jsDragEventsArray = [
        jsOnDrag,
        jsOnDragEnd,
        jsOnDragLeave,
        jsOnDragOver,
        jsOnDragStart,
        jsOnDrop
    ];

    domDragEventsArray.forEach(element => {
        if (element.size > 0) {
            console.log("There is a DOM drag event: ", element);
            // checkTestResult = "check";
            checkTestResult = "fail";
        } else {
            console.log("There is no DOM drag events :) ");
            checkTestResult = "true";
        }
    })

    jsDragEventsArray.forEach(element => {
        if (element != null) {
            console.log("There is a js drag event: ", element);
            // checkTestResult = "check";
            checkTestResult = "fail";
        } else {
            console.log("There is no js drag events :) ");
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
        await chrome.runtime.sendMessage({showDragMoveMessage: message, testName: "mc31", testResult: testResult})
    })();
    console.log("Show drag movements message: ", message);
    console.log("Show drag movements testResult: ", testResult);
}