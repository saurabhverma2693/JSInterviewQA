// 🗺️ WeakMap
// ✅ What it is:
// A WeakMap is a collection of key-value pairs where:

// Keys must be objects

// Values can be anything

// Keys are weakly referenced (i.e., if there’s no other reference to the key object, it can be garbage collected)

// 🔐 Use case:
// Storing private data related to objects without creating memory leaks.

// 💡 Example:
// const wm = new WeakMap();

// let user = { name: "Alice" };

// wm.set(user, "some secret value");

// console.log(wm.get(user)); // "some secret value"

// user = null; // Now both the object and its associated data can be GC'ed

// 🚫 Limitations:
// No size property

// Not iterable (can’t loop through it)

// No clear() method