// Control Flow - Conditional
//Type node control-flow-conditional.js in terminal for result
// 1. Conditionals
// if Statement
let a = 10;
if (a < 20) {
  console.log("if statement", "young");
}
// if...else Statement
let b = 8;
if (b < 20) {
  console.log("if...else", `${b} years old is a teenager`);
} else {
  console.log("if...else", `${b} years old is an adult`);
}
//if...else if...else Statement
let c = "";
if (c === "kid") {
  console.log("if...else if...else", "Your age must be between 0-12");
} else if (c === "teenager") {
  console.log("if...else if...else", "Your age must be between 12-18");
} else if (c === "adult") {
  console.log("if...else if...else", "Your age must be between 18-40");
} else {
  console.log("if...else if...else", "Your age must be between 40-70");
}
// switch statement
let ali = "elder";
switch (ali) {
  case "kid":
    console.log("Switch Statement", "Ali age must be between 0-12");
    break;
  case "teenager":
    console.log("Switch Statement", "Ali age must be between 12-18");
    break;
  case "adult":
    console.log("Switch Statement", "Ali age must be between 18-40");
    break;
  case "elder":
    console.log("Switch Statement", "Ali age must be above 40");
    break;
}
//Ternary Operator (Shorthand for if...else)
let salary = 1000;
let salStatus = salary < 2000 ? "Underpaid" : "Overpaid";
console.log("Ternary Operator", salStatus);
//Logical Operator in Condition
let AbuWeight = 39.4;
let AbuHeight = 165;
if (AbuWeight < 40 && AbuHeight < 170) {
  console.log("Logical Operator", "Underweight");
} else {
  console.log("Logical Operator", "Overweiight");
}

// 2. Loops (for, while)
// 3. Control keywords (break, continue, return)
