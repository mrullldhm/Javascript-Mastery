// Module is a file that contains reusable code (functions, variable, clasee, etc)

// Types of Module System
// 1. CommonJS (CJS)
// math.js
function add(a, b) {
  return a + b;
}
module.exports = { add };
// app.js
const math = require('./math');
console.log(math.add(2, 3)); // 5

// 2. ES Modules (ESM)
// math.js
export function add(a, b) {
  return a + b;
}
// app.js
import { add } from './math.js';
console.log(add(2, 3)); // 5
