// Babel is a JavaScript compiler that converts modern JS into older JS that browser can understand

// Purpose
// Not all browsers understand modern JavaScript. Babel makes our code backward-compatible.

// How it works
// Write modern JavaScript (like let, const, arrow functions, etc.).
// Babel transforms it into older JavaScript (like var, function expressions).

// Example
// Modern JS (ES6)
var greet = () => console.log("Hello");

// After Babel
var greet = function() {
  console.log("Hello");
};
