removeImageAltText()
function removeImageAltText() {

    const elements = document.querySelectorAll('.ext-alt-img');
    // Iterate through the selected elements
    elements.forEach(element => {
        // Remove visually hidden class
        element.classList.toggle('ext-alt-img')
        element.remove(element);
    });
    // (async () => {
    //     await chrome.runtime.sendMessage({showMessage: "Remove image alt text"})
    // })();

    // const allImages = document.getElementsByTagName("img");
    // let imageAltMessage;
    // for (let i = 0; i < allImages.length; i++) {
    //     if(allImages[i].getAttribute('alt')){
    //         console.log("Html page --- Image remove!! "+[i]+" alt: ", allImages[i].getAttribute('alt'), allImages[i]);
    //         allImages[i].remove(".ext-alt-img");
    //     }
    // }
}
// function sendMessage(message) {
//     (async () => {
//         await chrome.runtime.sendMessage({showMessage: message})
//     })();
// }