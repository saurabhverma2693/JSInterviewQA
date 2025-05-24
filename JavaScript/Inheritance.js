// Inheritance in JavaScript
// Inheritance in JavaScript allows objects to acquire properties and methods from other objects. 
// JavaScript primarily supports inheritance through prototypes but also provides class-based inheritance with ES6 classes.

// Why Inheritance:

// Why Do We Need Inheritance?
// Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows a class (child class) to derive properties and behaviors from another class (parent class). Here’s why inheritance is important:

// 1. Code Reusability
// Instead of writing the same code multiple times, you can define common functionality in a base class and reuse it in derived classes.

// Example: If multiple classes need a method to calculate the area of a shape, defining it in a base class avoids redundancy.

// 2. Maintainability & Scalability
// Since common functionality is centralized in a base class, updates or bug fixes need to be made only once, rather than in multiple places.

// Example: Updating the method in the base class automatically reflects changes in all derived classes.

// 3. Better Organization & Readability
// It helps organize code logically by creating a hierarchical structure.

// Example: A "Vehicle" base class with derived classes like "Car," "Bike," and "Truck" improves clarity.

// 4. Extensibility & Flexibility
// Developers can extend existing classes to introduce new features without modifying the original code.

// Example: A "Bird" class can be extended into "FlyingBird" and "NonFlyingBird" classes with additional behaviors.

// 5. Supports Polymorphism
// Inheritance allows for method overriding, which enables dynamic method behavior.

// Example: A base class "Animal" with a method makeSound(), overridden in subclasses like "Dog" (bark()) and "Cat" (meow()).

// 6. Establishes Relationships
// It naturally represents "is-a" relationships in the real world.

// Example: A "Doctor" class inherits from a "Person" class because a doctor is a person.

// 7. Reduces Redundancy & Enhances Efficiency
// Avoids duplicate code, which leads to more efficient development and reduced chances of errors.


// js doesnot support Multiple Inheritance so we use Mixins Concept
// MIXINS:
// let a = {
//     aa(){
//         console.log(`Hi I am ${this.name}`);
//     }
// };

// let b = {
//     bb(){
//         console.log(`Hi I am ${this.name}`);
//     }
// };

// class Employee{
//     constructor(name){
//         this.name = name;
//     }
// }

// class Parttime extends Employee{

// }

// Object.assign(Parttime.prototype,a,b);
// let pte = new Parttime('Saurabh');
// pte.bb();


// Prototype Inheritance:

// let Employee = function(name){
// this.name = name;
// }

// Employee.prototype.getName = function(){
//     return this.name;
// }

// let PermanentEmployee = function(salary){
//     this.salary = salary;
//     }

//     PermanentEmployee.prototype.getSalary = function(){
//         return salary;
//     }   

//     let E1 = new Employee('Saurabh');

//     PermanentEmployee.prototype = E1;

//    console.log(E1.getName());

//    let pe1 = new PermanentEmployee(500000);
//   console.log(pe1.getSalary);
    
//   console.log(pe1 instanceof Employee );
//   console.log(pe1 instanceof PermanentEmployee );

// ES6 uses classes in js 


// Types of Inheritance
// 1)Single class inheritance
// 2)Multi level inheritance(a class inherit from another class which inheri from other class)
// 3)multiple inheritance(new concept Mixins)
// 4) Hierarchal inheritance
// 5)Hybrid inheritance
// 6)prototypel inheritance

// #######         Hierarchal inheritance Example:             ################
// Parent class (Superclass)
// class Vehicle {
//     constructor(brand, model) {
//         this.brand = brand;
//         this.model = model;
//     }

//     start() {
//         console.log(`${this.brand} ${this.model} is starting...`);
//     }
// }

// // Child class 1: Car
// class Car extends Vehicle {
//     drive() {
//         console.log(`${this.brand} ${this.model} is driving on the road.`);
//     }
// }

// // Child class 2: Motorcycle
// class Motorcycle extends Vehicle {
//     ride() {
//         console.log(`${this.brand} ${this.model} is zooming on the highway.`);
//     }
// }

// // Child class 3: Truck
// class Truck extends Vehicle {
//     loadCargo() {
//         console.log(`${this.brand} ${this.model} is loading cargo.`);
//     }
// }

// // Creating instances
// const car = new Car("Toyota", "Camry");
// const bike = new Motorcycle("Yamaha", "R15");
// const truck = new Truck("Ford", "F-150");

// car.start();  // Toyota Camry is starting...
// car.drive();  // Toyota Camry is driving on the road.

// bike.start();  // Yamaha R15 is starting...
// bike.ride();   // Yamaha R15 is zooming on the highway.

// truck.start();  // Ford F-150 is starting...
// truck.loadCargo(); // Ford F-150 is loading cargo.


