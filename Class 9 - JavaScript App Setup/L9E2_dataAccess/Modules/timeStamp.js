const Moment = require('moment');
let a = new Moment();

let myObject = {
    getTime : () => {
        // console.log(a.format('h:mm:ss a'));
        return a.format('h:mm:ss a');
    }   
};
module.exports = myObject;