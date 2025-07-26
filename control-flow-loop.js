// Loop is a control flow structure that allows to repeat a block of code multile times until a condition is no longer true
// Loop let automate repetition.

// Type node control-flow-loop.js in terminal for result //

// Types of loop
// 1. for loop - best when know how many times to repeat
for (let w = 1; w <= 5; w++) {
  console.log(`For loop example, w is ${w}`);
}

// 2. while loop - run as long as a condition is true
let z = 1;
while (z <= 5) {
  console.log(`while loop example, z is ${z}`);
  z++;
}

// 3. do...while loop - run at least once, even if the condition is false
let x = 1;
do {
  console.log(`do...while example, x is ${x}`);
  x++;
} while (x <= 5);

// 4. for...of loop - for array or iterables
let number = [1, 2, 3, 4, 5];
for (let abu of number) {
  console.log(`for...of example ${abu}`);
}

//5. for..in - for object

let no = { number1: 1, number2: 2, number3: 3, number4: 4, number5: 5 };
for (let ali in no) {
  console.log(`for..in example ${ali} is ${no[ali]}`);
}

//Controlling loops
// 1. break - exits the loop completely
// 2. continue - skip the current iteratio and moves to the next one

for (let i = 1; i <= 10; i++) {
  if (i === 2) continue;
  if (i === 6) break;
  console.log(`Break and Continue exmaple ${i}`);
}
