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