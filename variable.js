// Variable is like a container that store a value so we can use it later.

// There are 3 ways to declare variable
// 1. var (global-scope, reassignable) - avoid
// 2. let (block-scope, reaassignable) - if need reassign
// 3. const (block-scope, reassignable) - default use

//undefined - variable declared but not initialized
//ReferenceError - variable isn't declared at all

//Type node variable.js in terminal for result

// Example 1
console.log("Example 1 ", a);
var a = 10;

// Example 2
{
  let x = 5;
  const y = 10;
  var z = 15;
}
console.log("Example 2 ", typeof x, typeof y, typeof z);

//Example 3
const obj = { name: "JS" };
obj.name = "Javascript"

console.log("Example 3 ", obj);