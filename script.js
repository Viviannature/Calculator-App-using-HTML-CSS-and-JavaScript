// script.js
let display = document.getElementById("display");

function appendValue(value) {
  if (display.textContent === "0" && value !== ".") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch (e) {
    display.textContent = "Error";
  }
}
