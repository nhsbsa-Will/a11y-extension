showHeaders()

function showHeaders() {

    //mc5 - Headings
    let showVisable = true;

    let h1tags = document.getElementsByTagName("h1");
    let h2tags = document.getElementsByTagName("h2");
    let h3tags = document.getElementsByTagName("h3");
    let h4tags = document.getElementsByTagName("h4");
    let h5tags = document.getElementsByTagName("h5");
    let h6tags = document.getElementsByTagName("h6");

    //if h7 or more exist then fail!

    console.log("h1tags");
    console.log(h1tags);
    if (h1tags.length >= 2) {
        console.log("Headers fail >> More than 1 h1 tag");
        sendMessage("fail");
    } else {
        if (h1tags === null || h1tags.length === 0) {
            console.log("Headers fail >> No h1 tag");
            sendMessage("fail");
        } else {
            console.log("Headers pass >>> There is only 1 H1 in page");
            sendMessage("true");
        }
    }

    /** Note : Not sure how to go through DOM to find position of header tags
     e.g <h2></h2><div><h3></h3></div><h2></h2> **/

    console.log("h2tags");
    console.log(h2tags);

    console.log("h3tags");
    console.log(h3tags);

    /** Functionality show Headers and highlight then plus icon?**/
    let headerTags = document.getElementsByTagName("strong");
    console.log("header tags >>>> ",headerTags);
    // while(headerTags[0]) {
    // for(let i=0; i<headerTags.length; i++){
    //     if(headerTags[i].classList.contains('ext_header_tag')) {
    //         console.log("Remove the following >>> ",headerTags[i]);
    //         // headerTags[i].parentNode.removeChild(headerTags[i]);
    //         headerTags[i].remove();
    //     }
    // }

    for(let i=0; i<h1tags.length; i++){
        console.log("Enter loop >>>",i);
        h1tags[i].classList.toggle('ext_headers');
        console.log(h1tags[i].classList.contains('ext_headers'))
        if (h1tags[i].classList.contains('ext_headers')) {
            h1tags[i].insertAdjacentHTML('beforebegin',
                '<strong class="nhsuk-tag nhsuk-tag--yellow ext_header_tag">&lt;h1&gt;</strong>');
        }else{
            headerTags[i].remove();
        }
    }

    // focus color $nhsuk-focus-color #ffeb3b
    // focus round all headers and make a tag with header in it
    // e.g <strong className="nhsuk-tag nhsuk-tag--grey">&lt;h1&gt;</strong>
    // H1 = yellow , H6 = blue
    // nhsuk-tag--blue	Pending
    // nhsuk-tag--purple	Received
    // nhsuk-tag--pink	Sent
    // nhsuk-tag--red	Rejected
    // nhsuk-tag--orange	Declined
    // nhsuk-tag--yellow


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
        await chrome.runtime.sendMessage({showHeadersMessage: message, testName: "mc5", testResult: testResult})
    })();
    console.log("Show headers message: ", message);
    console.log("Show headers testResult: ", testResult);
}