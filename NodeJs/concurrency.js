// ⚙️ How Node.js Handles Concurrency:
// Node.js uses:

// The Event Loop

// Non-blocking I/O

// The libuv Thread Pool

// Asynchronous APIs & Callbacks/Promises

// Together, they allow Node.js to handle thousands of concurrent users with just one thread.

// 🔁 1. Event Loop – The Heart of Concurrency
// The event loop constantly checks for events (like incoming HTTP requests, finished DB calls, etc.) and dispatches them for handling.

// js
// Copy
// Edit
// console.log("Start");
// setTimeout(() => console.log("Async task"), 0);
// console.log("End");
// Output:

// sql
// Copy
// Edit
// Start
// End
// Async task
// ⚡ 2. Non-blocking I/O
// Instead of waiting for a file read or DB query to finish, Node.js starts the task and moves on.

// Example:

// js
// Copy
// Edit
// fs.readFile('file.txt', (err, data) => {
//   // This happens later
// });
// Node uses the OS to handle the file, and continues processing other requests.

// 🧵 3. libuv Thread Pool – Behind the Scenes
// Node.js itself is single-threaded, but libuv (a C++ library used by Node) manages a thread pool for expensive I/O tasks.

// Tasks like:

// File system access

// DNS lookups

// Compression

// Crypto functions

// ...are sent to this thread pool and processed in parallel.

// 🤹 4. Concurrency in Action: HTTP Server Example
// js
// Copy
// Edit
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello!');
// });

// app.listen(3000);
// Node can handle thousands of requests per second.

// Each request is handled asynchronously — no need to spawn a new thread for each one (like in Java or PHP).

// 💥 What if there’s CPU-heavy code?
// Node struggles with CPU-bound tasks (like image resizing, video encoding), because:

// They block the event loop.

// While the CPU task runs, other users wait.

// ✅ Solution:

// Use worker_threads or spawn a child_process

// Offload heavy work to a queue system or microservice

// 🧪 Summary Table
// Feature	Role in Concurrency
// Event Loop	Controls async flow
// Non-blocking I/O	Allows other requests to continue
// libuv thread pool	Handles I/O-heavy tasks in parallel
// Async APIs	Let you "wait" without blocking
// Worker Threads	For CPU-heavy parallel tasks

// 🔄 Node.js Concurrency = Efficient, Not Parallel
// Myth	Reality
// "Node handles tasks in parallel"	❌ No — Node handles them asynchronously
// "Node uses one thread only"	✅ For JavaScript, yes — but uses threads via libuv


