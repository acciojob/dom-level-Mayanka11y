// Function to determine the DOM level of an element
function getDOMLevel(element) {
    let level = 0;
    let currentElement = element;

    // Traverse up the DOM tree until we reach the root
    while (currentElement) {
        level++;
        currentElement = currentElement.parentElement; // Move to the parent element
    }

    return level;
}

// Get the element with the id 'level'
const targetElement = document.getElementById('level');

// Calculate the DOM level
const domLevel = getDOMLevel(targetElement);

// Display the result using alert
alert