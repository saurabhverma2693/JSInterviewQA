// 🧩 What is Middleware in Express.js?
// Middleware is a function that has access to the request object (req), response (res), and the next() function in the application's request-response cycle.

// 📜 Syntax:
// function middleware(req, res, next) {
//   // Do something with req or res
//   next(); // Pass control to the next middleware
// }

// In Express:

// app.use(middleware); // Apply middleware globally
// 🔄 How It Works
// When a request comes in:

// It passes through a chain of middleware functions.

// Each middleware can:

// Modify the request (req) or response (res)

// End the request-response cycle

// Call next() to move to the next middleware

// 🧠 Think of Middleware as:
// A pipeline where each step can inspect, modify, or respond to the request.

// 🔧 Common Use Cases for Middleware:
// Use Case	Example
// Logging	Log request URLs
// Authentication	Check if user is logged in
// Parsing	Parse JSON or form data
// Validation	Validate incoming data
// Error handling	Catch and respond to errors gracefully

// 🧪 Examples:
// 1. Logging Middleware
// js
// Copy
// Edit
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });
// 2. Built-in Middleware to Parse JSON
// js
// Copy
// Edit
// app.use(express.json());
// 3. Custom Middleware for Auth
// js
// Copy
// Edit
// function authMiddleware(req, res, next) {
//   if (req.headers.authorization === 'secret') {
//     next();
//   } else {
//     res.status(401).send('Unauthorized');
//   }
// }

// app.use(authMiddleware); // Apply globally
// 4. Error Handling Middleware
// js
// Copy
// Edit
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });
// 🧬 Middleware Types
// Type	Description
// Application-level	Applied to all or specific routes
// Router-level	Applied only to a specific router instance
// Built-in	express.json(), express.static()
// Third-party	morgan (logging), cors, helmet, etc.
//.........................................................................................................................................

// Great question! In Express.js, the order of middleware is very important because middleware functions are executed in the order they are defined.

// 🔄 Middleware Order = Execution Order
// When a request comes in:

// Express processes middleware top-down, one by one.

// If a middleware doesn’t call next(), the request stops there — no further middleware or routes are called.

// So, the placement of middleware determines what gets executed and when.
// 🧠 Think of it like a pipeline:
// Request --> Middleware 1 --> Middleware 2 --> Route Handler --> Response
// If any middleware doesn’t call next(), the flow ends early.

// 🧪 Example: Middleware Order in Action
// const express = require('express');
// const app = express();

// // Middleware A
// app.use((req, res, next) => {
//   console.log('A: First middleware');
//   next();
// });

// // Middleware B
// app.use((req, res, next) => {
//   console.log('B: Second middleware');
//   next();
// });

// // Route
// app.get('/', (req, res) => {
//   console.log('C: Route handler');
//   res.send('Hello!');
// });

// Output
// A: First middleware
// B: Second middleware
// C: Route handler


// ❌ What if next() is not called?
// js
// Copy
// Edit
// app.use((req, res, next) => {
//   console.log('Stopping here');
//   res.send('Blocked by middleware');
//   // No next()
// });

// 🛠 Best Practices
// ✅ Always put body parsers (express.json(), express.urlencoded()) near the top.

// ✅ Place auth and validation middleware before protected routes.

// ✅ Place error-handling middleware after all routes.

// ✅ Be careful when sending responses inside middleware — it stops the chain.