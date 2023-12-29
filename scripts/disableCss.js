/***** NOT WORKING YET? ****/

disableCss()
function disableCss() {

    //mc25 - Disabling Css styling

    // disable style sheets
    for (let i=0; i<document.styleSheets.length; i++) {
        void(document.styleSheets.item(i).disabled=true);
    }

    // disable inline styles ?

    // disable javascript styles ?

}
