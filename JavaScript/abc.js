
// Abhishek is running up a staircase with N steps, and can hop(jump) either 1 step, 2 steps or 3 steps at a time. You have to count, how many possible ways abhsihek can run up to the stairs. 
// N=4

// 1 - 2,2
// 2 - 1,3
// 3 - 2,1,1
// 1 - 1,2
// 2 - 2,3
// 2 - 3,2
// ...............................................................................................................................................................
// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);
// setImmediate(() => console.log("Immediate"));

// Promise.resolve().then(() => console.log("Promise"));

// process.nextTick(() => console.log("Next Tick"));

// console.log("End");

//............................................................................................................................................................
// function FullName(fname){
//     return function(lname){
//         if(!lname)
//             return fname;


//         return FullName(fname + ' ' + lname);
//     }
// }

// console.log(FullName('Saurabh')('Verma')('Shabu')('Verma')());

// function Add(a){
//     return function(c){
//         if(1a)
//             return 
//     }
// }

// console.log(Add(1)(3,8));
// function Sum(fn){
//     return function(sn){
//         if(!sn)
//         return fn;
        
//         return Sum(fn + sn);
//     }
// }


// console.log(Sum(3)(4)(6)());

//Currying : 

// let Sum = fn=> sn=> tn=> fth=> fn + sn + tn + fth;
// console.log(Sum(2)(3)(5)(7));

// function FirstNumber(fn){
//    return  function SecondNumber(sn){
//       return  function ThirdNumber(tn){
// return function FourthNumber(ftn,fifthnum){
//     return fn + sn + tn + ftn + fifthnum;
// }
//         }
//     }}
// console.log(FirstNumber(5)(7)(11)(13,19));
// let f =9;
// function First(a,b,c)
// {
//     return function Second(d,e){
// return a + b + c + d + e + f;
//     }
// }

//  console.log(First(1,2,3)(4,5));

// // let a = [1, 2, 3];
// // let b = [4, 5, 6];
// // console.log([...a, ...b]);

// // printName = (...a) => {
// //     console.log(a);
// // }

// // printName("saurabh", "verma", "1416", 1, 2, 3, 4, 5, 56, 67, 7);

// // let obj = {
// //     name:'Saurabh'
// // }

// // function Detail(Location,Age){
// // console.log(`Your first name is ${this.name} & Location is ${this.Location} && your age is ${this.Age} `);
// // }

// // // Detail.call(obj,'Gurugram',30)
// // // Detail.apply(obj,['Gurugram',30]);

// // let detail = Detail.bind(obj,'ggn',30);
// // detail();


// let objt = {firstname:'Saurabh',
//     lastname:'Verma',

// }


// let Printfullname = function(age,gender){
//     console.log(`My first name is ${this.firstname} and last name is ${this.lastname} & age is ${this.age} & gender is ${this.gender}`);
// }
// Printfullname.call(objt,30,'male');

// let OtherObj = {
// firstname:'Shabu',
// lastname:'Verma'
// }

// Printfullname.call(OtherObj,31,'males');