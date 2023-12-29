/***** NEEDS TESTING WHEN THERE IS A MOUSE EVENT PRESENT!!! ****/

showMouseOperations()
function showMouseOperations() {

    //mc19 - Mouse operations
    const onClicks = document.querySelectorAll(" [onclick] ");
    const onContextMenu = document.querySelectorAll(" [oncontextmenu] ");
    const onDblClick = document.querySelectorAll(" [ondblclick] ");
    const onMouseDown = document.querySelectorAll(" [onmousedown] ");
    const onMouseEnter = document.querySelectorAll(" [onmouseenter] ");
    const onMouseLeave = document.querySelectorAll(" [onmouseleave] ");
    const onMouseMove = document.querySelectorAll(" [onmousemove] ");
    const onMouseOut = document.querySelectorAll(" [onmouseout] ");
    const onMouseOver = document.querySelectorAll(" [onmouseover] ");
    const onMouseUp = document.querySelectorAll(" [onmouseup] ");

    let hasTestPassed;

    const mouseEvents = [
        onClicks,
        onContextMenu,
        onDblClick,
        onMouseDown,
        onMouseEnter,
        onMouseLeave,
        onMouseMove,
        onMouseOut,
        onMouseOver,
        onMouseUp
    ];

    mouseEvents.forEach(element => {
        if(element.size>0){
            console.log("There is a mouse event: ",element);
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
        await chrome.runtime.sendMessage({showMouseOpsMessage: message, testName: "mc19", testResult: testResult})
    })();
    console.log("Show mouse operations message: ", message);
}