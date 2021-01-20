// function saySomething(value) {
//     console.log(value);
//     return value;
// }

// saySomething("Hello function!");


// function add(a=0,b=0) {
//     console.log(a,b);
// }
// add(1);
// add(1,2,3,4,5);

// function add2(...whatever) {
//     let sum = 0;
//     for (let index = 0; index < whatever.length; index++) {
//         sum = sum + whatever[index];
        
//     }
//     console.log(sum);
//     return sum;

// }

// let sum = add2(1,2,3,4,5,6,7,8);
// console.log(sum);

// let theSquare = function (aValue=0) {
//     return aValue * aValue;
// };
// let theSecondSquare = theSquare;
// console.log(`The square root of 10 is ${theSecondSquare()}`);

// let calculator = {
//     subtract: function(a,b) {
//         return a-b;
//     },
//     add: function(a,b) {
//         return a+b;
//     }
// };
// console.log(typeof calculator);
// console.log(calculator.subtract(11,10));

// let arrayOfMystery = [
//     ['anonymous','array string'],
//     {
//         name: 'anonymous object',
//         address: '123 Main Street'
//     },
//     function() {
//         return 'Anonymous Function!'
//     }
// ];
// console.log(typeof arrayOfMystery);
// console.log(arrayOfMystery[0][1]);
// console.log(arrayOfMystery[1].address);
// console.log(arrayOfMystery[2]());



// function getGreeting(name) {
//     let greeting = "hello ";
//     return greeting + name;
// }
// console.log(getGreeting('Ken'));

// (function(){
//     let myVar = "look mom, private variables!"
// })();



// let city = 'New Orleans';
// let greet = function() {
//     console.log(`Hello ${city}`);
// }

// greet();




// function outer() {
//     let x = 'I am X';
    
//     let inner = function() {
//         let y = "I am Y";
//         console.log(x);
//     }
//     inner();
   
// }

// outer();



let landscape = function() {
    let result = "";
    let flat = function(size) {
        for (let index = 0; index < size; index++) {
            result = result + "_";

        }
    }

    let mountain = function(size) {
        result = result + "/";
        for (let index = 0; index < size; index++) {
            // result = result + " '";
            result = result + "\\";

        }
    }

    flat(3);
    mountain(4);
    return result;
}

console.log(landscape());

let name = 'David';
let greet = function() {
    let name = 'Matt';
    console.log(name);
}
greet();
console.log(name);


function sayName() {
    console.log(this.name);
}

let teacher1 = {
    name: 'Ken',
    speak: sayName
};

let teacher2 = {
    name: 'Josh',
    speak: sayName
};

teacher1.speak();
teacher2.speak();