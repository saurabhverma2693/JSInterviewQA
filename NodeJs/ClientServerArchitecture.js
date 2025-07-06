// CLIENT- SERVER ARCHITECTURE:

// 🖥️ Client-Server Architecture in Node.js
// The Client-Server Architecture is a model where:

// Client = Frontend (e.g., browser, mobile app) → sends requests

// Server = Backend (e.g., Node.js app) → processes those requests and sends back responses

// ⚙️ How It Works in Node.js
// The client sends an HTTP request (like GET/POST) to the Node.js server.

// The Node.js server receives the request, processes it (possibly queries a database), and sends back an HTTP response.

// The client receives the response and renders data to the user.

// 🛠️ Basic Node.js Client-Server Example (using Express)
// js
// Copy
// Edit
// // server.js
// const express = require('express');
// const app = express();
// const PORT = 3000;

// // Middleware to parse JSON request bodies
// app.use(express.json());

// // Sample route (GET request)
// app.get('/api/message', (req, res) => {
//   res.json({ message: 'Hello from the Node.js server!' });
// });

// // Sample route (POST request)
// app.post('/api/user', (req, res) => {
//   const userData = req.body;
//   // Imagine saving to DB here
//   res.status(201).json({ message: 'User created', user: userData });
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
// 🧑‍💻 Client-Side (example using fetch in browser or React):
// js
// Copy
// Edit
// // GET request
// fetch('http://localhost:3000/api/message')
//   .then(res => res.json())
//   .then(data => console.log(data));

// // POST request
// fetch('http://localhost:3000/api/user', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ name: 'Alice', age: 25 })
// })
// .then(res => res.json())
// .then(data => console.log(data));
// 📌 Summary:
// Client: Sends requests (GET, POST, etc.)

// Node.js Server: Handles routes, business logic, and responses

// Communication: Happens over HTTP using tools like fetch, axios, Postman, etc.

