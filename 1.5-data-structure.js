// Data structue is a way of organizing and storing data.

//Type node data-structure.js in terminal for result
// 1. Object - key-value pairs (unordered)
let person = { name: "Amirul", age: "31 years old" };
console.log(person);
console.log("Object", person.age);

// 2. Array - ordered list of items (indexed)
let car = ["proton", "perodua", "honda", "toyota"];
console.log("Array", car[0]);
console.log("Array", car[1]);
console.log("Array", car[2]);
console.log("Array", car[3]);
console.log(...car)

// 3. Map
let city = new Map();
city.set("Kelantan", "Kota Bharu");
city.set("Perak", "Ipoh");
console.log(city.get("Kelantan"));
console.log(city.has("Kelantan"));
console.log(city.size);
city.delete("Perak");
console.log(city.size);
city.clear();
console.log(city.size);

// 4. Set - store uniques values (no duplicates)
let Proton = new Set(["X50", "X70", "S70"]);
console.log(Proton)
console.log(...Proton)
console.log(`Set list is ${[...Proton]}`);
