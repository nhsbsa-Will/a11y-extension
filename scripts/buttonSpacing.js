buttonSpacing()
function buttonSpacing() {


    //wcag 2.2 button spacing - to check that a button or link is 24px away from the next element
    const allButtons = document.getElementsByTagName("button");
    for (const element of allButtons) {
        const cssObj = window.getComputedStyle(element, null);

        let position = cssObj.getPropertyValue("position");
        let padding = cssObj.getPropertyValue("padding");
        let paddingTop = cssObj.getPropertyValue("padding-top");
        let paddingBottom = cssObj.getPropertyValue("padding-bottom");
        let paddingLeft = cssObj.getPropertyValue("padding-left");
        let paddingRight = cssObj.getPropertyValue("padding-Right");
        let margin = cssObj.getPropertyValue("margin");

        console.log("Button" + element.innerHTML + "Position :" + position);
        console.log("Button" + element.innerHTML + "Padding :" + padding);
        console.log("Button" + element.innerHTML + "Margin :" + margin);


        // const element = document.getElementById("HTML element");
        const rect = element.getBoundingClientRect();
        console.log("Width: " + rect.width + "px");
        console.log("Height: " + rect.height + "px");

        let buttonSpacing = 24*2;


        let boxTop = 0, boxLeft = 0, boxOffsetParent;
        let box = document.createElement("div");
        box.style.backgroundColor = 'rgba(255,0,0,0.1)';
        box.style.display = "block";
        box.style.width = rect.width + buttonSpacing + "px";
        box.style.height = rect.height+ buttonSpacing + "px";
        box.style.position = "absolute";

        let boxMargTopPx = parseInt(paddingTop) + parseInt(paddingBottom) + parseInt(element.offsetTop ) + (rect.height/2) + (buttonSpacing/2);
        box.style.marginTop = "-"+boxMargTopPx.toString()+"px";

        let boxMargLeftPx = buttonSpacing/2;
        box.style.marginLeft = "-"+boxMargLeftPx.toString()+"px";

        box.classList.add("button-bg-spacing");
        element.after(box);


        boxTop += element.offsetTop  || 0;
        boxLeft += element.offsetLeft || 0;
        boxOffsetParent = element.offsetParent;

        console.log(boxTop,boxLeft,boxOffsetParent);

        let cumulativeOffset = function(element) {
            let top = 0, left = 0;
            do {

            } while(element);

            return {
                top: top,
                left: left
            };
        };

        console.log(cumulativeOffset[0]);


        // console.log("cumulativeOffset left >>> " + cumulativeOffset.left );
    }
}
// function sendMessage(message) {
//     (async () => {
//         await chrome.runtime.sendMessage({showMessage: message})
//     })();
// }