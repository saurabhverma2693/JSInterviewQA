
// 🔁 1. Local Storage
// ✅ Use when:
// You want to store data that persists across sessions

// Doesn’t need to go to the server

// 🔧 JS Usage:
// javascript
// Copy
// Edit
// // Set item
// localStorage.setItem("username", "Alice");

// // Get item
// const name = localStorage.getItem("username");

// // Remove item
// localStorage.removeItem("username");

// // Clear all
// localStorage.clear();
// 🕒 2. Session Storage
// ✅ Use when:
// You only need the data for the current tab or session

// You don’t want the data to persist after the tab is closed

// 🔧 JS Usage:
// javascript
// Copy
// Edit
// // Set item
// sessionStorage.setItem("tempToken", "123abc");

// // Get item
// const token = sessionStorage.getItem("tempToken");

// // Remove item
// sessionStorage.removeItem("tempToken");

// // Clear all
// sessionStorage.clear();
// 🌐 3. Cookies
// ✅ Use when:
// You need to send data automatically to the server with every request

// You’re handling authentication or tracking

// 🔧 JS Usage:
// javascript
// Copy
// Edit
// // Set cookie
// document.cookie = "userId=789xyz; max-age=3600; path=/";

// // Read cookie
// console.log(document.cookie); // e.g., "userId=789xyz"

// // Delete cookie (by setting expiry to the past)
// document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
// 🧠 Note: Working with cookies in JS is a bit messier and often requires helper functions or libraries like js-cookie.

// 📦 4. Browser Storage
// This is a general term that includes:

// localStorage

// sessionStorage

// IndexedDB

// cookies

// Cache API

// So technically, localStorage and sessionStorage are browser storage.

// 📊 Comparison Summary (JS-centric)

// Feature	localStorage	sessionStorage	document.cookie
// Lifespan	Until manually cleared	Until tab/window closes	Based on expiry setting
// Max size	~5MB	~5MB	~4KB
// JS Access	✅ Simple API	✅ Simple API	✅ But messy
// Server communication	❌ No	❌ No	✅ Yes (auto-sent)
// Use case	Theme, saved prefs	Form steps, tab state	Auth tokens, tracking
// 🧠 TL;DR in JS
// Use localStorage for long-term client-only data.

// Use sessionStorage for short-term/tab-specific stuff.

// Use cookies for server communication (especially auth).

// “Browser storage” is just the umbrella term.