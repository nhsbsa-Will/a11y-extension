showImageAltText()
function showImageAltText() {

    //mc20 - text in images
    const allImages = document.getElementsByTagName("img");
    // let imageAltMessage;
    for (let i = 0; i < allImages.length; i++) {
        if(allImages[i].getAttribute('alt')){
            console.log("Html page --- Image "+[i]+" alt: ", allImages[i].getAttribute('alt'), allImages[i]);
            allImages[i].insertAdjacentHTML( 'afterend', "<h5 class='ext-alt-img'>Image alt: "+allImages[i].getAttribute('alt')+"</h5>" );
            // imageAltMessage = "Html page --- Image "+[i]+" alt: "+ allImages[i].getAttribute('alt') ;
            // sendMessage(imageAltMessage);
        }else{
            console.log("Html page --- Image "+[i]+" alt: ", allImages[i].getAttribute('alt'), allImages[i]);
            allImages[i].insertAdjacentHTML( 'afterend', "<h5 class='ext-alt-img'>Image alt: None</h5>" );
            // imageAltMessage = "Html page --- Image "+[i]+" alt: Does not exists" ;
            // sendMessage(imageAltMessage);
        }
    }
}
// function sendMessage(message) {
//     (async () => {
//         await chrome.runtime.sendMessage({showMessage: message})
//     })();
// }