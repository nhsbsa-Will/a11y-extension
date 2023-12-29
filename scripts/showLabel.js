showLabel()
function showLabel() {

    //mc8 - Labels
    let showLabelVisable = false;
    //mc8 - labels - show for links to help developers ***
    const pageLabels = document.getElementsByTagName("label");

    //Check label 'for' attribute
    const labelForAtt = document.querySelectorAll(" [for] ");
    labelForAtt.forEach(element => {
        let curIdElement = element;
        //Check if id is in dom
        if(document.getElementById(curIdElement)){
            if(showLabelVisable) {
                console.log("Aria label Paint yellow and warm yellow >>>> ",element);
                //Highlight both the label and the id;
                //label= $color_nhsuk-yellow;
                //element = $color_nhsuk-warm-yellow;
                //draw a line between the two
            }
        }else{
            if(showLabelVisable) {
                console.log("Aria label Paint red >>>> ",element);
                //if not then flag that it is missing!! red?
                //label= $color_nhsuk-red
                //or
                //element = $color_nhsuk-red
            }
            //Test failed and list where it failed??
            console.log("Mc8 failed >> Aria label");
        }

        // Remove visually hidden class
        // element.classList.toggle('ext_showhidden')
    });

    //Check for Aria label by
    const airaLabelByAtt = document.querySelectorAll(" [aria-labelledby] ");
    airaLabelByAtt.forEach(element => {
        let curIdElement = airaLabelByAtt[element].ariaLabel;
        //Check if id is in dom
        console.log("curIdElement >>> ",curIdElement);
        if(document.getElementById(curIdElement)){
            if(showLabelVisable) {
                console.log("Aria label Paint yellow and warm yellow >>>> ",element);
            }
        }else{
            if(showLabelVisable) {
                console.log("Aria label Paint red >>>> ",element);
            }
            //Test failed and list where it failed??
            console.log("Mc8 failed >> Aria label");
        }
    });

    //Check for Aria label by
    const airaLabelAtt = document.querySelectorAll(" [aria-label] ");
    airaLabelAtt.forEach(element => {
        let curIdElement = element.ariaLabel;
        //Check if id is in dom
        console.log("curIdElement >>> ",curIdElement);
        if(document.getElementById(curIdElement)){
            if(showLabelVisable) {
                console.log("Aria label by Paint yellow and warm yellow >>>> ",element);
            }
        }else{
            if(showLabelVisable) {
                console.log("Aria label by Paint red >>>> ",element);
            }
            console.log("Mc8 failed >> Aria label by");
        }

    });


    let message;

    // if (htmlLang === "en" ) {
    //     //return true
    //     languageEnMessage = "true";
    //     sendMessage(languageEnMessage);
    // } else {
    //     //return true
    //     languageEnMessage = "false";
    //     sendMessage(languageEnMessage);
    // }

    // console.log("Labels html tag >>>> ", htmlLabels);
    console.log("Aria label by attribute >>>> ", airaLabelByAtt);
    console.log("Aria label attribute >>>> ", airaLabelAtt);
    console.log("Label for attribute >>>> ", labelForAtt);

}

function sendMessage(message) {
    let testResult;
    if(message === "true"){
        testResult = "Pass";
    }else{
        testResult = "Fail";
    }
    (async () => {
        await chrome.runtime.sendMessage({showLanguageMessage: message, testName: "mc8", testResult: testResult})
    })();
    console.log("Labels", message);
}