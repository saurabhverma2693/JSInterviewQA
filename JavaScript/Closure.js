// Closures in JavaScript
// A closure in JavaScript is a function that "remembers" the variables from its lexical scope, even when it is executed outside that scope. This allows functions to maintain private data and encapsulation.

// Understanding Closures
// Closures are created when:

// A function is defined inside another function.
// The inner function remembers the variables of the outer function even after the outer function has finished execution.

// Example:
// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log(`Outer Variable: ${outerVariable}, Inner Variable: ${innerVariable}`);
//     };
// }


// function outer() {
//     let count = 0;
    
//     return function inner() {
//       count++;
//       console.log(count);
//     };
//   }
  
//   const counter = outer(); // outer() returns the inner function
//   counter(); // 1
//   counter(); // 2
//   counter(); // 3
  



// const closureFunction = outerFunction("Hello");
// closureFunction("World"); // Output: Outer Variable: Hello, Inner Variable: World

// Here, innerFunction still has access to outerVariable even after outerFunction has completed execution.

// Use Cases of Closures
// Data encapsulation (creating private variables)
// Event handling (preserving state)
// Partial application (pre-setting function parameters)
// Memoization (caching results)
// Maintaining state in async operations

