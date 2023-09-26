toggleClass();
function toggleClass() {
    // Select all elements with the class 'redBold'
    const elements = document.querySelectorAll('.ext_showhidden');
    // Iterate through the selected elements
    elements.forEach(element => {
        // Remove redBold hidden class
        element.classList.remove('ext_showhidden')
    });
    console.log("Script excuted css toggle", chrome.tabId);
}