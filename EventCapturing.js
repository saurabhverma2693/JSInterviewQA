// 🕸️ What is Event Capturing?
// Event capturing is the first phase of the DOM event flow. During this phase, the event travels from the root element down to the target element — opposite of bubbling.

// So when an event occurs:

// Capture phase: top → down (e.g., <html> → <body> → your target)

// Target phase: on the exact element clicked

// Bubbling phase: bottom → up (e.g., target → ancestors → <body> → <html>)

// 📊 Example:
// HTML:

// html
// Copy
// Edit
// <div id="outer">
//   <div id="inner">
//     <button id="btn">Click Me</button>
//   </div>
// </div>
// JavaScript:

// javascript
// Copy
// Edit
// document.getElementById("outer").addEventListener(
//   "click",
//   () => {
//     console.log("Outer DIV (capture)");
//   },
//   true // <- capture mode
// );

// document.getElementById("btn").addEventListener("click", () => {
//   console.log("Button clicked");
// });
// 👉 Output when you click the button:
// css
// Copy
// Edit
// Outer DIV (capture)
// Button clicked
// Because:

// First, the event captures from outer down to btn

// Then it hits the target

// (If bubbling listeners were present, it would bubble back up)

// ✅ Adding Listeners in Capture Mode
// Use the third argument in addEventListener:

// javascript
// Copy
// Edit
// element.addEventListener("click", handler, true);
// Or the options object:

// javascript
// Copy
// Edit
// element.addEventListener("click", handler, { capture: true });
// 🔄 Capturing vs Bubbling Summary

// Feature	Capturing Phase	Bubbling Phase
// Direction	Top → down	Bottom → up
// Default behavior	Not used unless specified	Default event phase
// Use case	Rare, but useful for intercepting events early	Most common (e.g., delegation)
