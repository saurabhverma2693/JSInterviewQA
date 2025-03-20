// In JavaScript, strings are immutable, meaning that once a string is created, its value cannot be changed. If you modify a string, a new string is created instead of altering the existing one. Here’s why:

// 1. Memory Efficiency
// Strings are stored in memory as immutable values to allow efficient memory usage and caching.
// If strings were mutable, every change would require updating multiple references, increasing memory overhead.
// 2. Security & Predictability
// Many built-in methods (slice(), toUpperCase(), concat(), etc.)
//  return new strings rather 
// than modifying the original.
// This prevents unintended side effects when multiple variables reference the same string.

// 3. Performance Optimization
// JavaScript engines optimize string operations using interning,
//  which allows reusing the same string in memory rather than creating duplicates.
// If strings were mutable, this optimization wouldn’t be possible.

// 4. Encapsulation & Simplicity
// Keeping strings immutable ensures consistent behavior
// and avoids bugs that
// arise from modifying shared values.
// Example:
// js
// let str = "Hello";
// str[0] = "J";  // No effect, string remains the same
// console.log(str); // Output: "Hello"

// let newStr = str.replace("H", "J"); 
// console.log(newStr); // Output: "Jello"
// Here, "Hello" remains unchanged, and a new string "Jello" is created.

// Conclusion
// String immutability in JavaScript enhances performance, 
// security, and predictability, making code easier to maintain and optimize.







