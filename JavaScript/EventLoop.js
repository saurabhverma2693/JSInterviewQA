//  What is an Event Loop?
// An event loop is the core mechanism that waits for and dispatches events or messages in a program.
//  It's especially important in non-blocking, asynchronous systems, 
// allowing the program to continue running while waiting for operations like I/O to complete.

// How It Works (High-Level):
// Schedule Tasks: Code (like API calls, timers, file reads) is added to a queue.

// Wait for Completion: The event loop keeps checking if those tasks are done.

// Execute Callbacks: When a task is ready (like a fetch finishes), the callback function is run.



// Example:
// console.log("Start");

// setTimeout(() => {
//   console.log("Callback");
// }, 1000);

// console.log("End");


// Why Use It?
// Improves efficiency and performance (especially in I/O-heavy apps).

// Powers frameworks like Node.js, React, asyncio, Tornado, etc.

// Makes single-threaded systems capable of handling many concurrent tasks.