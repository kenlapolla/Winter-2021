const rp = require('request-promise');
const moment = require('moment');

function logResponse(resp){
    console.log(resp, moment().format("h:mm:ss a"));
  }
   
//   setInterval(async () => {
//     logResponse(await rp('http://jsonplaceholder.typicode.com/posts/1')
    
//     );
//   },3000)


  setInterval( async ()=> {
    logResponse(await rp('http://jsonplaceholder.typicode.com/posts/1'))
  },3000);