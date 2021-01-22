// function add(number1, number2) {
//     return number1 + number2;
// }

// function doMath(operation, number1, number2) {
//     return operation(number1, number2);
// }

// let sum = doMath(add, 1, 2);
// console.log(sum);


//Filter
let students = [
    {
        firstName: 'John',
        lastName: 'Lennon',
        average: 90
    },
    {
        firstName: 'Ringo',
        lastName: 'Starr',
        average: 58
    },
    {
        firstName: 'Paul',
        lastName: 'McCartney',
        average: 82
    },
    {
        firstName: 'George',
        lastName: 'Harrison',
        average: 94
    }
];

// const passingStudents = students.filter(function(student){
//     return student.average > 50 ;
// });

// console.log(passingStudents);
// // let students2 = [];
// // for (let index = 0; index < students.length; index++) {
// //     if(students[index].average >  60)
// //         students2.push(students[index]);
// // }

// // console.log(students2);

// const passingStudents2 = students.find(function (something){
//     return something.average < 90 && something.firstName === "Paul";
// });

// console.log(passingStudents2);


// //Map Function
// const myNumber = 2;
// const myString = "This is my string " + myNumber;
// const myString2 = `This is my string ${myNumber}`;
// console.log(myString2);

// let firstNameLastName = students.map(function(student){
//     return `${student.firstName} ${student.lastName} has a ${student.average} average`;
// });

// console.log(firstNameLastName);


let totalAssignments = students.reduce(function(sum, student, currentIndex, source){
   
    return sum + student.average;
},0)

console.log(totalAssignments);