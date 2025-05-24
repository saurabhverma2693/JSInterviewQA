// A callback is a function that is passed as an argument to another function and
//  is executed after the completion of that function.
//   Callbacks are commonly used in asynchronous programming,
//  such as handling API calls, file operations, or timers.

// Example 1: Basic Callback Function

// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// greet("Alice", sayGoodbye);

// Output: Hello, Alice
// Goodbye!
// sayGoodbye is passed as a callback and executed after greet.

// Example 3: Callback in Asynchronous Function (Simulating API Call)

// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Data fetched");
//         callback("Fetched Data");
//     }, 2000);
// }

// function processData(data) {
//     console.log("Processing:", data);
// }

// fetchData(processData);




// Callback Hell (Problem with Callbacks)
// When multiple callbacks are nested inside each other, it creates unreadable code (Callback Hell).

// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step 1 completed");
//         callback();
//     }, 1000);
// }

// function step2(callback) {
//     setTimeout(() => {
//         console.log("Step 2 completed");
//         callback();
//     }, 1000);
// }

// function step3(callback) {
//     setTimeout(() => {
//         console.log("Step 3 completed");
//         callback();
//     }, 1000);
// }

// // Nested callbacks (Callback Hell)
// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("All steps completed!");
//         });
//     });
// });
