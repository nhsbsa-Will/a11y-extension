checkTabIndex()
function checkTabIndex() {
    //Check DOM for attribute tabIndex
    // const areButtonPresent = document.querySelectorAll("input[type=button]");
    const areTabIndexPresent = document.querySelectorAll(" [tabindex] ");
    let tabIndexMessage;
    for (const tabIndex of areTabIndexPresent) {
        let tabIndexDataModule = tabIndex.getAttribute("data-module");
        if(tabIndexDataModule){
            console.log("Html does have tab index :" + tabIndexDataModule);
            tabIndexMessage = "Html does have tab index :" + tabIndexDataModule;
            sendMessage(tabIndexMessage);
        }else{
            console.log("Html does not have tab index :" + tabIndex.outerHTML);
            // needs a link to the code not generate the html button
            tabIndexMessage = "Html does not have tab index :" + tabIndex.outerHTML;
            sendMessage(tabIndexMessage);
            //create something to highlight the button as there could be more than 1 and to replace focus
            // tabIndex.focus();
        }
    }
}
function sendMessage(message) {
    (async () => {
        await chrome.runtime.sendMessage({showMessage: message})
    })();
}