let btn = document.getElementById('btn');
let p = document.getElementById('styles_switch');

p.addEventListener('click', () => {

    if(p.checked === true) {
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