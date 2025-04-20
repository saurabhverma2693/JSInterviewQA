// What is a Service Worker?
// A Service Worker is a JavaScript script that runs in the background, separate from the main browser thread. 
// It acts as a proxy between your web app, the browser, and the network (when available).

// 🧰 Key Features:
// Intercept and handle network requests (like caching assets for offline use)

// Push notifications

// Background sync

// Act as a network proxy for fine-grained control over fetches

// 🔗 How It Relates to JavaScript:
// Service Workers are written in JavaScript and registered from your main JavaScript app. 
// They're like middlemen that sit between your app and the internet.

// They don’t have access to the DOM directly, but they can communicate with your page via postMessage.

// 🔨 Basic Workflow

// 1. Registering a Service Worker:

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js')
//       .then(reg => console.log('Service Worker registered:', reg))
//       .catch(err => console.error('Service Worker failed:', err));
//   }
  
//   2. The Service Worker File (sw.js)
//   self.addEventListener('install', event => {
//     console.log('Service Worker installing...');
//     // Pre-cache assets here
//   });
  
//   self.addEventListener('fetch', event => {
//     event.respondWith(
//       caches.match(event.request).then(response => {
//         return response || fetch(event.request);
//       })
//     );
//   });

  
//   📦 Real-World Example
// Imagine you're building a news app:

// When online: fetches latest news from API and caches it.

// When offline: serves cached news to the user.

// Service Workers make this seamless.

// ⚠️ Important Notes
// Runs in a separate thread (doesn’t block the UI)

// Works only on HTTPS (or localhost)

// Requires careful versioning and updating

// Lifecycle includes install, activate, and fetch