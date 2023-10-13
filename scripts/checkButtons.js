checkButtons()
function checkButtons() {
    //Check if button has data-module attribute
    // const areButtonPresent = document.querySelectorAll("input[type=button]");
    const areButtonPresent = document.getElementsByTagName("button");
    let buttonsMessage;
    for (const button of areButtonPresent) {
        let buttonDataModule = button.getAttribute("data-module");
        if(buttonDataModule === "nhsuk-button"){
            console.log("Html button does have data-module :" + buttonDataModule);
            buttonsMessage = "Html button does have data-module :" + buttonDataModule;
            sendMessage(buttonsMessage);
        }else{
            console.log("Html button does not have data-module :" + button.outerHTML);
            // needs a link to the code not generate the html button
            buttonsMessage = "Html button does not have data-module :" + button.outerHTML;
            sendMessage(buttonsMessage);
            //create something to highlight the button as there could be more than 1 and to replace focus
            button.focus();
        }
    }
}
function sendMessage(message) {
    (async () => {
        await chrome.runtime.sendMessage({showMessage: message})
    })();
}