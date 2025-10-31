// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let counter = 0;

// These constants are for button IDs and heading text
const incrementID = "increment",
  counterID = "counter",
  headingText = "CMPM 121 Project";

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${headingText}</h1>
    <p>Counter: <span id="${counterID}">0</span></p>
    <button id="${incrementID}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  const incrementButton = document.getElementById(incrementID);
  const decrementButton = document.getElementById("dec");
  const resetButton = document.getElementById("reset");
  const counterDisplay = document.getElementById(counterID);

  // Check if any element is missing, then exit the function
  if (!incrementButton || !decrementButton || !resetButton || !counterDisplay) {
    return;
  }

  function updateDisplay() {
    if (!counterDisplay) return;
    counterDisplay.innerHTML = `${counter}`;
    document.title = "Clicked " + counter;
    document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
  }

  // Add click event to the increment button
  incrementButton.addEventListener("click", () => {
    counter++;
    updateDisplay();
  });

  // Add click event to the decrement button
  decrementButton.addEventListener("click", () => {
    counter--;
    updateDisplay();
  });

  // Add click event to the reset button
  resetButton.addEventListener("click", () => {
    counter = 0;
    updateDisplay();
  });
}

setup();
