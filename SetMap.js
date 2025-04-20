

// In JavaScript, Map and Set are both built-in data structures introduced in ES6 (ECMAScript 2015). They are used to store collections of data,
//  but they have different use cases and characteristics.

// 🔷 Map – Key-Value Pairs
// A Map is a collection of key-value pairs where keys can be of any type (objects, functions, primitives, etc.).

// ✅ Key Features:
// Maintains insertion order.

// Keys can be any type, not just strings.

// Has better performance for frequent additions/removals of key-value pairs.

// Example :

// const myMap = new Map();

// // Add items
// myMap.set('name', 'Alice');
// myMap.set(42, 'Answer');
// myMap.set(true, 'Yes');

// // Get item
// console.log(myMap.get('name')); // Alice

// // Check existence
// console.log(myMap.has(42)); // true

// // Delete item
// myMap.delete(true);

// // Iterate over Map
// for (const [key, value] of myMap) {
//   console.log(`${key}: ${value}`);
// }

// //..........................................................................................................................


// 🔶 Set – Unique Values
// A Set is a collection of unique values. It doesn't allow duplicates and only stores values (no keys).

// ✅ Key Features:
// Maintains insertion order.

// Automatically removes duplicates.

// Useful for filtering duplicates or quick existence checks.

// 🧪 Example:

// const mySet = new Set();

// // Add values
// mySet.add(1);
// mySet.add(2);
// mySet.add(2); // Duplicate, will be ignored

// console.log(mySet.has(1)); // true

// // Delete a value
// mySet.delete(2);

// // Iterate over Set
// for (const value of mySet) {
//   console.log(value);
// }
