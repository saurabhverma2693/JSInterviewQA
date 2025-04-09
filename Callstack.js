// First: What’s a Call Stack?
// The call stack is a data structure used by the JavaScript engine to keep track of function calls.
//  When a function is called, it’s added (pushed) to the stack.
//  When the function finishes, it’s removed (popped).

//  # Synchronous Call Stack Example:

//  function greet() {
//     console.log("Hello");
// }

// function start() {
//     greet();
//     console.log("Start done");
// }

// start();


// Call Stack Steps (Synchronous):
// start() is called → added to the stack

// Inside start(), greet() is called → added to the stack

// greet() logs "Hello" and returns → popped off

// console.log("Start done") runs

// start() finishes → popped off

//...............................................................................................................................................


// Asynchronous Call Stack Example (with setTimeout)

// function sayHi() {
//     console.log("Hi");
// }

// setTimeout(function () {
//     console.log("Inside timeout");
// }, 2000);

// sayHi();


// What Happens Under the Hood?
// setTimeout() is called → JS sends the callback to the Web APIs (browser environment).

// sayHi() is called and logs "Hi".

// After 2 seconds, the browser moves the timeout callback to the callback queue.

// The event loop checks if the call stack is empty.

// Once it’s empty, it pushes the timeout callback to the stack and runs it.

//..................................................................................................................................................