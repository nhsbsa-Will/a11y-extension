
/** Check animated svg's **/
//search tag animate
let svgAnimateTags = document.getElementsByTagName("animate");
let svgAnimateTransformTags = document.getElementsByTagName("animateTransform");
let svgAnimateMotionTags = document.getElementsByTagName("animateMotion");

/** Check for gifs **/
// need to check if gif is animated?
let gifFiles = document.querySelectorAll("img[src$='.gif']");

/** Check for flash(deprecated) files **/
let flashObjectFiles = document.querySelectorAll("object[data$='.swf']");
let flashEmbedFiles = document.querySelectorAll("embed[src$='.swf']");

/** Check for js animations **/
// Harder to do I think --> check setInterval in DOM window?
// clearInterval ?
// check for animate() method in javascript?
// Loads of javascript libarys :(

/** Check for canvas DOM element?? **/
let canvasElements = document.getElementsByTagName("canvas");
//setInterval(), setTimeout(), and window.requestAnimationFrame()

/** Check for css animations **/
//check for animations
//check for transitions
// Select all elements to check
const classElements = document.querySelectorAll("*[class]");
const animationClassArray = new Array();
// Iterate through the class elements
classElements
    .forEach(element => {
        let classElementObject = window.getComputedStyle(element);
        let classElementGetAnimation = classElementObject.getPropertyValue('animation');
        console.log("aniamtion here???? >>>> ", element.className);
        // check if css class has animation property in it
        // classElementGetAnimation ? console.log(element, " css property - animation >>> ", classElementGetAnimation) : null;
        classElementGetAnimation ? animationClassArray.push(classElementGetAnimation) : null;

        console.log("lenght >>> ", classElementGetAnimation.length)
    });

animationClassArray.forEach(element => {
    // console.log(element, " css property - animation >>> ");
});