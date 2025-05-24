// 🧺 WeakSet
// ✅ What it is:
// A WeakSet is a collection of objects only (no primitives) where:

// Each object is unique

// All objects are weakly held, like in WeakMap

// 📌 Use case:
// Tracking objects without preventing garbage collection — e.g., remembering whether a user has visited a page.

// 💡 Example:
// const visitedUsers = new WeakSet();

// let user = { name: "Bob" };

// visitedUsers.add(user);

// console.log(visitedUsers.has(user)); // true

// user = null; // The object is now eligible for GC

// 🚫 Limitations:
// No size property

// Not iterable

// Only add, has, and delete methods