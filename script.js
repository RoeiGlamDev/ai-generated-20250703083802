// Get the display element
const display = document.getElementById('display');

// Get the clear button
const clearButton = document.getElementById('clear');

// Get all the number buttons
const numberButtons = document.querySelectorAll('.number');

// Get all the operator buttons
const operatorButtons = document.querySelectorAll('.operator');

// Initialize the current value and previous value
let currentValue = '';
let previousValue = '';

// Add event listeners to the number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the value of the button
    const value = button.getAttribute('data-value');

    // Append the value to the current value
    currentValue += value;

    // Update the display
    display.value = currentValue;
  });
});

// Add event listeners to the operator buttons
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the value of the button
    const value = button.getAttribute('data-value');

    // Check if the value is '='
    if (value === '=') {
      // Evaluate the expression
      try {
        const result = eval(currentValue);
        display.value = result;
        previousValue = currentValue;
        currentValue = result.toString();
      } catch (error) {
        display.value = 'Error';
      }
    } else {
      // Append the value to the current value
      currentValue += value;

      // Update the display
      display.value = currentValue;
    }
  });
});

// Add event listener to the clear button
clearButton.addEventListener('click', () => {
  // Reset the current value and previous value
  currentValue = '';
  previousValue = '';

  // Update the display
  display.value = '';
});

// Add fade-in animation to the calculator
document.addEventListener('DOMContentLoaded', () => {
  const calculator = document.querySelector('.calculator');
  calculator.classList.add('fade-in');
});