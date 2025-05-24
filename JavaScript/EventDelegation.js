// 🧠 What is Event Delegation?
// Event delegation is a technique where you attach a single event listener to a parent element, and use it to handle events for child elements — leveraging event bubbling.

// Instead of adding individual listeners to many elements, you let the event bubble up and catch it on a common ancestor.

// 📦 Why use it?
// ✅ Better performance (fewer listeners in memory)

// ✅ Works even for dynamically added elements

// ✅ Easier to manage in complex UIs

// 💡 Example
// HTML:
// html
// Copy
// Edit
// <ul id="menu">
//   <li>Home</li>
//   <li>About</li>
//   <li>Contact</li>
// </ul>
// JS using event delegation:
// javascript
// Copy
// Edit
// document.getElementById("menu").addEventListener("click", function (event) {
//   if (event.target.tagName === "LI") {
//     console.log("You clicked:", event.target.textContent);
//   }
// });
// Now even if you add more <li> elements dynamically, this listener will still work!

// 🔍 How it Works:
// User clicks on an <li>

// The event bubbles up to the <ul>

// The <ul>'s listener checks the event target

// If it's an <li>, it handles it!

// 🛠️ Dynamic Element Bonus:
// javascript
// Copy
// Edit
// const menu = document.getElementById("menu");

// const newItem = document.createElement("li");
// newItem.textContent = "Blog";
// menu.appendChild(newItem);
// // No need to re-add any event listeners!
// ⚠️ Things to Watch Out For:
// Always check event.target carefully (it might not be the exact element you're expecting)

// Use .closest() or .matches() for more robust targeting

// Avoid overly broad delegation (don't attach to document unless needed)

