// Sure! Debouncing and throttling are two important techniques used to control the rate at which a function is executed, 
// especially for performance optimization in events like scrolling, resizing, or typing.

// ⚡️ Debouncing
// ✅ What it does:
// Delays the execution of a function until after a certain period of inactivity.

// 📌 Use case:
// Typing in a search box — only send a request after the user stops typing for, say, 300ms.

// 🧠 How it works:
// Every time the event is triggered, the previous timer is cleared and a new one is set.

// 💡 Example:

// function debounce(func, delay) {
//     let timer;
//     return function (...args) {
//       clearTimeout(timer);
//       timer = setTimeout(() => func.apply(this, args), delay);
//     };
//   }
  
//   // Usage
//   const handleInput = debounce(() => {
//     console.log("Search API called!");
//   }, 300);
  
//   document.getElementById("search").addEventListener("input", handleInput);
  