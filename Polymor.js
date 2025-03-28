

// Polymorphism is the OOPs principle which provides the facility to perform one task in many ways.
// Polymorphism in JavaScript is a key concept that enhances code scalability, reusability, and maintainability. 
// It allows developers to create code that can adapt to different data types and objects through a common interface

// Why?
// Polymorphism in JavaScript makes code more maintainable, flexible, 
// and scalable by allowing different objects to share a common interface.
//  This reduces complexity and enhances code reuse,
//  making it a vital concept in designing robust applications.

// Example:

// let Employee = function(){}
// Employee.prototype.getName = function(){
//     return 'Hi! I am Employee Class.......';
// }

// let FullTime = function(){}
// FullTime.prototype = Object.create(Employee.prototype);
// FullTime.prototype.getName= function(){
//     return 'Hi! I am Full Time Employee......';
// }


// let Parttime = function(){}
// Parttime.prototype = Object.create(Employee.prototype);
// Parttime.prototype.getName= function(){
//     return 'Hi! I am Part Time Employee......';
// }


// let TemporaryEmployee = function(){}
// TemporaryEmployee.prototype = Object.create(Employee.prototype);

// var Employees = [new Employee(),new FullTime(),new Parttime(),new TemporaryEmployee()];

// Employees.forEach(function(empl){console.log(empl.getName())}); // this line give us output

// Employees.forEach(empl => empl.getName());       This line is  Not working



