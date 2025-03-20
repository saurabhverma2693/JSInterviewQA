// Spread Operator (...) in JavaScript :
// The spread operator (...) in JavaScript allows elements of an array, object, 
// or iterable to be expanded or unpacked. It is commonly used for
//  copying, merging, and passing values as function arguments.

// 1. Spreading in Arrays
// Example: Copying an Array

// const numbers = [1, 2, 3];
// const copiedNumbers = [...numbers];

// console.log(copiedNumbers); // Output: [1, 2, 3]
// Why use spread? Unlike direct assignment (=), this creates a new independent array.

// Example: Merging Arrays:

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const mergedArray = [...arr1, ...arr2];

// console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// Example: Adding Elements in the Middle :
// const numbers1 = [1, 2, 3];
// const numbers2 = [4, 5, 6];

// const newArray = [...numbers1, 100, ...numbers2];
// console.log(newArray); // Output: [1, 2, 3, 100, 4, 5, 6]

//..........................................................................................................................

// 2. Spreading in Objects
// Example: Copying an Object
// const person = { name: "Alice", age: 25 };
// const copiedPerson = { ...person };

// console.log(copiedPerson); // Output: { name: "Alice", age: 25 }
// Why use spread? It creates a new object reference, avoiding unintended modifications.

// Example: Merging Objects:

// const user = { name: "Alice" };
// const details = { age: 25, country: "USA" };

// const mergedUser = { ...user, ...details };
// console.log(mergedUser); // Output: { name: "Alice", age: 25, country: "USA" }

