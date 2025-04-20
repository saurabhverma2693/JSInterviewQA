// 🔄 What is Event Bubbling?
// Event bubbling is the process where an event starts from the deepest (most specific) element 
// and bubbles up through its ancestors in the DOM tree.

// 🧠 Think of it like:
// A ripple effect where the event triggers on the clicked element, and then its parent, and then its parent's parent, 
// and so on, all the way up to the <body> or even <html>.

// 📊 Example:
// Imagine this HTML:

// html
// Copy
// Edit
// <div id="parent">
//   <button id="child">Click me</button>
// </div>

// And the JS:

// javascript
// Copy
// Edit
// document.getElementById("child").addEventListener("click", () => {
//   console.log("Child clicked");
// });

// document.getElementById("parent").addEventListener("click", () => {
//   console.log("Parent clicked");
// });

// 👉 When you click the button:
// nginx
// Copy
// Edit
// Child clicked
// Parent clicked


// Because:

// The click event is triggered on #child

// Then it bubbles up to #parent

// 🚦 Event Bubbling in the Event Flow
// The full event flow has 3 phases:

// Capture phase (from root to target)

// Target phase (on the target itself)

// Bubbling phase (from target back up to root)

// By default, event listeners are added in the bubbling phase unless you specify otherwise.

// ✋ Stopping the Bubble
// You can stop the event from bubbling up:

// element.addEventListener("click", (event) => {
//     event.stopPropagation();
//   });

  