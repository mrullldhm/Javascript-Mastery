//Operator is a symbol that tells Javascript to perform a specific action
//Like addition, comparison or logical evaluation

//Types of Operators
//1. Arithmetic Operators
//     Addition
// -   Subtraction
// *   Multiplication
// /   Division
// %   Modulus (remainder)
// **  Exponentiation (ES6)
// ++  Increment
// --  Decrement
let a = 3;
console.log(a + 2);
console.log(a / 3);
console.log(++a * 10);

//2. Assignment Operators
// =    Assign
// +=   Add and assign
// -=   Subtract and assign
// *=   Multiply and assign
// /=   Divide and assign
// %=   Modulus and assign
// **=  Exponent and assign
let ab = 3;
console.log((ab += 7));

//3. Comparison Operators
// ==   Equal to (loose equality, performs type coercion)
// ===  Strict equal (no type coercion)
// !=   Not equal (loose)
// !==  Strict not equal
// >    Greater than
// <    Less than
// >=   Greater or equal
// <=   Less or equal
let jh = 5;
let sh = "5";
console.log(jh == sh);
console.log(jh === sh);

//4. Logical Operators
// &&  AND (true if both are true)
// ||  OR  (true if at least one is true)
// !   NOT (inverts value)

//5. Ternary Operator (Conditional)
// A shorthand for if...else:
// Condition ? valueIfTrue : valueIfFalse
let age = 80;
console.log(age > 190 ? "Old" : "Young");

//6. Type Operator

//Type node operator.js in terminal for result
console.log(typeof "Hello"); // "string"
console.log([1, 2] instanceof Array); // true
