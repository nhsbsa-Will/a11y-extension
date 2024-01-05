showLabel()
function showLabel() {

    //mc8 - Labels
    let showLabelVisable = true;

    const pageLabels = document.getElementsByTagName("label");
    const pageInputs = document.getElementsByTagName("input");
    //Check html page inputs for labels
    /** Need to show where it fails & highlight the labels and its corresponding input **/
    if(pageInputs.length>0){
        for (const input of pageInputs) {
            if(input.labels.length > 0){
                console.log("Mc8 passed");
                sendMessage("true");
                // sendMessage("check");
            }else{
                console.log("Mc8 failed");
                sendMessage("fail");
            }
        }
    }


    // //Check label 'for' attribute
    // const labelForAtt = document.querySelectorAll(" [for] ");
    // labelForAtt.forEach(element => {
    //     let curIdElement = element;
    //     console.log(curIdElement);
    //     //Check if id is in dom
    //     if(document.getElementById(curIdElement)){
    //         if(showLabelVisable) {
    //             console.log("Aria label Paint yellow and warm yellow >>>> ",element);
    //             //Highlight both the label and the id;
    //             //label= $color_nhsuk-yellow;
    //             //element = $color_nhsuk-warm-yellow;
    //             //draw a line between the two
    //         }
    //         console.log("Mc8 passed >> Aria label");
    //         sendMessage("check");
    //     }else{
    //         if(showLabelVisable) {
    //             console.log("Aria label Paint red >>>> ",element);
    //             //if not then flag that it is missing!! red?
    //             //label= $color_nhsuk-red
    //             //or
    //             //element = $color_nhsuk-red
    //         }
    //         //Test failed and list where it failed??
    //         console.log("Mc8 failed >> Aria label");
    //         sendMessage("fail");
    //     }
    //
    //     // Remove visually hidden class
    //     // element.classList.toggle('ext_showhidden')
    // });
    //
    // //Check for Aria label by
    // const airaLabelByAtt = document.querySelectorAll(" [aria-labelledby] ");
    // airaLabelByAtt.forEach(element => {
    //     console.log(element)
    //     // let curIdElement = airaLabelByAtt[element].ariaLabel;
    //     //Check if id is in dom
    //     // console.log("curIdElement >>> ",curIdElement);
    //     // if(document.getElementById(curIdElement)){
    //     //     if(showLabelVisable) {
    //     //         console.log("Aria label Paint yellow and warm yellow >>>> ",element);
    //     //     }
    //     //     console.log("Mc8 passed >> Aria label");
    //     //     sendMessage("true");
    //     // }else{
    //     //     if(showLabelVisable) {
    //     //         console.log("Aria label Paint red >>>> ",element);
    //     //     }
    //     //     //Test failed and list where it failed??
    //     //     console.log("Mc8 failed >> Aria label");
    //     //     sendMessage("fail");
    //     // }
    // });
    //
    // //Check for Aria label
    // const airaLabelAtt = document.querySelectorAll(" [aria-label] ");
    // airaLabelAtt.forEach(element => {
    //     // let curIdElement = element.ariaLabel;
    //     console.log(element)
    //     //Check if id is in dom
    //     // console.log("curIdElement >>> ",curIdElement);
    //     // if(document.getElementById(curIdElement)){
    //     //     if(showLabelVisable) {
    //     //         console.log("Aria label by Paint yellow and warm yellow >>>> ",element);
    //     //     }
    //     //     console.log("Mc8 passed >> Aria label by");
    //     //     sendMessage("true");
    //     // }else{
    //     //     if(showLabelVisable) {
    //     //         console.log("Aria label by Paint red >>>> ",element);
    //     //     }
    //     //     console.log("Mc8 failed >> Aria label by");
    //     //     sendMessage("fail");
    //     // }
    //
    // });

    console.log("List of all labels >>>> ", pageLabels);
    console.log("List of all inputs >>>> ", pageInputs);
    // console.log("Aria label by attribute >>>> ", airaLabelByAtt);
    // console.log("Aria label attribute >>>> ", airaLabelAtt);
    // console.log("Label for attribute >>>> ", labelForAtt);

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
        await chrome.runtime.sendMessage({showLabelMessage: message, testName: "mc8", testResult: testResult})
    })();
    console.log("Show label message: ", message);
    console.log("Show label testResult: ", testResult);
}