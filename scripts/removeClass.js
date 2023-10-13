// let className='';
// if(className!=''){
//     className='.ext_showSkipLink';
// }

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    toggleClass(request.removeClass);
    console.log('className= ',request.removeClass);
});
// toggleClass(className);
function toggleClass(className) {
    const elements = document.querySelectorAll(className);
    // Iterate through the selected elements
    elements.forEach(element => {
        element.classList.toggle(className.slice(1));
    });

    console.log("Script excuted css toggle", chrome.tabId);
}