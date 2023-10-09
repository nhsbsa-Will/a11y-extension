let btn = document.getElementById('btn');
let showStyleSwitch = document.getElementById('styles_switch');

let showHtmlTitle = document.getElementById('show_title');
let pageTitle = document.getElementById('ext_page_title');

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

showHtmlTitle.addEventListener('click', () => {
    console.log("clicked")
    if(showHtmlTitle.checked === true) {
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "showHtmlTitle"});
        })();

        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
                if (request.message){
                    pageTitle.innerHTML = "<br/><h5>"+request.message+"</h5>";
                }
            })
    }else{
        (async () => {
            const response = await chrome.runtime.sendMessage({message: "hideHtmlTitle"});
            // do something with response here, not outside the function
            pageTitle.innerHTML =  "<br/><h5>"+response.showText+"</h5>";;
            // alert("remove css??");
        })();
    }
});