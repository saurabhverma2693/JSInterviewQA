// What is a session?
// A session stores data about a user on the server.

// The client keeps a session ID in a cookie.

// On each request, Express uses the session ID to fetch the stored session data.

// How to implement sessions in Express.js?
// Use the express-session middleware.
// Step-by-step:
// Install express-session:

// bash
// Copy
// Edit
// npm install express-session
// Basic setup:

// js
// Copy
// Edit
// const express = require('express');
// const session = require('express-session');

// const app = express();

// app.use(session({
//   secret: 'your-secret-key', // change to a strong secret
//   resave: false,             // don't save session if unmodified
//   saveUninitialized: false,  // don't create session until something stored
//   cookie: { secure: false }  // set true if using HTTPS
// }));

// app.get('/', (req, res) => {
//   if (req.session.views) {
//     req.session.views++;
//     res.send(`Number of views: ${req.session.views}`);
//   } else {
//     req.session.views = 1;
//     res.send('Welcome! This is your first visit.');
//   }
// });

// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });
// Explanation of key options:
// Option	Description
// secret	Used to sign the session ID cookie (must be secure)
// resave	Forces session to be saved back to store even if not modified
// saveUninitialized	Saves uninitialized sessions (useful for login)
// cookie.secure	Set true if using HTTPS, ensures cookies sent securely

// Notes:
// By default, sessions are stored in memory (not recommended for production).

// For production, use a session store like Redis, MongoDB, or a database.

// Example with Redis store:
// bash
// Copy
// Edit
// npm install connect-redis redis
// js
// Copy
// Edit
// const RedisStore = require('connect-redis')(session);
// const redisClient = require('redis').createClient();

// app.use(session({
//   store: new RedisStore({ client: redisClient }),
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: false
// }));

