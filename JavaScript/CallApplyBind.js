// In JavaScript, call, apply, and bind are methods used to control the this context when invoking a function. 
// These methods allow us to specify which object should be treated as this inside a function.

// 1. call Method
// The call method invokes a function immediately, allowing you to pass arguments one by one.

// Call Method:
// function greet(greeting, punctuation) {
//     console.log(greeting + ", " + this.name + punctuation);
// }

// const person = { name: "Alice" };

// greet.call(person, "Hello", "!");  // Output: Hello, Alice!

// 2. apply Method
// The apply method is similar to call, but it takes arguments as an array.

// function greet(greeting, punctuation) {
//     console.log(greeting + ", " + this.name + punctuation);
// }

// const person = { name: "Bob" };

// greet.apply(person, ["Hi", "!"]);  // Output: Hi, Bob!

// Key Difference from call:
// call uses individual arguments.
// apply takes arguments as an array.

// 3. bind Method
// The bind method does not invoke the function immediately.
//  Instead, it returns a new function with this permanently bound.

// Example:
// function greet(greeting, punctuation) {
//     console.log(greeting + ", " + this.name + punctuation);
// }

// const person = { name: "Charlie" };

// const boundGreet = greet.bind(person, "Hey");
// boundGreet("!");  // Output: Hey, Charlie!


// Key Difference from call and apply:
// call and apply execute the function immediately.
// bind returns a new function that can be executed later.

// When to Use Which?
// Method    	Execution	         Arguments Format	          Use Case
// call	        Immediately	         Individual arguments	      Use when you know arguments beforehand
// apply	    Immediately	         Arguments as an array	      Use when you have arguments in an array
// bind	     Returns a function      Individual arguments	      Use when you want to save a function for later execution





