//Data types define what kind of value a variable can hold

//Javascript Data Types

//Primitive Data Types (Immutable, stored by value)
//1. Number
//2. String
//3. Boolean
//4. Undefined
//5. Null
//6. Symbol (ES6)
//7. BigInt (ES2020)

//Non-Primitive (References) Data Types
//8. Object (inclde arrays, functions, dates, etc)

//Type node variable.js in terminal for result
// Example 1
const a = 3;
const b = 3.124;
const c = Infinity;
const d = -Infinity;
const e = "abc" / 2;
console.log("Example 1 ", typeof a, typeof b, typeof c, typeof d, typeof e);

// Example 2
const f = "Hello World";
const g = "Hello World";
const h = `Hello ${g}`;
console.log("Example 2 ", typeof f, typeof g, typeof h);

// Example 3
const ab = true;
const cd = false;
console.log("Example 3 ", typeof ab, typeof cd);

// Example 4
let x;
console.log("Example 4 ", typeof x);

// Example 5
const y = null;
console.log("Example 5 ", typeof y);

// Example 6
const s = Symbol("test");
console.log("Example 6 ", typeof s);

// Example 7
const big = 123456789012345678901234567890n;
console.log("Example 7 ", typeof y);

// Example 8
const object = { name: "Amirul", gender: "Male" };
const arr = ["Amirul", "Male"];
function greet() {}
console.log("Example 8 ", typeof object, typeof arr, typeof greet);

function greet() {
  console.log("Hello!");
}