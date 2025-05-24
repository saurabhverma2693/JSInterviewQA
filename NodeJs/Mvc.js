// Great question! MVC stands for Model–View–Controller — it’s a software design pattern used to structure applications, especially web apps.

// 🧠 MVC: The Big Picture
// Part	Role
// Model	Represents data and business logic
// View	Represents the UI (what the user sees)
// Controller	Handles input, updates the model or view

// 🧩 MVC Components Explained
// 1. Model 🗂️
// Manages data, database access, business logic.

// Doesn’t know about the UI.

// Example: a User model that handles data from MongoDB.

// js
// Copy
// Edit
// // models/User.js
// const mongoose = require('mongoose');
// const UserSchema = new mongoose.Schema({ name: String, email: String });
// module.exports = mongoose.model('User', UserSchema);
// 2. View 👁️
// Displays data to the user.

// Renders HTML or JSON.

// Can be a template file (e.g., EJS, Handlebars) or frontend (React/Vue).

// html
// Copy
// Edit
// <!-- views/profile.ejs -->
// <h1>Welcome <%= user.name %></h1>
// 3. Controller 🕹️
// Acts as a middleman.

// Receives user input (HTTP requests), interacts with the model, and updates the view.

// js
// Copy
// Edit
// // controllers/userController.js
// const User = require('../models/User');

// exports.getProfile = async (req, res) => {
//   const user = await User.findById(req.params.id);
//   res.render('profile', { user });
// };
// ⚙️ MVC in Express.js (Example Project Structure)
// pgsql
// Copy
// Edit
// project/
// ├── models/
// │   └── User.js
// ├── views/
// │   └── profile.ejs
// ├── controllers/
// │   └── userController.js
// ├── routes/
// │   └── userRoutes.js
// ├── app.js
// js
// Copy
// Edit
// // routes/userRoutes.js
// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');

// router.get('/profile/:id', userController.getProfile);
// module.exports = router;
// js
// Copy
// Edit
// // app.js
// const express = require('express');
// const app = express();
// const userRoutes = require('./routes/userRoutes');

// app.set('view engine', 'ejs');
// app.use('/', userRoutes);
// ✅ Why Use MVC?
// Benefit	Description
// Separation of concerns	Keeps logic, UI, and data separate
// Easier to maintain	Makes code more modular and reusable
// Collaborative friendly	Devs can work on different layers

// 🔁 Summary:
// Model = Data

// View = User Interface

// Controller = Input logic / routing
