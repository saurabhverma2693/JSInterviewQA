// JavaScript's concurrency model is based on an event loop,
//  enabling it to handle multiple tasks seemingly concurrently,
//  even though it's fundamentally single-threaded, 
//  by using asynchronous operations and non-blocking I/O.

// Here's a more detailed explanation:

// Single-Threaded Nature:
// JavaScript is designed to run on a single thread,
//  meaning it can only execute one operation at a time.

// Event Loop:
// The event loop is a mechanism that allows JavaScript to
//  handle multiple tasks  without blocking the main thread.


// Asynchronous Operations:
// JavaScript uses asynchronous operations (like network requests, timers, and I/O)
//  to perform tasks in the background, preventing the main thread from being blocked.

// Callback Queue/Microtask Queue:
// When asynchronous operations complete, their callbacks are placed in a
//  callback queue (macrotask queue) or microtask queue, depending on the type of task.

// Event Loop Execution:
// The event loop continuously checks the callback queue and microtask queue 
// and executes the callbacks when it's safe to do so.

// Non-blocking I/O:
// The event loop and asynchronous operations enable JavaScript to
//  perform non-blocking I/O operations, meaning it doesn't wait
//   for an I/O operation to complete before moving on to the next task.

// Concurrency vs. Parallelism:
// While JavaScript's concurrency model allows for handling multiple tasks
//  seemingly at the same time, it doesn't guarantee true parallelism 
//  (running multiple tasks simultaneously).

// Web Workers:
// For tasks that require true parallelism, JavaScript provides Web Workers,
//  which allow you to run code in separate threads.

// Promises and async/await:
// JavaScript also uses Promises and async/await to simplify asynchronous code and 
// make it easier to manage asynchronous operations