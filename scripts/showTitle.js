showHtmlPageTitle()
function showHtmlPageTitle() {

    //mc8 - labels - show for links to help developers ***
    const pageLabels = document.getElementsByTagName("label");

    //mc9 - links
    const pageHrefs = document.getElementsByTagName("a");
    for (const element of pageHrefs) {
        // if a href has button class *** is button class same in all??
        if (element.getElementsByClassName("")) {
            // check a href has aria == role="button"
            let hrefAriaRole = element.getAttribute("role");
            // (hrefAriaRole === "button") ? console.log("Html a href does have data-module :" + buttonDataModule)
            //     : console.log("Html button does not have data-module :" + element);
        }
    }



    // put all link on :focus and see what look like - cant be done for all element :( only one at a time I think focus()

    //mc10 - errors - search id > find aria describe by and if present ***
    const isErrorsClass = document.getElementsByClassName("nhsuk-form-group--error");

    //mc11 - use of colours ( not to rely on only of use of color when a state change happens) ??? Wave does this via desaturation ?
    //could use css check and check psuedo elements for border, image maybe ???

    //mc12 - url's = keba case and no (query params ?) e.g. https://service-manual.nhs.uk/design-system/components/text-input
    for (const element of pageHrefs) {
        let hrefUrlString = element.getAttribute("href");
        // console.log("html href "+[i]+" url:" +pageHrefs[i]);
    }


    //mc13 - tab indexes - done in wave order tab - show :focus on tab able
    const elementsWithTabindex = document.querySelectorAll('[tabindex]');
    // elmntsWithTabindex.forEach( elmnt => {
    //     // Do something with that one element
    // })

    //mc14 - video / audio (optional)
    //mc15 - time-outs
    //mc16 - auto complete and redundant entry
    //mc17 - flash animations (optional)
    //mc18 - keyboard shortcuts (optional)

    //mc19 - mouse operations - see if possible to check javascript for mouse events and what they do?


    //mc20 - text in images
    const allImages = document.getElementsByTagName("img");
    imagesShowAltText(allImages);
    //mc21 - hover over pop-ups = all content for mouse clicking possibly javascript check
    //mc22 - auto audio
    //mc23 - touch gestures (O) (optional)
    //mc24 - motion gestures (O) (optional)
    //mc25 - styles off = wave
    //mc26 - instructions

    //mc27 - page titles
    const htmlTitle = document.title;
    let message;
    (htmlTitle) ? message = htmlTitle : message="No title could be found"
    console.log("Html page title:", message);
    //Send message to sidebar.js filer where it's listening to it
    (async () => {await chrome.runtime.sendMessage({showTitleMessage: message})})();


    //mc29 - website help features
    //mc30 - authentication
    //mc31 - draggable movements
    //mc31 - target size
    //mc31 - focus not obscured


    //Check input fields if there is a max or min length
    const inputsPresent = document.getElementsByTagName("input");
    for (const input of inputsPresent) {
        let isMaxlenghtPresent = input.getAttribute("maxlength");
        (isMaxlenghtPresent) ? console.log("html input has max length: " + input) : null ;

        let isMinlengthPresent = input.getAttribute("minlength");
        (isMinlengthPresent) ? console.log("html input has min length: " + input) : null ;
    }

    // In line style ="" check show inline style
    const inlineStyles = document.querySelectorAll("[style]");
    console.log("Html page --- Inline styles are: ", inlineStyles);
    inlineStyles.forEach( (inlineStyle) => {
        console.log("Html page --- Inline style is: ", inlineStyle ," and style = ", inlineStyle.getAttribute("style"));
    });


    console.log("Html page --- Labels are: ", pageLabels);
    console.log("Html page --- Number of a links: ", pageHrefs.length);
    console.log("Html page --- Links are: ", pageHrefs);
    console.log("Html page --- Errors are: ", (isErrorsClass.length>0) ? isErrorsClass : "None could be found");
    console.log("Html page --- Tab indexes are: ", (elementsWithTabindex.length>0) ? elementsWithTabindex : "None could be found");
    console.log("Html page --- Images are: ", (allImages.length>0) ? allImages : "None could be found");

}
function  imagesShowAltText(allImages) {

    for (let i = 0; i < allImages.length; i++) {
        console.log("Html page --- Image "+[i]+" alt: ", allImages[i].getAttribute('alt'), allImages[i]);
    }
}