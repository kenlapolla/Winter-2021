// const myMod = require('./Modules/myModule');
const DA = require('./Modules/dataAccess');
const TS = require('./Modules/timeStamp');
// myMod.sayHi('Ken');
console.log(TS.getTime());


setInterval(()=>{
    let myDataAccess = DA.getPost(2);
    console.log(TS.getTime());
},3000)
