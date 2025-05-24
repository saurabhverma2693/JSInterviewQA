// Garbage collection in JavaScript is the process by which the JavaScript engine automatically reclaims memory 
// that is no longer in use, helping to prevent memory leaks and
//  improve performance. Here's a breakdown of how it works:

// 🧠 Basic Idea
// JavaScript automatically allocates memory when objects are created 
// and frees it when they are no longer needed — this is automatic memory management.

// 🔁 Reachability Concept
// Garbage collection is based on the concept of reachability.

// An object is reachable if it can be accessed in some way — for example, if it's:

// A global variable

// A local variable in a function that’s currently executing

// Referenced by another reachable object

// If no references to an object remain (i.e., it's unreachable), it’s eligible for garbage collection.

// 🧹 The Garbage Collection Process
// JavaScript engines (like V8, used in Chrome and Node.js) typically use mark-and-sweep:

// Mark: The GC starts from "roots" (like global variables and current function scope variables) and "marks" all reachable objects.

// Sweep: It goes through memory and sweeps away all unmarked (unreachable) objects, freeing up space.

// Example:
// function example() {
//     let obj = {
//       name: "ChatGPT"
//     };
//     // obj is reachable within this function
//   }
  
//   example();
//   // obj is now unreachable and will be garbage collected eventually


// 📌 Common GC Triggers
// Low memory conditions

// Allocation of large objects

// Periodically (timed intervals)

// ⚠️ Preventing Memory Leaks
// To help GC work effectively:

// Break references you no longer need (obj = null)

// Avoid global variables

// Clean up event listeners and intervals/timeouts


//.......................................................................................................................................

// 🗑️ What is Garbage Collection?
// Garbage Collection is the process of automatically freeing memory that is no longer in use, so your application doesn't run out of memory.

// In JavaScript, you don’t manually allocate or free memory. The JavaScript engine (like V8 in Chrome/Node.js) does it for you.

// 🧠 How It Works (Conceptually)
// 🔗 Step 1: You create objects, arrays, functions
// js
// Copy
// Edit
// let user = { name: 'Alice' };
// This user object is stored in memory.

// As long as you reference it (via a variable like user), it's active.

// ❌ Step 2: You stop referencing it
// js
// Copy
// Edit
// user = null;
// Now there’s no reference to the object.

// The garbage collector knows it’s no longer needed.

// 🧹 Step 3: GC removes it from memory
// 📘 Common GC Algorithm: Mark-and-Sweep
// Mark phase: The engine "marks" all objects that are reachable (still in use).

// Sweep phase: Everything not marked is considered garbage and is deleted.

// Reachability = the object can be accessed from the root (window or global) through variables, closures, etc.

// ⚠️ Memory Leaks in JavaScript (Even with GC)
// GC is automatic, but you can still have memory leaks, such as:

// Global variables not cleared

// Closures that hold onto unused objects

// Detached DOM nodes (in browsers)

// Event listeners not removed

// Example of a leak:

// js
// Copy
// Edit
// let cache = {};
// function rememberData(data) {
//   cache[data.id] = data;
// }
// // If you never remove from cache, memory grows forever.
// ✅ Best Practices
// Set unused objects to null when you're done

// Avoid global variables

// Clean up intervals, timeouts, and event listeners

// Use tools like Chrome DevTools → Memory tab → Heap snapshot

// 🧪 Summary
// Concept	Explanation
// What is GC?	Automatic memory cleanup
// Who does it?	JavaScript engine (e.g., V8)
// When?	When objects become unreachable
// Common algorithm	Mark-and-sweep
// Can leaks still happen?	Yes — if you keep references around

