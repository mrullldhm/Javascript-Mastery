// Functional programming is a programming style that focuses on using function as the main building blocks to write clean, predictable and reusable code

// Key ideas of Functional Programming
// 1. Pure Function
// A function that always return the same output for the same input and doesn't change anything outside itself
function add(a, b) {
  return a + b;
}

// 2. Immutability
// Once data is created, it cannot be changed. Instead of changing values, we create new ones
let array = [1, 2, 3];
let newArray = [...array, 4];

// 3. Higher Order FUnction
// Function that take other function as argument or return function
function greet(name) {
  return `Hello ${name}`;
}
function user(name, callback) {
  return callback(name);
}
console.log(user("Amirul", greet));

// 4. First Class Function
// Function are treated like values. It can be stored in variable, passed as arguments or returned
function greets(nama) {
  console.log(`Wadap, ${nama}!`);
}
function processUser(pass) {
  const userName = "Adham";
  pass(userName);
}
processUser(greets); // Output: Hello, Amirul!

// 5. Declarative Code
// Write what to do, not how to do it. THis is the opposite of imperative code
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
