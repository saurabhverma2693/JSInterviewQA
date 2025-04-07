// let a = [1, 2, 3];
// let b = [4, 5, 6];
// console.log([...a, ...b]);

// printName = (...a) => {
//     console.log(a);
// }

// printName("saurabh", "verma", "1416", 1, 2, 3, 4, 5, 56, 67, 7);

// let obj = {
//     name:'Saurabh'
// }

// function Detail(Location,Age){
// console.log(`Your first name is ${this.name} & Location is ${this.Location} && your age is ${this.Age} `);
// }

// // Detail.call(obj,'Gurugram',30)
// // Detail.apply(obj,['Gurugram',30]);

// let detail = Detail.bind(obj,'ggn',30);
// detail();


let objt = {firstname:'Saurabh',
    lastname:'Verma',

}


let Printfullname = function(age,gender){
    console.log(`My first name is ${this.firstname} and last name is ${this.lastname} & age is ${this.age} & gender is ${this.gender}`);
}
Printfullname.call(objt,30,'male');

let OtherObj = {
firstname:'Shabu',
lastname:'Verma'
}

Printfullname.call(OtherObj,31,'males');