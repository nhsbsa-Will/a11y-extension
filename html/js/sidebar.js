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


//To show expanded details
let mc1Link = document.getElementById('mc1Link');
mc1Link.addEventListener('click', () => {
    document.getElementById("mc1").open = true;
})

//To show expanded details
let mc3Link = document.getElementById('mc3Link');
mc3Link.addEventListener('click', () => {
    document.getElementById("mc3").open = true;
})
// test and return mc4 results
let mc3Li = document.getElementById('mc3Li');
let mc3Tag = document.getElementById('mc3Tag');

//To show expanded details
let mc4Link = document.getElementById('mc4Link');
mc4Link.addEventListener('click', () => {
    document.getElementById("mc4").open = true;
})
// test and return mc4 results
let mc4Li = document.getElementById('mc4Li');
let mc4Tag = document.getElementById('mc4Tag');


//Tests passed counters and Dom elements
let testsPassed =0;
let testsPassedId = document.getElementById('testsPassed');
let testsFailed =0;
let testsFailedId = document.getElementById('testsFailed');
let testsNa =0;
let testsNaId = document.getElementById('testsNa');
let testsNotTested =0;
let testsNotTestedId = document.getElementById('testsUnTested');
window.addEventListener("load", (event) => {
    (async () => {
        const response = await chrome.runtime.sendMessage({message: "showSkipLink"});
    })();

    (async () => {
        const response = await chrome.runtime.sendMessage({message: "showLanguage"});
    })();

    (async () => {
        const response = await chrome.runtime.sendMessage({message: "showLabel"});
    })();


    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {

            if(request.testName ==="mc3"){
                if (request.testResult === "Pass") {
                    console.log("Do mc test 3 pass");
                    mc3Li.innerHTML = passedTest('mc3', 'mc3Link', 'MC3 Language');
                    mc3Tag.classList.remove("nhsuk-tag");
                    mc3Tag.classList.add("nhsuk-tag", "nhsuk-tag--green");
                    mc3Tag.innerHTML = "PASS";
                    testsPassed++;
                } else {
                    console.log("Do mc test 3 fail");
                    mc3Li.innerHTML = failedTest('mc3', 'mc3Link', 'MC3 Language');
                    mc3Tag.classList.remove("nhsuk-tag");
                    mc3Tag.classList.add("nhsuk-tag", "nhsuk-tag--red");
                    mc3Tag.innerHTML = "FAIL";
                    testsFailed++;
                }
            }

            if(request.testName ==="mc4"){
                console.log(request)
                console.log("Do mc test 4");
                if (request.testResult === "Pass") {
                    console.log("Do mc test 4 pass");
                    mc4Li.innerHTML = passedTest('mc4', 'mc4Link', 'MC4 Skip links');
                    mc4Tag.classList.remove("nhsuk-tag");
                    mc4Tag.classList.add("nhsuk-tag", "nhsuk-tag--green");
                    mc4Tag.innerHTML = "PASS";
                    testsPassed++;
                } else {
                    console.log("Do mc test 4 fail");
                    mc4Li.innerHTML = failedTest('mc4', 'mc4Link', 'MC4 Skip links');
                    mc4Tag.classList.remove("nhsuk-tag");
                    mc4Tag.classList.add("nhsuk-tag", "nhsuk-tag--red");
                    mc4Tag.innerHTML = "FAIL";
                    testsFailed++;
                }
            }

            testsPassedId.innerHTML = testsPassed + " Passed ";
            testsFailedId.innerHTML = testsFailed + " Failed ";
            testsNaId.innerHTML = testsNa + " Not applicable ";
            testsNotTestedId.innerHTML = testsNotTested + " Not tested ";
        })


});

//For show hidden text
showStyleSwitch.addEventListener('click', () => {

    if (showStyleSwitch.checked === true) {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "showHidden"});
            // do something with response here, not outside the function
            // p.innerText = response.showText;
        })();
    } else {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "hideHidden"});
            // do something with response here, not outside the function
            // p.innerText = response.showText;
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
showButtons.addEventListener('click', () => {
    console.log("clicked data module")
    if (showButtons.checked === true) {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "showButtons"});
        })();

        //Add event listener to showSkipLink.js file
        chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
                if (request.showMessage) {
                    buttonDataModule.innerHTML = "<br/><h5 class='nhs-bright-blue'>" + request.showMessage + "</h5>";
                }
            })
    } else {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "hideButtons"});
        })();
        chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
                if (request.showMessage) {
                    buttonDataModule.innerHTML = "";
                }
            })
    }
});

//For show alt image text
showImageAltText.addEventListener('click', () => {

    if (showImageAltText.checked === true) {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "showImageAltText"});
        })();
        console.log("clicked image alt text")
        // chrome.runtime.onMessage.addListener(
        //     function(request, sender, sendResponse) {
        //         if (request.showMessage){
        //             imageAltText.innerHTML += "<br/><h5 class='nhs-bright-blue'>"+request.showMessage+"</h5>";
        //         }
        //     })
    } else {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "hideImageAltText"});
        })();
        console.log("clicked image alt text remove")
        // chrome.runtime.onMessage.addListener(
        //     function(request, sender, sendResponse) {
        //         if (request.showMessage){
        //             imageAltText.innerHTML = "";
        //         }
        //     })
    }
});

//For show button spacing
showButtonSpacing.addEventListener('click', () => {

    if (showButtonSpacing.checked === true) {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "showButtonSpacing"});
        })();
        console.log("clicked show button spacing")
        // chrome.runtime.onMessage.addListener(
        //     function(request, sender, sendResponse) {
        //         if (request.showMessage){
        //             imageAltText.innerHTML += "<br/><h5 class='nhs-bright-blue'>"+request.showMessage+"</h5>";
        //         }
        //     })
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

function failedTest(href, id, linkText) {
    return "<svg className='nhsuk-icon nhsuk-icon__cross' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden='true' width='34' height='34'>" +
        "<path d='M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z' fill='#d5281b'></path>" +
        "<path d='M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z' fill='#d5281b'></path>" +
        "</svg>" +
        "<a href='#" + href + "' id='" + id + "'>" + linkText + "</a>" +
        "<span className='nhsuk-hint nhsuk-hint-inline '> (Fail)</span>";
}

function passedTest(href, id, linkText) {
    return "<svg className='nhsuk-icon nhsuk-icon__tick' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' aria-hidden='true' width='34' height='34'>" +
        "<path stroke-width='4' stroke-linecap='round' d='M18.4 7.8l-8.5 8.4L5.6 12' stroke='#007f3b'></path>" +
        "</svg>" +
        "<a href='#" + href + "' id='" + id + "'>" + linkText + "</a>" +
        "<span className='nhsuk-hint nhsuk-hint-inline'> (Pass)</span>";
}