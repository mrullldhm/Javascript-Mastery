// Scope refers to where variables can be accessed in our code

// Type of Scope
// 1. Global scope - variables declared outside any function or b;ocl
let nama = `Amirul`;
function call() {
  console.log(`Hello ${nama}`);
}
call();
// 2. Function scope - variables declared inside a function are only available within that function
function hai() {
  let guest = "Adham";
  console.log(`Hello ${guest}`);
}
hai();
// 3. Block scope - variables declared inside {} (if, loops, etc) are only accessible inside that block
if (nama === "Amirul") {
  let attendance = `hadir`
  const place = "ke sekolah";
  console.log(`${nama} ${attendance} ${place}`)
}