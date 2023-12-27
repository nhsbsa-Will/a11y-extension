showLabel()
function showLabel() {

    //mc8 - Labels
    const htmlElLabels = document.querySelectorAll("label");
    const airaLabelByAtt = document.querySelectorAll(" [aria-label] ");
    const airaLabelAtt = document.querySelectorAll(" [aria-labelledby] ");
    const labelForAtt = document.querySelectorAll(" [for] ");

    let languageEnMessage;

    // if (htmlLang === "en" ) {
    //     //return true
    //     languageEnMessage = "true";
    //     sendMessage(languageEnMessage);
    // } else {
    //     //return true
    //     languageEnMessage = "false";
    //     sendMessage(languageEnMessage);
    // }

    console.log("Labels html tag >>>> ", htmlElLabels);
    console.log("Aria label by attribute >>>> ", airaLabelByAtt);
    console.log("Aria label attribute >>>> ", airaLabelAtt);
    console.log("Label for attribute >>>> ", labelForAtt);

}

function sendMessage(languageEnMessage) {
    let testResult;
    if(languageEnMessage === "true"){
        testResult = "Pass";
    }else{
        testResult = "Fail";
    }
    (async () => {
        await chrome.runtime.sendMessage({showLanguageMessage: languageEnMessage, testName: "mc8", testResult: testResult})
    })();
    // (async () => {
    //
    //     await chrome.runtime.sendMessage({})
    // })();
    console.log("Labels", languageEnMessage);
}