

        // Select all elements to check
        const
            classElements = document.querySelectorAll("*[class]");
        const
            animationClassArray = new Array();
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