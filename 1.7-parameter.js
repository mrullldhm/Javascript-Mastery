// Parameter vs Argument
// Parameter are the variable listed in the function definition
// Argument are the actual value passed when calling the function
function greet(name) {
  console.log(`${name} is the parameter`);
}
greet("Hello is the argument");

// Default Parameter - let set a default value for a function parameter if no argument / undefined is passed
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet();           // Hello, Guest!
greet("Amirul");   // Hello, Amirul!


// REST Parameter - allow to pass an indefinite number of argument to a function as an array
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2));           // 3
console.log(sum(1, 2, 3, 4, 5));  // 15
