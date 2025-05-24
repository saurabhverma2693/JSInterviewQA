// Express.js is a minimal and flexible Node.js web application framework that makes it easier to build web servers and APIs.

// 📦 What is Express.js?
// It’s a framework built on top of Node.js’s http module.

// It simplifies common tasks like:

// Routing (handling different URLs)

// Handling requests and responses

// Middleware (processing things like JSON, cookies, auth)

// Serving static files

// Building RESTful APIs

// 💡 Why use Express.js instead of raw Node.js?
// Without Express:

// js
// Copy
// Edit
// // Basic Node.js server
// const http = require('http');
// http.createServer((req, res) => {
//   if (req.url === '/hello') {
//     res.end('Hello World');
//   }
// }).listen(3000);
// With Express:

// js
// Copy
// Edit
// // Express.js version
// const express = require('express');
// const app = express();

// app.get('/hello', (req, res) => {
//   res.send('Hello World');
// });

// app.listen(3000);
// ✔️ Cleaner
// ✔️ Easier to manage
// ✔️ Built-in helpers like req.body, res.send, etc.

// 🔧 Key Features of Express.js:
// Feature	Description
// Routing	Define URL paths and handle GET, POST, PUT, DELETE requests easily
// Middleware	Functions that run before the request reaches your route (used for logging, parsing, auth, etc.)
// Template Engines	Use Pug, EJS, Handlebars to render dynamic HTML
// Static File Serving	Serve images, CSS, JS directly
// REST API support	Perfect for building APIs used by frontend apps or mobile clients

// 🧪 Simple Example:
// js
// Copy
// Edit
// const express = require('express');
// const app = express();

// // Middleware to parse JSON
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Welcome to Express!');
// });

// app.post('/data', (req, res) => {
//   console.log(req.body); // JSON body
//   res.send('Data received');
// });

// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });
// 🚀 Who uses Express.js?
// Uber

// IBM

// Accenture

// FreeCodeCamp

// Backend for many MERN stack applications (MongoDB, Express, React, Node)


