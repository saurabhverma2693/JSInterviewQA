//Var:
//Var is global scoped.
// Var is re-declared & Updated.
//Example:
// function example() {
//     var x = 10;
//     if (true) {
//         var x = 20;  // Same variable, value updated
//         console.log(x); // Output: 20
//     }
//     console.log(x); // Output: 20 (same variable)
// }

// example();


// Let :
// Let is block scoped 
// let is not re-declared but updated
//Example:
// function example() {
//     let x = 10;
//     if (true) {
//         let x = 20;  // Different variable (block-scoped)
//         console.log(x); // Output: 20
//     }
//     console.log(x); // Output: 10 (original value)
// }

// example();


// Const:
// const is block scoped.
// const is neither re-declared nor re-updated
//Example:
// const person = { name: "Alice" };
// person.name = "Bob";  // Allowed (modifying properties)
// console.log(person.name); // Output: Bob

// person = { name: "Charlie" }; // Error: Assignment to constant variable

