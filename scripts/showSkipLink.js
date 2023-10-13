showSkipLink()
function showSkipLink() {

    //mc4 - Skip link
    const isSkipLinkClass = document.querySelectorAll('.nhsuk-skip-link');
    let skipLinkMessage;

    isSkipLinkClass.forEach((element, index) => {
        //isSkipLinkClass index == 0 because if there is more than 1 iframe on page we don't care.
        if (index == 0) {
            skipLinkMessage = "Yes skip link is present";
            element.classList.toggle('ext_showSkipLink');
            element.focus();
            sendMessage(skipLinkMessage);
        } else {
            skipLinkMessage = "No skip link on page";
            sendMessage(skipLinkMessage);
        }

    });
}

function sendMessage(skipLinkMessage) {
    (async () => {
        await chrome.runtime.sendMessage({showSkipLinkMessage: skipLinkMessage})
    })();
    console.log("Html page --- Is skip link present: ", skipLinkMessage);
}