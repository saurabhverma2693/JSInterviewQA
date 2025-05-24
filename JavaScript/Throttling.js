// Throttling
// ✅ What it does:
// Limits the execution of a function to once every X milliseconds, no matter how many times the event is triggered.

// 📌 Use case:
// Window resizing or scroll events — limit how often the handler runs.

// 🧠 How it works:
// It runs the function and then ignores any calls until the delay has passed.

// 💡 Example:

// function throttle(func, delay) {
//     let lastCall = 0;
//     return function (...args) {
//       const now = new Date().getTime();
//       if (now - lastCall >= delay) {
//         lastCall = now;
//         func.apply(this, args);
//       }
//     };
//   }
  
//   // Usage
//   const handleScroll = throttle(() => {
//     console.log("Scroll event handled!");
//   }, 500);
  
//   window.addEventListener("scroll", handleScroll);
  