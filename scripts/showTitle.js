showHtmlPageTitle()
function showHtmlPageTitle() {

    //mc1 - Screen Orientation - not needed
    const screenOrentation = screen.orientation.type;
    //mc2 - Navigation - not needed
    const pageNavigationTag = document.getElementsByTagName("nav");
    //mc3 - Language - not needed
    const pageLanguage = document.documentElement.lang;
    //mc4 - Skip link
    const isSkipLinkClass = document.getElementsByClassName("nhsuk-skip-link");
    let skipLinkMessage;
    (isSkipLinkClass) ? skipLinkMessage = isSkipLinkClass : skipLinkMessage = "No skip link on page"
    //mc5 - Headings - not needed done in wave
    // headings();
    //mc6 - keyboard only - not needed
    //mc7 - zoom - not needed

    //mc8 - labels - show for links to help developers ***
    const pageLabels = document.getElementsByTagName("label");

    //mc9 - links - if link has button class > needs role="button" data-module="nhs-module*"
    // check if links are table ask testing community
    // put all link on :fours and see what look like
    const pageAhrefs = document.getElementsByTagName("a");


    //mc10 - errors - search id > find aria describe by and if present ***
    const isErrorsClass = document.getElementsByClassName("nhsuk-form-group--error");

    //mc11 - use of colours
    //mc12 - url's = keba case and no (query params ?) e.g. https://service-manual.nhs.uk/design-system/components/text-input

    //mc13 - tab indexes - show :focus on tab able
    const elementsWithTabindex = document.querySelectorAll('[tabindex]');
    // elmntsWithTabindex.forEach( elmnt => {
    //     // Do something with that one element
    // })

    //mc14 - video / audio (optional)
    //mc15 - time-outs
    //mc16 - auto complete and redundant entry
    //mc17 - flash animations (optional)
    //mc18 - keyboard shortcuts (optional)
    //mc19 - mouse operations
    //mc20 - text in images
    const allImages = document.getElementsByTagName("img");
    // imagesShowAltText(allImages);
    //mc21 - hover over pop-ups = all content for mouse clicking possibly javascript check
    //mc22 - auto audio
    //mc23 - touch gestures (O) (optional)
    //mc24 - motion gestures (O) (optional)
    //mc25 - styles off = wave
    //mc26 - instructions
    //mc27 - page titles
    const htmlTitle = document.title;
    let message;
    //mc28 - non java script = quick javascript switcher
    //mc29 - website help features
    //mc30 - authentication
    //mc31 - draggable movements
    //mc31 - target size
    //mc31 - focus not obscured


    (htmlTitle) ? message= htmlTitle : message="No title could be found"
    console.log("Html page title:", message);

    (async () => {
       await chrome.runtime.sendMessage({message: message});
        // do something with response here, not outside the function
        // p.innerText = response.showText;
        // alert("remove css??");
    })();

    // chrome.runtime.onMessage.addListener(
    //     function(request, sender, sendResponse) {
    //         // let tempResults;
    //         if (request.message === "titleText"){
    //               sendResponse({showText: message});
    //         }
    //     }
    // );

    // console.log("Html page iframes --- titles are: ", pageTitle);
    // console.log("Html page --- Screen orientation is: ", screenOrentation);
    // console.log("Html page --- Navigation is: ", pageNavigationTag);
    // console.log("Html page --- language is: ", pageLanguage);
    console.log("Html page --- Is skip link present: ", skipLinkMessage);
    console.log("Html page --- Labels are: ", pageLabels);
    console.log("Html page --- Links are: ", pageAhrefs);
    console.log("Html page --- Errors are: ", (isErrorsClass.length>0) ? isErrorsClass : "None could be found");
    console.log("Html page --- Tab indexes are: ", (elementsWithTabindex.length>0) ? elementsWithTabindex : "None could be found");
    console.log("Html page --- Images are: ", (allImages.length>0) ? allImages : "None could be found");

    return message;
}
function  imagesShowAltText(allImages) {
    allImages.forEach((image, i)=> {
        console.log("Html page --- Images"+[i]+" alt: ", image.getAttribute('alt'));
        // elem.innerHTML = image.getAttribute('alt');
    });
}

function headings() {
    var h = ["h1", "h2", "h3", "h4", "h5", "h6"];
    var headings = [];
    for (var i = 0; i < h.length; i++) {
        if (document.getElementsByTagName(h[i])) {
            headings[i] = document.querySelector(h[i]);
            if (headings[i]) {
                console.log("h"+(i+1)+": " + headings[i].textContent);
            }
        } else {
            alert(h+(i+1) + "doesn't exist");
        }
    }
}