// Select all elements with the class 'nhsuk-u-visually-hidden'
const elements = document.querySelectorAll('.nhsuk-u-visually-hidden');

// Iterate through the selected elements
elements.forEach(element => {
  // Remove visually hidden class
  element.classList.remove('nhsuk-u-visually-hidden');
  // Apply new CSS styles to each element
  element.style.color = '#00660C'; // Change the text color to red (example)
  element.style.fontWeight = 'bold'; // 
  element.style.backgroundColor = '#fff'
  element.style.padding = "0px 10px";
  element.style.border = '2px solid #00660C';
  element.style.display = 'block';
});