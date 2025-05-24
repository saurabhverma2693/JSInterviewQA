// Null Coalescing (??) in JavaScript
// The nullish coalescing operator (??) is used to provide a
//  default value when dealing with null or undefined.

// let result = value1 ?? value2;
// If value1 is not null or undefined, result will be value1.
// If value1 is null or undefined, result will be value2.

// Example:
// let name = null;
// let defaultName = "Guest";

// let userName = name ?? defaultName;
// console.log(userName); // Output: "Guest"

// Difference Between ?? and ||
// The || (OR) operator treats falsy values (0, false, "") as false.
// The ?? operator only checks for null and undefined.

// Example:
// let count = 0;
// console.log(count || 10); // Output: 10 (0 is falsy)
// console.log(count ?? 10); // Output: 0 (0 is not null or undefined)

// When to Use ???
// When you want to provide a default value only if the variable is null or undefined.
// When dealing with optional values in APIs or databases.
