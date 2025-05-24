// 🧠 What Is Browser Memory?
// In JavaScript, browser memory refers to the RAM that your web application uses in the browser. This includes:

// Memory Type	What It Stores
// Heap	Objects, arrays, functions — all your JS runtime data
// Stack	Function calls, local variables, execution context
// DOM Objects	HTML elements and their associated events
// Buffers/Cache	Images, fonts, cached assets, compiled scripts, etc.

// 🔍 JavaScript Memory Usage in the Browser
// When you run a web app:

// JS code allocates memory for variables, arrays, and DOM elements.

// This memory remains until you remove references, at which point the Garbage Collector (GC) can clean it up.

// Example:

// js
// Copy
// Edit
// let arr = new Array(1000000); // Big array stored in memory
// arr = null; // Memory can now be freed by GC
// 📈 How to Inspect Browser Memory
// Use Chrome DevTools:

// Open DevTools (F12)

// Go to Memory tab

// Use:

// Heap Snapshot to find memory leaks

// Allocation instrumentation to track new memory

// Record Allocation Timeline to see memory usage over time

// 🧪 Common Causes of High Browser Memory Usage
// Problem	Example
// Memory leaks	Not removing event listeners or DOM elements
// Large DOM trees	Rendering thousands of elements
// Uncleared intervals/timers	setInterval() without clearInterval()
// Overuse of global variables	Data stays alive until page reload

// 🛠️ Best Practices to Manage Browser Memory
// Remove unused DOM elements (element.remove())

// Clear timers and intervals when not needed

// Remove event listeners on component unmount (especially in SPA frameworks like React)

// Avoid retaining large objects unnecessarily

// Use lazy loading for images/data

// 📦 Browser Memory vs Local Storage
// Feature	Browser Memory (RAM)	localStorage / sessionStorage
// Lifetime	Temporary, cleared on tab close	Persistent until manually cleared
// Access Speed	Very fast	Slower (but still quick)
// Capacity	Limited by RAM	~5–10MB per origin
// Use Case	Runtime logic, app state	Persisting user data across reloads

// ✅ Summary
// Browser memory = Temporary storage of JS data, DOM, cache, etc. during app execution

// Managed automatically by JavaScript’s Garbage Collector

// Monitor it using Chrome DevTools → Memory

// Prevent memory leaks with good cleanup practices


