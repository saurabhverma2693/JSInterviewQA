// 🟡 Intermediate-Level Questions
// 6. What is indexing in MongoDB?
// Indexes improve the performance of search operations. Without them, MongoDB scans every document.

// js
// Copy
// Edit
// db.users.createIndex({ email: 1 });
// 7. What is aggregation in MongoDB?
// Used to perform complex operations like filtering, grouping, and transforming data.

// js
// Copy
// Edit
// db.orders.aggregate([
//   { $group: { _id: "$status", total: { $sum: 1 } } }
// ]);
// 8. Explain the difference between find() and aggregate()
// find() → Simple queries

// aggregate() → Complex operations (like $group, $sort, $match)

// 9. How does MongoDB handle relationships?
// Relationship Type	Approach in MongoDB
// One-to-One	Embed or reference
// One-to-Many	Embed array or reference
// Many-to-Many	Use referencing

// 10. What are MongoDB’s data types?
// String

// Number

// Boolean

// Date

// Array

// Object

// ObjectId

// Null


