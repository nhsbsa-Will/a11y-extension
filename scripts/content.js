// Select all elements with the class 'nhsuk-u-visually-hidden'
const elements = document.querySelectorAll('.nhsuk-u-visually-hidden');

// Iterate through the selected elements
elements.forEach(element => {
  // Remove visually hidden class
  element.classList.remove('nhsuk-u-visually-hidden');
  // Apply new CSS styles to each element
  element.style.color = 'red'; // Change the text color to red (example)
  element.style.fontWeight = 'bold'; // 
  element.style.border = '2px solid red';
});