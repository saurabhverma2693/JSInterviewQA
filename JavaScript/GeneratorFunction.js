// Ah, generator functions — a whole different kind of awesome! In JavaScript, 
// a generator function is a special type of function that can pause and resume execution.
//  This makes it great for handling things like lazy iteration, asynchronous flows, or infinite sequences.



// function* GeneratorFunction(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }

// let gen = GeneratorFunction();
//  console.log(gen.next());
//  console.log(gen.next());
//  console.log(gen.next());
//  console.log(gen.next());
//  console.log(gen.next());


//  .next() resumes the function from where it last yielded.

// done becomes true when the function finishes.






// Infinite Generator

// function* infiniteCounter() {
//     let i = 1;
//     while (true) {
//       yield i++;
//     }
//   }
  
//   const counter = infiniteCounter();
//   console.log(counter.next().value); // 1
//   console.log(counter.next().value); // 2
//   console.log(counter.next().value); // 3
//   // ... and so on
  

//   🔗 Real-World Use Case: Custom Iterator

//   const myIterable = {
//     *[Symbol.iterator]() {
//       yield 1;
//       yield 2;
//       yield 3;
//     }
//   };
  
//   for (const value of myIterable) {
//     console.log(value); // 1, 2, 3
//   }

  
//   Uses:
//   Lazy iteration,
//    infinite sequences,
//     async flows