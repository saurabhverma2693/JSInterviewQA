// //REST API :
// // Rest api is a state less , Client-independent API for exchanging data.


// what is web api?
// api is a set of rules and protocols that allow diffrent software applications to communicate with each other.
// api is like waiter it take your request go to database and brings back the result.

// A REST API (Representational State Transfer Application Programming Interface) is a way for software applications to communicate with each other over the internet using HTTP protocols.

// 🔧 Key Concepts of REST API:
// Concept	Description
// Client-Server Architecture	The client (like a browser or mobile app) makes requests; the server responds with data.
// Stateless	Each request from the client must contain all the information needed — no session or history is stored on the server between requests.
// Resources	Everything is treated as a resource (users, posts, products), identified by a URL.
// HTTP Methods	REST uses standard HTTP methods to operate on resources:
// GET – Retrieve data
// POST – Create new data
// PUT – Update existing data
// DELETE – Remove data
// JSON/XML	Data is usually exchanged in JSON format (sometimes XML).
// Uniform Interface	REST APIs follow consistent rules for naming and interacting with resources, making them easier to understand and use.

// 📌 Example:
// Let’s say you have a blog API at https://api.myblog.com.

// HTTP Method	Endpoint	Action
// GET	/posts	Get all blog posts
// GET	/posts/1	Get a specific post with ID = 1
// POST	/posts	Create a new post
// PUT	/posts/1	Update the post with ID = 1
// DELETE	/posts/1	Delete the post with ID = 1

// ✅ Why Use REST APIs?
// Easy to understand and implement.

// Works well with web technologies (uses HTTP).

// Language agnostic — any programming language can call a REST API.

// Scalable and fast for many web-based applications.


