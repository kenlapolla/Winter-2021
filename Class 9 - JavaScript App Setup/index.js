let myModule = require('./myModule');
// let myModule = {
//     sayHi: () => {console.log("Hi")}
// };

// module.exports = myModule;
console.log(myModule.sayHi("Ken"));
console.log(module);

// const moment = require('moment');
// let a = moment(); //Timestamp right now
// console.log(a.format()); //Timestamp as UTC
// console.log(a.format('h:mm:ss a'));