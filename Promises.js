
// Promises:
// In JavaScript, a Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//  It can be in one of three states: pending, fulfilled, or rejected. 


// Example:
// Create a promise
// const myPromise = new Promise((resolve, reject) => {
//     // Simulate an asynchronous operation
//     setTimeout(() => {
//       // Resolve the promise with a value
//       resolve("Success!");
//       // OR reject the promise with a reason
//       // reject("Something went wrong!");
//     }, 1000);
//   });
  
//   // Handle the promise
//   myPromise.then(
//     (value) => {
//       console.log("Promise fulfilled:", value); // Output: Promise fulfilled: Success!
//     },
//     (error) => {
//       console.error("Promise rejected:", error);
//     }
//   );


// Asynchronous Operations:
// JavaScript is single-threaded, meaning it can only do one thing at a time. However, many tasks, like fetching data from a server or reading a file, take time and are asynchronous. Promises help manage these operations without blocking the main thread. 
// Representing Future Values:
// A promise represents a value that might be available later, or never. It's like a placeholder for a result that will be available at some point in the future. 
// States:
// Pending: The initial state, where the operation has not completed yet. 
// Fulfilled: The operation completed successfully, and the promise has a value. 
// Rejected: The operation failed, and the promise has a reason for the failure. 

// Why Use Promises?
// Improved Readability:
// Promises offer a cleaner and more readable way to handle asynchronous code compared to callbacks, especially when dealing with multiple asynchronous operations. 
// Avoid Callback Hell:
// Promises help avoid the nested callback structure, which can make code difficult to understand and maintain. 
// Error Handling:
// Promises provide a structured way to handle errors that might occur during asynchronous operations. 
// Concurrency Control:
// Promises provide mechanisms like Promise.all() and Promise.race() to manage multiple asynchronous operations concurrently. 


// // function Step1(){
// //     return new Promise(resolve => setTimeout(()=>{console.log('Hurrey!Step1 is completed')
// //         resolve();
// //     },1000
// // )
// // );
// // }


// // function Step2(){
// //     return new Promise(resolve => setTimeout(()=>{console.log('Hurrey!Step2 is completed')
// //         resolve();
// //     },1000
// // )
// // );
// // }



// // function Step3(){
// //     return new Promise(resolve => setTimeout(()=>{console.log('Hurrey!Step3 is completed')
// //         resolve();
// //     },1000
// // )
// // );
// // }



// // function Step4(){
// //     return new Promise(resolve => setTimeout(()=>{console.log('Hurrey!Step4 is completed')
// //         resolve();
// //     },1000
// // )
// // );
// // }

// // async function StepOver(){
// //     await Step1();
// //     await Step2();
// //     await Step3();
// //     await Step4();
// //     console.log("Congratulations! All steps are completed...............");
// // }

// // StepOver();
