let request = require('request-promise');
let myObject = {
    getPost : (postID) => { 
          request('http://jsonplaceholder.typicode.com/posts/' + postID).then(function(reply){
             console.log(reply);
          });
        }
    }

module.exports = myObject;