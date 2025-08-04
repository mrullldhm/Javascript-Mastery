// Asynchronous programming lets the code run without waiting for long task
// Long task like API calls, file reads or timers to finish

// Core Concept
// 1. Callbacks - pass a function (callback) that runs when the task is done
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 2000); // 2 seconds delay
}

fetchData((result) => {
  console.log(result);
});

console.log("After fetchData");

// 2. Promises - a cleaner way to deal with async code
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

fetchData().then((data) => {
  console.log(data);
});

console.log("After fetchData");

// 3. Async/Await
async function loadData() {
  const data = await fetchData();
  console.log(data);
}

loadData();
console.log("After loadData");
