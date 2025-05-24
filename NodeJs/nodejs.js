//What is Node js?
// Node.js is an open-source, cross-platform runtime environment that allows you to run JavaScript code outside of a web browser—typically on a server.

// Here's a breakdown:
// ✅ What it is:
// Built on Google’s V8 JavaScript engine (the same engine that powers Chrome).

// Lets you use JavaScript on the server side, not just in the browser.

// Known for being fast, lightweight, and efficient, especially with I/O-heavy tasks.



// 🛠️ What you can do with Node.js:
// Build web servers and APIs

// Create real-time apps (like chat apps) with WebSockets

// Work with filesystems, databases, and more

// Build CLI tools

// Handle background jobs, automation, and scripting





// ⚡ Key Features:
// Feature	Description
// Non-blocking I/O	Handles many connections at once without waiting on one task to finish.
// Event-driven	Uses events and callbacks, which is great for scalability.
// Single-threaded	Uses one thread, but can handle thousands of connections using asynchronous code.
// NPM (Node Package Manager)	Comes with Node and gives access to over 1 million open-source packages.



// Basic HTTP server in Node.js
// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Hello from Node.js!');
// });

// server.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });


// 🚀 Who uses Node.js?
// Netflix

// LinkedIn

// PayPal

// Uber

// NASA

//...........................................................................................................................................


// 💡 Why Use Node.js?
// 1. JavaScript Everywhere
// With Node.js, you can use the same language (JavaScript) on both the client and server side.

// This simplifies development and allows for full-stack JavaScript (e.g., using React + Node.js).

// 2. Fast and Efficient
// Node.js uses the V8 engine, which compiles JavaScript to machine code.

// Its non-blocking I/O model makes it very fast for handling many requests at once, especially in real-time applications.

// 3. Handles Many Connections
// Ideal for building scalable network apps, like:

// Chat applications

// Online games

// APIs for mobile apps

// Real-time collaboration tools

// 4. Huge Ecosystem (NPM)
// Node.js has NPM, the largest open-source library ecosystem in the world.

// You can find libraries for authentication, file handling, databases, payments, image processing, and more.

// 5. Great for Microservices and APIs
// Lightweight and modular – perfect for building microservices and RESTful APIs.

// Works well with modern front-end frameworks (like React, Vue, Angular).

// 6. Cross-Platform Development
// Node.js is used to build desktop apps (Electron), mobile apps (React Native with Node backend), and server-side logic.

// 🧪 When Should You Use Node.js?
// ✅ Use Node.js when:

// You're building a real-time app (chat, notifications, gaming).

// You want a fast, scalable backend.

// You want a single language for both front-end and back-end.

// You’re building APIs or handling lots of I/O operations (file uploads, network calls, etc.).

// ❌ Avoid Node.js for:

// CPU-intensive tasks (e.g., heavy data processing, video rendering), as it's single-threaded by default.

//.........................................................................................................................................


// 🧵 Is Node.js Multithreaded?
// By default: ❌ Node.js is single-threaded.
// But that doesn’t mean it can’t handle multiple users or tasks at the same time.

// 🤔 So how does Node.js handle many users simultaneously?
// It uses something called the Event Loop and Non-blocking I/O.
// 🧠 Here's how it works:
// 🔁 The Event Loop
// Node.js has one main thread for running JavaScript code.

// When a task like reading a file or querying a database happens, Node doesn't wait.

// Instead, it sends the task to the OS or worker threads and moves on to the next thing.

// When the task is done, Node.js gets a signal (an event) and runs the callback for it.

// This is called asynchronous, non-blocking programming.

// 🧵 Under the Hood: Multithreading via Libuv
// Node.js uses a C++ library called libuv, which manages a thread pool in the background.

// This is used for:

// File system operations

// DNS lookups

// Compression

// Some crypto operations

// So while your JavaScript runs in one thread, expensive tasks run on separate threads behind the scenes.

