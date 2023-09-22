Handler();
function Handler() {
    // Select all elements with the class 'nhsuk-u-visually-hidden'
    const elements = document.querySelectorAll('.nhsuk-u-visually-hidden');
    // Iterate through the selected elements
    elements.forEach(element => {
        // Remove visually hidden class
        element.classList.toggle('ext_showhidden')
    });
    console.log("Script excuted", chrome.tabId);
}