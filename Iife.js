// IIFE (Immediately Invoked Function Expression) in JavaScript
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that executes immediately after being defined. 
// It is useful for creating a local scope and avoiding global scope pollution.

// Syntax of IIFE
// An IIFE is written using the following syntax:

// js:

// (function () {
//     console.log("IIFE is executed!");
// })();

// How It Works?
// The function is wrapped in parentheses (), turning it into an expression.
// The () at the end immediately invokes the function.

// Why Use IIFE?
// 1. Avoid Global Variable Pollution
// IIFE creates a private scope, preventing conflicts with global variables.

// (function () {
//     var message = "Hello, World!";
//     console.log(message);
// })();
// console.log(message); // ❌ Error: message is not defined

// 2. Encapsulation
// Useful in modules or self-contained code to prevent interference with other scripts.

// let counter = (function () {
//     let count = 0; // Private variable
//     return {
//         increment: function () { return ++count; },
//         decrement: function () { return --count; },
//     };
// })();
// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.count); // ❌ Undefined (count is private)

// 3. Execute Code Immediately
// IIFE is useful when you want to run some setup code right away.
// (function () {
//     console.log("Executed immediately!");
// })(); // Output: Executed immediately!

