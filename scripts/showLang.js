showLang()
function showLang() {

    //mc3 - Language
    let htmlLang = document.documentElement.lang;
    let languageEnMessage;

    if (htmlLang === "en" ) {
        //return true
        languageEnMessage = "true";
        sendMessage(languageEnMessage);
    } else {
        //return true
        languageEnMessage = "false";
        sendMessage(languageEnMessage);
    }

}

function sendMessage(languageEnMessage) {
    let testResult;
    if(languageEnMessage === "true"){
        testResult = "Pass";
    }else{
        testResult = "Fail";
    }
    (async () => {
        await chrome.runtime.sendMessage({showLanguageMessage: languageEnMessage, testName: "mc3", testResult: testResult})
    })();
    // (async () => {
    //
    //     await chrome.runtime.sendMessage({})
    // })();
    console.log("Html page --- Language is EN or EN-GB: ", languageEnMessage);
}