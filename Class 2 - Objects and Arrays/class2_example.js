console.log("Hi Coding Family");

let teachers = ['Shane','Chris', 'Zack', 'Ken'];
// console.log(teachers[3]);
teachers.push('Olga');
teachers[5] = 'James Taylor';

// console.log(teachers.toString());
// console.log(teachers.join(' '));
// console.log(teachers.sort());
// console.log(teachers.reverse());
// //For Each

// teachers.forEach(function(arrayItem, testIndex) {
//     console.log(arrayItem,testIndex);
// });

// for (let index = 0; index < teachers.length; index++) {
//     console.log(teachers[index], index);
// }
// square(2);
// function square(numberComingIn) {

// }


// //Stack
// while(teachers.length > 0){
//     console.log(teachers.length);
//     if(teachers.indexOf('Ken') > 0 ){
//         console.log("Ken is at index " + teachers.indexOf('Ken'));
//     }
    
//     console.log(teachers.pop());
    
// }
// console.log("---------------------");

// //Queue
// let teachers2 = ['Shane','Colton', 'Zack', 'Ken'];
// teachers2.unshift('Sierra');
// while(teachers2.length > 0){
//     console.log(teachers2.length);
//     console.log(teachers2.shift());
// }


// //Slice
// let a = [1,2,3,4];
// // let newArray = a.slice(0,2);
// // console.log(newArray);

// // console.log('ken'.slice(0,2));

// //Splice
// a.splice(1,2,'a','b');
// console.log(a);

// let random = ["Hello", "world", true, 99];
// let newArray = [1,2, ...random, 3];

// console.log(newArray);


// let hi = "Hello World"
// let hiArray = [ ...hi ]

// console.log(hiArray);


//Spread Operator

let teachers3 = ['Colton', ...teachers, 'Sierra'];
console.log(teachers3);

let hello = "Hello World";
let hiArray = [...hello];
console.log(hiArray);

// let x = teachers3[0];
// let y = teachers3[1];
// let z = teachers3[2];
let[...rest] = teachers3;

console.log(rest);

//Objects

let course = {
    name: 'JavaScript Applications',
    awesome: true,
    teachers: ['Ken', 'Josh']
};

let selectedValueOfDropDown = 'name';
course.teachers[2] = 'Chris';
console.log(course.awesome);
console.log(course['teachers'][2]);


let instructor = {
    name: 'Ken',
    email: 'ken@techtalentsouth.com'
}
let { name: x, email: y} = instructor;

console.log(x);