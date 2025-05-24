// 🍪 What Are Cookies?
// Cookies are small pieces of data stored on the client (browser) and sent back to the server with every request.

// Common uses:

// Tracking logged-in users (session IDs)

// User preferences (dark mode, language)

// Analytics

// 🔹 1. Setting & Reading Cookies Without Express
// Using only http module:

// js
// Copy
// Edit
// const http = require('http');

// http.createServer((req, res) => {
//   // Reading cookies
//   const cookies = req.headers.cookie;
//   console.log('Cookies:', cookies);

//   // Setting cookies
//   res.setHeader('Set-Cookie', 'user=John; HttpOnly');
//   res.end('Cookie set!');
// }).listen(3000);
// 🔸 2. Using Cookies in Express.js
// ✅ Install cookie parser:
// bash
// Copy
// Edit
// npm install cookie-parser
// 🛠️ Setup:
// js
// Copy
// Edit
// const express = require('express');
// const cookieParser = require('cookie-parser');

// const app = express();
// app.use(cookieParser()); // middleware to read cookies

// // Set a cookie
// app.get('/set', (req, res) => {
//   res.cookie('user', 'Alice', { httpOnly: true, maxAge: 60000 });
//   res.send('Cookie set!');
// });

// // Read a cookie
// app.get('/get', (req, res) => {
//   const user = req.cookies.user;
//   res.send(`User: ${user}`);
// });

// // Clear a cookie
// app.get('/clear', (req, res) => {
//   res.clearCookie('user');
//   res.send('Cookie cleared!');
// });

// app.listen(3000);
// ⚙️ Cookie Options (when setting cookies)
// Option	Description
// httpOnly	Prevents JS access via document.cookie
// secure	Sends cookie only over HTTPS
// maxAge	Expiration in milliseconds
// expires	Absolute expiration date
// path	URL path for which cookie is valid
// sameSite	CSRF protection (Strict, Lax, None)

// ✅ Summary
// Task	Without Express	With Express + cookie-parser
// Set Cookie	res.setHeader()	res.cookie()
// Read Cookie	req.headers.cookie	req.cookies
// Clear Cookie	Manually	res.clearCookie()
