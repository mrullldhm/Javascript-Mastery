// Debugging - the process of finding and fixing error/bug
// Error - runtime or syntax issue that prevents the program from running properly
// Bug - logical flaw that causes the program to do the wrong thing, even though it runs

// 1. Using console.log()

// 2. Browser Dveloper Tools (DevTools)
// Right Click > Inspect or Ctrl+Shift+I

// 3. Using Breakpoints

// 4. Debugger Statement
function calculateTotal(price, tax) {
  debugger; // Triggers pause in DevTools
  return price + tax;
}

// 5. Other Debugging Tools
// | Tool                | Description                                |
// | ------------------- | ------------------------------------------ |
// | **console.error()** | Logs an error (in red)                     |
// | **console.warn()**  | Logs a warning                             |
// | **console.table()** | Neatly logs objects/arrays in table format |
// | **console.dir()**   | Logs DOM elements as objects               |
// | **network tab**     | Inspect API requests and responses         |
