// (1)
// S — Single Responsibility Principle (SRP)
// A class should have only one reason to change.

// 🔹 Each class/module should do one thing and do it well.

// Example:

// // ❌ Bad
// class User {
//     saveToDatabase() { ... }
//     sendEmail() { ... }
//   }
  
//   // ✅ Good
//   class UserRepository {
//     save(user) { ... }
//   }
  
//   class EmailService {
//     send(email) { ... }
//   }
  
//................................................................................................
// (2)
// O — Open/Closed Principle (OCP)
// Software entities(class, module) should be open for extension(add some functionality in a class)
//  but closed for modification.

// 🔹 Add new behavior without changing existing code.

// Example:
// (Wrong Way)
// public class Account
// {
// public string Name {get;set;}
// public string Address {get;set;}
// public double Balance {get;set;}

// public double CalculateInterest(string accountType)
// {
// if(accountType == "Saving")
// {
// return Balance * 0.3;
// }
// else
// {
// return Balance * 0.7;
// }
// // if we have to add one more account type and that is current account so we have to add one more if else condition thats break the violence of OCP so we did by other method
// if(){} 
// else{}
// }
// }
// ........................................................

// (RightWay)
// public class Account
// {
// public string Name {get;set;}
// public string Address {get;set;}
// public double Balance {get;set;}
// }

// Interface IAccount
// {
// double CalculateInterest(Account account);
// }

// public class SavingAccount : IAccount 
// {
// public double CalculateInterest(Account account)
// {
// return account.Balance * 0.3;
// }
// }

// public class OtherAccount : IAccount 
// {
// public double CalculateInterest(Account account)
// {
// return account.Balance * 0.5;
// }
// }

// public class CurrentAccount : IAccount 
// {
// public double CalculateInterest(Account account)
// {
// return account.Balance * 0.7;
// }
// }



//...........................................................................................
//(3) Liskov Substitute Principle(LSP): 
// It states that if a subclass inherits from a superclass, it should be usable in any
//  context where the superclass is expected, without causing issues.
// You should be able to use a subclass wherever a parent class is expected.
//  Example:

//  // ✅ Good

// class Bird {
//     fly() {
//       console.log("Flying");
//     }
//   }
  
//   class Sparrow extends Bird {}
  
//   const makeItFly = (bird) => bird.fly();
  
//   makeItFly(new Sparrow()); // Works fine ✅
// If a subclass breaks functionality (e.g., a Penguin that can't fly), LSP is violated.  

//......................................................................................................

// (4)
// I — Interface Segregation Principle (ISP)
// Clients shouldn’t be forced to depend on methods they don’t use.

// 🔹 Split big interfaces into smaller, more specific ones.

// Example:

// // ❌ Bad
// class Printer {
//     print();
//     scan();
//     fax();
//   }
  
//   // ✅ Good
//   class IPrinter {
//     print();
//   }
  
//   class IScanner {
//     scan();
//   }
  //................................................................................................

  // (5)
//   D — Dependency Inversion Principle (DIP)
// High-level modules should not depend on low-level modules.
// Both should depend on abstractions.

// 🔹 Depend on interfaces or abstractions, not concrete implementations.

// Example:
// // ❌ Bad
// class MySQLDatabase {
//     connect() { ... }
//   }
  
//   class UserService {
//     constructor() {
//       this.db = new MySQLDatabase(); // tightly coupled
//     }
//   }
  
//   // ✅ Good
//   class UserService {
//     constructor(database) {
//       this.db = database; // decoupled
//     }
//   }
  