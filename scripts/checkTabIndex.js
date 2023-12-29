/***** NEEDS BATTLE TESTING && NEEDS FUNCTIONALITY TO SHOW WHERE THE TABINDEX IS ****/

checkTabIndex()
function checkTabIndex() {
    console.log("checkTabIndex!!!!")
    //Check DOM for attribute tabIndex
    const areTabIndexPresent = document.querySelectorAll(" [tabindex] ");
    if(areTabIndexPresent.length>0){
        for (const tabIndexEl of areTabIndexPresent) {
            console.log(tabIndexEl.tabIndex);
            console.log(Math.sign(tabIndexEl.tabIndex));
            let isNegativeNumber = Math.sign(tabIndexEl.tabIndex)
            if(isNegativeNumber == -1){
                /**FUNCTIONALITY REQUIRED HERE**/
                console.log("Html does have tab index with a - :" + tabIndexEl);
                //check the tabindex element role = alert
                let curElRole = tabIndexEl.getAttribute('role');
                if(curElRole == "alert" && tabIndexEl.tabIndex == -1){
                    console.log("Html does have tab index with a - but its an role='alert' :)");
                    sendMessage("true");
                }else{
                    sendMessage("Fail");
                    //Does it need a check here??
                    //sendMessage("check");
                }
            }else{
                console.log("Html does not have a - tab index :)");
                sendMessage("true");
            }
        }
    }else{
        console.log("Html does not have tab index :)");
        sendMessage("true");
    }

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
        await chrome.runtime.sendMessage({showTabIndexesMessage: message, testName: "mc13", testResult: testResult})
    })();
    console.log("Show tab index message: ", message);
    console.log("Show tab index testResult: ", testResult);
}