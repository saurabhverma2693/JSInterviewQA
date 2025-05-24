
// 🕰️ Asynchronous Programming
// Definition:
// Tasks are started and the program continues running without waiting for the task to finish. When the task finishes, a callback, promise, or event triggers to handle the result.

// Key idea:
// Don't block the main flow — you can start tasks and handle their results later.

// Example in Node.js:
// Reading a file asynchronously:

// js
// Copy
// Edit
// fs.readFile('file.txt', (err, data) => {
//   if (err) throw err;
//   console.log('File content:', data.toString());
// });
// console.log('Reading file...');
// Output:

// arduino
// Copy
// Edit
// Reading file...
// File content: ...
// Here, readFile starts, Node moves on, and when done, the callback runs.

// Runs on: Usually single thread (like Node.js event loop)

// ⚙️ Parallel Programming
// Definition:
// Multiple tasks actually run at the same time, usually on multiple CPU cores or threads.

// Key idea:
// Real simultaneous execution.

// Example:
// Running two CPU-intensive calculations on different CPU cores using worker threads or multiple processes.

// Runs on: Multiple threads or multiple processes (multi-core systems)

// 🔑 Summary Table
// Feature	Asynchronous Programming	Parallel Programming
// Execution	Tasks start, main thread continues	Multiple tasks run simultaneously
// Threads	Usually single-threaded	Multiple threads/processes
// Blocking	Non-blocking (waits via callbacks)	Tasks truly run in parallel
// Use case	I/O operations, network requests	CPU-intensive tasks, heavy computation
// Example in Node.js	fs.readFile(), event loop	worker_threads, child_process

// 🧠 In Node.js Context:
// Asynchronous = non-blocking I/O using the event loop (e.g., HTTP requests, database queries)

// Parallel = running CPU-heavy tasks on multiple threads or processes (e.g., image processing with worker_threads)
