// Currying in JavaScript is a functional programming technique where a function
//  with multiple arguments is transformed into a series of functions,
//  each taking a single argument.

// Example:
// Here's a regular function:
// function add(a, b) {
//     return a + b;
//   }
//   console.log(add(2, 3)); // 5

//   Here's the curried version:
//   function curriedAdd(a) {
//     return function(b) {
//       return a + b;
//     };
//   }
  
//   console.log(curriedAdd(2)(3)); // 5

//   Why Use Currying?
// Reusability: You can create specialized functions from more general ones.

// Function composition: Easier to compose small functions into larger ones.

// Partial application: Pre-fill arguments incrementally.

// With Arrow Functions:
// const curriedAdd = a => b => a + b;
// console.log(curriedAdd(2)(3)); // 5

