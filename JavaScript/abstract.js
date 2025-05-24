// n JavaScript, Abstraction can be defined as the concept of
//  hiding the inner complex workings of an object and
//  exposing only the essential features to the user.

// Hiding Complexity: Implementation is hidden, it shows only the necessary details.
// Modularity: Code is organized in a reusable form, which improves maintainability and readability.
// Security: Important data cannot be directly accessed, they are hidden.
// Reusability: The code can be reused across different applications.



// let Shape = function(){
//     this.shapename = 'none';
//     throw new Error("can not create an instance of abstract classes.......");
// }

// Shape.prototype.draw = function(){
//     return " Drawing " + this.shapename
// }

// let Circle = function(shapename){
// this.shapename = shapename;
// }

// Circle.prototype = Object.create(Shape.prototype);

// let circle = new Circle("Circle");
// console.log(circle.draw());

// console.log(circle instanceof Circle);
// console.log(circle instanceof Shape);