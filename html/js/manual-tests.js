//Number of tests
const NumberOfTest = 32;
//For Dom elements Mc1Link, Mc1Li, Mc1Tag
let linkArray = [];
let liArray = [];
let tagArray = [];

for (let i=1; i < NumberOfTest; i++) {
    linkArray[ "mc"+i+"Link" ] = document.getElementById('mc'+i+'Link');
    linkArray[ "mc"+i+"Link" ].addEventListener('click', () => {
        document.getElementById("mc"+i ).open = true;
    })
    liArray[ "mc"+i+"Li" ] = document.getElementById('mc'+i+'Li');
    tagArray[ "mc"+i+"Tag" ] = document.getElementById('mc'+i+'Tag');
}

//Tests passed counters and Dom elements
let testsPassed =0;
let testsPassedId = document.getElementById('testsPassed');
let testsFailed =0;
let testsFailedId = document.getElementById('testsFailed');
let testsNa =0;
let testsNaId = document.getElementById('testsNa');
let testsCheck =0;
let testsCheckTestedId = document.getElementById('testsCheck');

//Sliders and buttons for individual test features
let btn = document.getElementById('btn');
let showStyleSwitch = document.getElementById('styles_switch');

let showSkipLink = document.getElementById('show_skip_link');
let skipLink = document.getElementById('ext_skip_link');

let showHtmlTitle = document.getElementById('show_title');
let pageTitle = document.getElementById('ext_page_title');

let showButtons = document.getElementById('show_data_module');
let buttonDataModule = document.getElementById('ext_data_module');

let showImageAltText = document.getElementById('show_image_alt');
let imageAltText = document.getElementById('ext_image_alt');

let showButtonSpacing = document.getElementById('show_button_spacing');

let showTabIndex = document.getElementById('show_tab_index');
let tabIndex = document.getElementById('ext_tab_index');


let disableCssButton = document.getElementById('disable_css');

const exportToExcel = document.getElementById('export_to_excel');


//Test all tests as you open the browser extension
window.addEventListener("load", (event) => {

    //MC3 Language
    (async () => {
        const response = await chrome.runtime.sendMessage({message: "showLanguage"});
    })();
    //MC4 Skip links
    (async () => {
        const response = await chrome.runtime.sendMessage({message: "showSkipLink"});
    })();

    //MC8 Labels
    /** MC8 NOT WORKIGN YET **/
    (async () => {
        const response = await chrome.runtime.sendMessage({message: "showLabel"});
    })();

    //MC13 Tab indexes
    (async () => {
        const response = await chrome.runtime.sendMessage({message: "showTabIndex"});
    })();
    //MC14 Video / audio content
    (async () => {
        const response = await chrome.runtime.sendMessage({message: "showVideos"});
    })();
    //MC18 Keyboard shortcuts
    (async () => {
        const response = await chrome.runtime.sendMessage({message: "showKeyboardShortcuts"});
    })();
    //MC19 Mouse operations
    (async () => {
        const response = await chrome.runtime.sendMessage({message: "showMouseOperations"});
    })();
    //MC20 Text in images
    (async () => {
        const response = await chrome.runtime.sendMessage({message: "showImageAltText"});
    })();

    //MC21 Hover over / pop ups
    /** MC21 NOT WORKIGN YET **/
    (async () => {
        const response = await chrome.runtime.sendMessage({message: "showPopUps"});
    })();

    //MC22 Automatic audio
    (async () => {
        const response = await chrome.runtime.sendMessage({message: "showAudios"});
    })();
    //MC23 Touch / pointer gestures
    (async () => {
        const response = await chrome.runtime.sendMessage({message: "showTouchGestures"});
    })();
    //MC24 Motion gestures
    (async () => {
        const response = await chrome.runtime.sendMessage({message: "showMotionGestures"});
    })();

    //MC25 Disabling css styling
    //-- Don't call on load only when clicked as this is always a check

    //MC26 Motion gestures
    (async () => {
        const response = await chrome.runtime.sendMessage({message: "showInstructionStyling"});
    })();

    //MC28 Non JavaScript
    //-- Don't call on load only when clicked as this is always a check

    //MC31 Motion gestures
    (async () => {
        const response = await chrome.runtime.sendMessage({message: "showDraggingMovements"});
    })();


    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {

            //MC3 Language
            if(request.testName ==="mc3"){
                console.log("Do mc test 3");
                testResultsRender(request.testResult, 3, mc3Li, mc3Tag,'MC3 Language')
            }
            //MC4 Skip links
            if(request.testName ==="mc4"){
                console.log(request)
                console.log("Do mc test 4");
                testResultsRender(request.testResult, 4, mc4Li, mc4Tag,'MC4 Skip links')
            }
            //MC13 Tab indexes
            if(request.testName ==="mc13"){
                console.log("Do mc test 13");
                testResultsRender(request.testResult, 13, mc13Li, mc13Tag,'MC13 Tab indexes')
            }
            //MC14 Video / audio content
            if(request.testName ==="mc14"){
                console.log("Do mc test 14");
                testResultsRender(request.testResult, 14, mc14Li, mc14Tag,'MC14 Video / audio content')
            }
            //MC18 Keyboard shortcuts
            if(request.testName ==="mc18"){
                console.log("Do mc test 18");
                testResultsRender(request.testResult, 18, mc18Li, mc18Tag,'MC18 Keyboard shortcuts')
            }
            //MC19 Mouse operations
            if(request.testName ==="mc19"){
                console.log("Do mc test 19");
                testResultsRender(request.testResult, 19, mc19Li, mc19Tag,'MC19 Mouse operations')
            }
            //MC20 Text in images
            if(request.testName ==="mc20"){
                console.log("Do mc test 20");
                testResultsRender(request.testResult, 20, mc20Li, mc20Tag,'MC20 Text in images')
            }
            //MC21 Hover over / pop ups
            if(request.testName ==="mc21"){
                console.log("Do mc test 21 NOT COMPLETE YET!!!");
                testResultsRender(request.testResult, 21, mc21Li, mc21Tag,'MC21 Hover over / pop ups')
            }
            //MC22 Automatic audio
            if(request.testName ==="mc22"){
                console.log("Do mc test 20");
                testResultsRender(request.testResult, 22, mc22Li, mc22Tag,'MC22 Automatic audio')
            }
            //MC23 Touch / pointer gestures
            if(request.testName ==="mc23"){
                console.log("Do mc test 23");
                testResultsRender(request.testResult, 23, mc23Li, mc23Tag,'MC23 Touch gestures')
            }
            //MC24 Motion gestures
            if(request.testName ==="mc24"){
                console.log("Do mc test 24");
                testResultsRender(request.testResult, 24, mc24Li, mc24Tag,'MC24 Motion gestures')
            }
            //MC26 Instruction styling
            if(request.testName ==="mc26"){
                console.log("Do mc test 26");
                testResultsRender(request.testResult, 26, mc26Li, mc26Tag,'MC26 Instruction styling')
            }
            //MC31 Dragging movements
            if(request.testName ==="mc31"){
                console.log("Do mc test 31");
                testResultsRender(request.testResult, 31, mc31Li, mc31Tag,'MC31 Dragging movements')
            }

            testsPassedId.innerHTML = testsPassed + " Passed ";
            testsFailedId.innerHTML = testsFailed + " Failed ";
            testsNaId.innerHTML = testsNa + " Not applicable ";
            testsCheckTestedId.innerHTML = testsCheck + " Checks required ";
        })

    //MC25 Disabling css - this is always a check as feature needs clicking!
    testResultsRender("Check", 25, mc25Li, mc25Tag, 'MC25 Disable css styling')

    //MC28 Non java script - this is always a check as feature needs clicking maybe ???
    testResultsRender("Check", 28, mc28Li, mc28Tag, 'MC28 Non java script')



});

//For show hidden text
// showStyleSwitch.addEventListener('click', () => {
//
//     if (showStyleSwitch.checked === true) {
//         (async () => {
//             const response = await chrome.runtime.sendMessage({message: "showHidden"});
//             // do something with response here, not outside the function
//             // p.innerText = response.showText;
//         })();
//     } else {
//         (async () => {
//             const response = await chrome.runtime.sendMessage({message: "hideHidden"});
//             // do something with response here, not outside the function
//             // p.innerText = response.showText;
//             // alert("remove css??");
//         })();
//     }
// });

//For disabling css
disableCssButton.addEventListener('click', () => {
    console.log("disabled css")
    if (disableCssButton.checked === true) {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "disableCss"});
        })();

        //Add event listener to show title js file
        // chrome.runtime.onMessage.addListener(
        //     function (request, sender, sendResponse) {
        //         if (request.showTitleMessage) {
        //             pageTitle.innerHTML += "<br/><h5>" + request.showTitleMessage + "</h5>";
        //         }
        //     })
    } else {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "enableCss"});
            // do something with response here, not outside the function
            // alert("remove css??");
        })();
    }
});
//For show html title text
showHtmlTitle.addEventListener('click', () => {
    console.log("clicked")
    if (showHtmlTitle.checked === true) {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "showHtmlTitle"});
        })();

        //Add event listener to show title js file
        chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
                if (request.showTitleMessage) {
                    pageTitle.innerHTML += "<br/><h5>" + request.showTitleMessage + "</h5>";
                }
            })
    } else {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "hideHtmlTitle"});
            // do something with response here, not outside the function
            pageTitle.innerHTML = "<br/><h5>" + response.showText + "</h5>";
            // alert("remove css??");
        })();
    }
});

//For show skip link
showSkipLink.addEventListener('click', () => {
    console.log("clicked skip link")
    if (showSkipLink.checked === true) {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "showSkipLink"});
        })();

        //Add event listener to showSkipLink.js file
        chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
                if (request.showSkipLinkMessage) {
                    skipLink.innerHTML = "<br/><h5 class='nhs-bright-blue'>" + request.showSkipLinkMessage + "</h5>";
                }
            })
    } else {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "hideSkipLink"});
        })();
        chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
                if (request.showSkipLinkMessage) {
                    skipLink.innerHTML = "";
                }
            })
    }
});

//For show button data-module is present
// showButtons.addEventListener('click', () => {
//     console.log("clicked data module")
//     if (showButtons.checked === true) {
//         (async () => {
//             const response = await chrome.runtime.sendMessage({message: "showButtons"});
//         })();
//
//         //Add event listener to showSkipLink.js file
//         chrome.runtime.onMessage.addListener(
//             function (request, sender, sendResponse) {
//                 if (request.showMessage) {
//                     buttonDataModule.innerHTML = "<br/><h5 class='nhs-bright-blue'>" + request.showMessage + "</h5>";
//                 }
//             })
//     } else {
//         (async () => {
//             const response = await chrome.runtime.sendMessage({message: "hideButtons"});
//         })();
//         chrome.runtime.onMessage.addListener(
//             function (request, sender, sendResponse) {
//                 if (request.showMessage) {
//                     buttonDataModule.innerHTML = "";
//                 }
//             })
//     }
// });

//For show alt image text
showImageAltText.addEventListener('click', () => {
    console.log("clicked image alt text 1")
    if (showImageAltText.checked === true) {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "showImageAltText"});
        })();
        console.log("clicked image alt text")
        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
                if (request.showMessage){
                    imageAltText.innerHTML += "<br/><h5 class='nhs-bright-blue'>"+request.showMessage+"</h5>";
                }
            })
    } else {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "hideImageAltText"});
        })();
        console.log("clicked image alt text remove")
        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
                if (request.showMessage){
                    imageAltText.innerHTML = "";
                }
            })
    }
});

//For show button spacing
showButtonSpacing.addEventListener('click', () => {

    if (showButtonSpacing.checked === true) {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "showButtonSpacing"});
        })();
        console.log("clicked show button spacing")
        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
                if (request.showMessage){
                    imageAltText.innerHTML += "<br/><h5 class='nhs-bright-blue'>"+request.showMessage+"</h5>";
                }
            })
    }
});

//For show button data-module is present
showTabIndex.addEventListener('click', () => {
    console.log("clicked tab index")
    if (showTabIndex.checked === true) {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "showTabIndex"});
        })();

        //Add event listener to showSkipLink.js file
        chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
                if (request.showMessage) {
                    tabIndex.innerHTML = "<br/><h5 class='nhs-bright-blue'>" + request.showMessage + "</h5>";
                }
            })
    } else {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "hideTabIndex"});
        })();
        chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
                if (request.showMessage) {
                    tabIndex.innerHTML = "";
                }
            })
    }
});

//Export to excel or csv ?? (Later project)
exportToExcel.addEventListener('click',()=>{
    console.log("Export to excel please!!!")
    fnExcelReport();
})

//Testing method for passing to render method
function testResultsRender(requestTestResult, testNo, li, tag, linkText){
    switch (requestTestResult) {
        case "Pass":
            passedTest(testNo, li, tag,linkText);
            testsPassed = testsPassed +1;
            break;
        case  "Check":
            checkTest(testNo, li, tag,linkText);
            testsCheck = testsCheck +1;
            break;
        case  "N/A":
            naTest(testNo, li, tag,linkText);
            testsNa = testsNa +1;
            break;
        default :
            failedTest(testNo, li, tag,linkText);
            testsFailed = testsFailed +1;
    }
}

//Render DOM elements for the test results
function failedTest(testNo,li,tag,linkText){
    li.innerHTML = failedTestSvg('mc'+testNo, 'mc'+testNo+'Link', linkText);
    tag.classList.remove("nhsuk-tag");
    tag.classList.add("nhsuk-tag", "nhsuk-tag--red");
    tag.innerHTML = "FAIL";
}

function failedTestSvg(href, id, linkText) {
    return "<svg className='nhsuk-icon nhsuk-icon__cross' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden='true' width='34' height='34'>" +
        "<path d='M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z' fill='#d5281b'></path>" +
        "<path d='M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z' fill='#d5281b'></path>" +
        "</svg>" +
        "<a href='#" + href + "' id='" + id + "'>" + linkText + "</a>" +
        "<span className='nhsuk-hint nhsuk-hint-inline '> (Fail)</span>";
}

function passedTest(testNo,li,tag,linkText){
    li.innerHTML = passedTestSvg('mc'+testNo, 'mc'+testNo+'Link', linkText);
    tag.classList.remove("nhsuk-tag");
    tag.classList.add("nhsuk-tag", "nhsuk-tag--green");
    tag.innerHTML = "PASS";
}
function passedTestSvg(href, id, linkText) {
    return "<svg className='nhsuk-icon nhsuk-icon__tick' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' aria-hidden='true' width='34' height='34'>" +
        "<path stroke-width='4' stroke-linecap='round' d='M18.4 7.8l-8.5 8.4L5.6 12' stroke='#007f3b'></path>" +
        "</svg>" +
        "<a href='#" + href + "' id='" + id + "'>" + linkText + "</a>" +
        "<span className='nhsuk-hint nhsuk-hint-inline'> (Pass)</span>";
}

function naTest(testNo,li,tag,linkText){
    li.innerHTML = naTestSvg('mc'+testNo, 'mc'+testNo+'Link', linkText);
    tag.classList.remove("nhsuk-tag");
    tag.classList.add("nhsuk-tag");
    tag.innerHTML = "N/A";
}
function naTestSvg(href, id, linkText) {
    return "<svg className='nhsuk-icon nhsuk-icon__cross' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden='true' width='34' height='34'>"+
        "<path stroke='#dbe0e3' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M8 12h8''></path>"+
        "</svg>"+
        // "<a href='#" + href + "' id='" + id + "'>" + linkText + "</a>" +
        "<span>" + linkText + "</span>" +
        "<span className='nhsuk-hint nhsuk-hint-inline'> (N/A)</span>";
}

function checkTest(testNo,li,tag,linkText){
    li.innerHTML = checkTestSvg('mc'+testNo, 'mc'+testNo+'Link', linkText);
    tag.classList.remove("nhsuk-tag");
    tag.classList.add("nhsuk-tag", "nhsuk-tag--blue");
    tag.innerHTML = "CHECK";
}
function checkTestSvg(href, id, linkText) {
    return "<svg class='nhsuk-icon nhsuk-icon__chevron-right' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden='true' height='34' width='34'>"+
        "<path d='M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z'></path>"+
        "</svg>"+
        "<a href='#" + href + "' id='" + id + "'>" + linkText + "</a>" +
        "<span className='nhsuk-hint nhsuk-hint-inline'> (Check)</span>";
}