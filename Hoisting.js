// 🪄 What is Hoisting?
// Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the compilation phase — before any code is executed.

// So, you can use some variables and functions before they are declared in the code.

// But — not everything behaves the same. Let’s see how.

// 📦 Variable Hoisting
// var is hoisted — but only the declaration, not the value:
// javascript
// Copy
// Edit
// console.log(a); // undefined, not ReferenceError
// var a = 10;
// Why? JS does this under the hood:

// javascript
// Copy
// Edit
// var a;        // declaration hoisted
// console.log(a); // undefined
// a = 10;       // assignment stays where it is
// let and const are also hoisted — but not initialized:
// javascript
// Copy
// Edit
// console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
// let b = 20;
// They are in a "temporal dead zone" (TDZ)" from the start of the scope until the declaration is reached.

// 🧩 Function Hoisting
// Function declarations are fully hoisted:
// javascript
// Copy
// Edit
// sayHi(); // ✅ Works

// function sayHi() {
//   console.log("Hello!");
// }
// Function expressions are not hoisted like that:
// javascript
// Copy
// Edit
// sayBye(); // ❌ TypeError: sayBye is not a function

// var sayBye = function () {
//   console.log("Bye!");
// };
// Only the var sayBye part is hoisted — so at runtime, sayBye is undefined.

.

// 🎯 Summary Table

// Type	Hoisted?	Initialized?	Usable before declaration?
// var	✅ Yes	🚫 No (undefined)	⚠️ Yes (undefined)
// let / const	✅ Yes	🚫 No	❌ No (TDZ error)
// Function declaration	✅ Fully	✅ Yes	✅ Yes
// Function expression	❌ Partially	🚫 No	❌ No (TypeError)