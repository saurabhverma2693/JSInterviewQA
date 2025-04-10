Function factories are functions that create and return other functions — basically, they're factories for functions.

They’re super useful when you want to generate customized functions with shared logic. 
Closures make this possible, because the returned function can "remember" variables from the outer function.

Example:

function greeter(greeting) {
    return function(name) {
      console.log(`${greeting}, ${name}!`);
    };
  }
  
  const sayHello = greeter("Hello");
  const sayHola = greeter("Hola");
  
  sayHello("Alice"); // Hello, Alice!
  sayHola("Carlos"); // Hola, Carlos!
  

