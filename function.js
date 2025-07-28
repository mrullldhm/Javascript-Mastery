// Function is a reusable block of code that perform a specific task.
// Input - parameters
// Output - return value
// Execution - Code inside the function body

//Type node function.js in terminal for result

// Ways to define a function
// 1. Function declaration - hoisted
function add(a, b) {
  return a + b;
}
console.log(`Function declaration example, ${add(10, 40)}`);

// 2. Function expression - not hoisted
const tambah = function (a, b) {
  return a - b;
};
console.log(`Function expression example, ${tambah(20, 80)}`);

// 3. Arrow function
const example1 = (a, b) => a * b;
console.log(`Arrow function example, ${example1(30, 120)}`);

const example2 = (a, b) => {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
};
console.log(`Arrow function example, ${example2(40, 160)}`);
example2(40, 1);

// Parameter vs Argument
// Parameter are the variable listed in the function definition
// Argument are the actual value passed when calling the function
function greet(name) {
  console.log(`${name} is the argument`);
}
greet("Hello");

// Return value
function square(x) {
  return x * x;
}
let result = square(5);
console.log(result);

// Conclusion, function are,
// Stored in variables
// Passed as arguments
// Returned from other functions
