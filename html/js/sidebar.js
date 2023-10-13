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


//For show hidden text
showStyleSwitch.addEventListener('click', () => {

    if(showStyleSwitch.checked === true) {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "showHidden"});
            // do something with response here, not outside the function
            // p.innerText = response.showText;
        })();
    }else{
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
    if(showHtmlTitle.checked === true) {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "showHtmlTitle"});
        })();

        //Add event listener to show title js file
        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
                if (request.showTitleMessage){
                    pageTitle.innerHTML += "<br/><h5>"+request.showTitleMessage+"</h5>";
                }
            })
    }else{
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "hideHtmlTitle"});
            // do something with response here, not outside the function
            pageTitle.innerHTML =  "<br/><h5>"+response.showText+"</h5>";
            // alert("remove css??");
        })();
    }
});

//For show skip link
showSkipLink.addEventListener('click', () => {
    console.log("clicked skip link")
    if(showSkipLink.checked === true) {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "showSkipLink"});
        })();

        //Add event listener to showSkipLink.js file
        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
                if (request.showSkipLinkMessage){
                    skipLink.innerHTML = "<br/><h5 class='nhs-bright-blue'>"+request.showSkipLinkMessage+"</h5>";
                }
            })
    }else{
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "hideSkipLink"});
        })();
        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
                if (request.showSkipLinkMessage){
                    skipLink.innerHTML = "";
                }
            })
    }
});

//For show button data-module is present
showButtons.addEventListener('click', () => {
    console.log("clicked data module")
    if(showButtons.checked === true) {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "showButtons"});
        })();

        //Add event listener to showSkipLink.js file
        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
                if (request.showMessage){
                    buttonDataModule.innerHTML = "<br/><h5 class='nhs-bright-blue'>"+request.showMessage+"</h5>";
                }
            })
    }else{
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "hideButtons"});
        })();
        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
                if (request.showMessage){
                    buttonDataModule.innerHTML = "";
                }
            })
    }
});

//For show alt image text
showImageAltText.addEventListener('click', () => {

    if(showImageAltText.checked === true) {
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
    }else{
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