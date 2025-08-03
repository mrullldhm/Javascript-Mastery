// Error Handling is the process of detecting errors, gracefully responding to it and preventing the program from crashing

// 1. Common Types of Errors
// | Error Type              | Description                                                                   |
// | ----------------------- | ----------------------------------------------------------------------------- |
// | `SyntaxError`           | Invalid code structure (e.g., missing `{`)                                    |
// | `ReferenceError`        | Using a variable that doesn't exist                                           |
// | `TypeError`             | Performing invalid operations (e.g., calling something that’s not a function) |
// | `RangeError`            | Value out of range (e.g., stack overflow)                                     |
// | `EvalError`, `URIError` | Rare, special-case errors                                                     |

// 2. Try...Catch Block
try {
  let result = riskyOperation();
  console.log(result);
} catch (error){
  console.error("Something went weong", error.message);
}

// 3. Throwing Custom Errors
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
    divide (4,0)
} catch (error) {
    console.log(error.mesage)
}

// 4. Error Object - inside catch, the errir ibject contains
// | Property  | Description                       |
// | --------- | --------------------------------- |
// | `name`    | Error type (`TypeError`, etc.)    |
// | `message` | Error message string              |
// | `stack`   | Call stack (useful for debugging) |

