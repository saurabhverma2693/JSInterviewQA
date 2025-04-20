
// Great question! map, filter, and reduce are three powerful array methods in JavaScript — they’re essential tools in any JS developer’s toolkit. Let’s break them down with clear examples:

// 🗺️ map()
// 👉 What it does:
// Creates a new array by transforming each element in the original array.

// 📌 Use case:
// Apply a function to every item (e.g. double numbers, extract names, format dates)

// 💡 Example:
// javascript
// Copy
// Edit
// const numbers = [1, 2, 3, 4];

// const doubled = numbers.map(num => num * 2);

// console.log(doubled); // [2, 4, 6, 8]
// 🚿 filter()
// 👉 What it does:
// Creates a new array with only the elements that pass a condition.

// 📌 Use case:
// Filter out items based on criteria (e.g. even numbers, logged-in users)

// 💡 Example:
// javascript
// Copy
// Edit
// const numbers = [1, 2, 3, 4];

// const evens = numbers.filter(num => num % 2 === 0);

// console.log(evens); // [2, 4]
// ➕ reduce()
// 👉 What it does:
// Reduces an array to a single value by applying a function sequentially.

// 📌 Use case:
// Summing values, building objects, flattening arrays

// 💡 Example: Sum
// javascript
// Copy
// Edit
// const numbers = [1, 2, 3, 4];

// const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// console.log(sum); // 10
// 📊 Side-by-Side Comparison

// Feature	map()	filter()	reduce()
// Returns	New array	New array	Single value (any type)
// Purpose	Transform data	Select data	Combine data
// Original size	Same as input	≤ input size	Always 1 value
// Mutates?	❌ No	❌ No	❌ No

// Example using all three:
// javascript
// Copy
// Edit
// const numbers = [1, 2, 3, 4, 5, 6];

// const result = numbers
//   .filter(num => num % 2 === 0)         // [2, 4, 6]
//   .map(num => num * 10)                 // [20, 40, 60]
//   .reduce((sum, num) => sum + num, 0);  // 120

// console.log(result);

