// 🧠 What is Caching?
// Caching is the process of storing data temporarily so it can be quickly retrieved later instead of recomputing or refetching it.

// 📍 Where Caching is Used in JavaScript:
// ✅ Frontend (Browser)
// Browser Cache: Automatically caches static assets (CSS, JS, images).

// Memory Cache: Store data in variables or in-memory objects.

// LocalStorage / SessionStorage: Store data persistently in the browser.

// Service Workers: Cache responses to API calls or assets for offline use.

// Example:

// js
// Copy
// Edit
// let cache = {};

// function getData(id) {
//   if (cache[id]) {
//     return Promise.resolve(cache[id]); // return cached result
//   }

//   return fetch(`/api/data/${id}`)
//     .then(res => res.json())
//     .then(data => {
//       cache[id] = data;
//       return data;
//     });
// }
// ✅ Backend (Node.js)
// In-memory caching: Store frequently used data in memory (e.g., a DB query result).

// File caching: Store cache in files.

// Distributed caching: Use tools like Redis or Memcached for multi-server caching.

// Example with in-memory cache:

// js
// Copy
// Edit
// const express = require('express');
// const app = express();

// let cache = {};

// app.get('/expensive', async (req, res) => {
//   if (cache.result) {
//     return res.send({ source: 'cache', data: cache.result });
//   }

//   const data = await heavyCalculation();
//   cache.result = data;

//   res.send({ source: 'calculated', data });
// });
// 🧰 Common Caching Strategies
// Strategy	Description
// Memoization	Cache function results based on input
// TTL (Time to Live)	Automatically expire data after a time period
// LRU Cache	Evict least recently used items from the cache
// Lazy caching	Cache only when data is first requested
// Pre-caching	Load and cache data ahead of time

// 🔁 Memoization Example (Simple Cache by Args)
// js
// Copy
// Edit
// function memoize(fn) {
//   const cache = {};
//   return function (...args) {
//     const key = JSON.stringify(args);
//     if (cache[key]) return cache[key];
//     cache[key] = fn(...args);
//     return cache[key];
//   };
// }

// const slowAdd = (a, b) => {
//   console.log('Calculating...');
//   return a + b;
// };

// const cachedAdd = memoize(slowAdd);

// cachedAdd(2, 3); // "Calculating..." → 5
// cachedAdd(2, 3); // from cache → 5
// 🛠 Tools and Libraries for Caching
// Use Case	Tool/Library
// Server-side cache	node-cache, memory-cache
// Distributed cache	Redis with ioredis, redis npm package
// HTTP cache headers	Cache-Control, ETag, Last-Modified
// Frontend state	react-query, SWR

// ✅ Summary
// Caching helps avoid unnecessary work and speeds up responses.

// Used both in browsers and on servers.

// You can cache in memory, localStorage, or tools like Redis.

// Use TTL, memoization, or service workers depending on the use case.


