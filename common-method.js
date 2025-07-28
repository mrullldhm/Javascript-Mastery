// Common Javascript method

// 1. String method
// | Method          | Description                       | Example                                |
// | --------------- | --------------------------------- | -------------------------------------- |
// | `length`        | Returns string length             | `str.length` → `19`                    |
// | `trim()`        | Removes whitespace from both ends | `str.trim()` → `"Hello JavaScript!"`   |
// | `toLowerCase()` | Converts to lowercase             | `str.toLowerCase()`                    |
// | `toUpperCase()` | Converts to uppercase             | `str.toUpperCase()`                    |
// | `includes()`    | Checks if substring exists        | `str.includes("Java")` → `true`        |
// | `indexOf()`     | Returns index of first match      | `str.indexOf("J")` → `7`               |
// | `replace()`     | Replaces text                     | `str.replace("Java", "Type")`          |
// | `slice()`       | Extracts part of the string       | `str.slice(2, 7)` → `"Hello"`          |
// | `split()`       | Converts string to array          | `"a,b,c".split(",")` → `["a","b","c"]` |
// | `charAt()`      | Returns character at index        | `str.charAt(1)` → `" "`                |

// 2. Number method
// | Method               | Description                     | Example                       |
// | -------------------- | ------------------------------- | ----------------------------- |
// | `toFixed()`          | Rounds and formats as string    | `num.toFixed(2)` → `"3.14"`   |
// | `parseInt()`         | Converts string to integer      | `parseInt("10")` → `10`       |
// | `parseFloat()`       | Converts string to float        | `parseFloat("3.14")` → `3.14` |
// | `isNaN()`            | Checks if value is Not a Number | `isNaN("abc")` → `true`       |
// | `Number.isInteger()` | Checks if value is an integer   | `Number.isInteger(10)`        |

// 3. Array method
// | Method       | Description                       | Example                          |
// | ------------ | --------------------------------- | -------------------------------- |
// | `length`     | Number of elements                | `arr.length` → `5`               |
// | `push()`     | Add to end                        | `arr.push(6)` → `[1,2,3,4,5,6]`  |
// | `pop()`      | Remove from end                   | `arr.pop()` → `5`                |
// | `shift()`    | Remove from start                 | `arr.shift()` → `1`              |
// | `unshift()`  | Add to start                      | `arr.unshift(0)` → `[0,2,3,...]` |
// | `includes()` | Check if value exists             | `arr.includes(3)` → `true`       |
// | `indexOf()`  | Index of first match              | `arr.indexOf(4)` → `3`           |
// | `join()`     | Converts array to string          | `arr.join(",")`                  |
// | `slice()`    | Returns a new subarray            | `arr.slice(1, 3)` → `[2,3]`      |
// | `splice()`   | Add/remove from specific position | `arr.splice(2, 1)` → removes 3   |
// | `reverse()`  | Reverses the array                | `arr.reverse()`                  |

// IMPORTANT
// | Method      | Description                            | Example                              |
// | ----------- | -------------------------------------- | ------------------------------------ |
// | `map()`     | Transforms each element                | `nums.map(x => x * 2)` → `[2,4,6,8]` |
// | `filter()`  | Filters based on condition             | `nums.filter(x => x % 2 === 0)`      |
// | `reduce()`  | Reduces to a single value              | `nums.reduce((a, b) => a + b)`       |
// | `forEach()` | Runs function on each item (no return) | `nums.forEach(x => console.log(x))`  |
// | `find()`    | Returns first match                    | `nums.find(x => x > 2)` → `3`        |
// | `some()`    | Returns true if any element matches    | `nums.some(x => x > 3)` → `true`     |
// | `every()`   | Returns true if all elements match     | `nums.every(x => x < 10)` → `true`   |

// 4. Object Method
// | Method/Property    | Description                      | Example                                |
// | ------------------ | -------------------------------- | -------------------------------------- |
// | `Object.keys()`    | Returns array of keys            | `Object.keys(obj)` → `["name", "age"]` |
// | `Object.values()`  | Returns array of values          | `Object.values(obj)` → `["Adham", 22]` |
// | `Object.entries()` | Returns array of key-value pairs | `Object.entries(obj)`                  |
// | `hasOwnProperty()` | Checks if object has a key       | `obj.hasOwnProperty("name")`           |
// | `delete`           | Removes a property               | `delete obj.age`                       |
// | `Object.assign()`  | Clones or merges objects         | `Object.assign({}, obj)`               |
