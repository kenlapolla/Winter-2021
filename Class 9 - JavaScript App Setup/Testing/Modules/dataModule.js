let request = require('request-promise');
let getOptions = {
    uri: 'http://jsonplaceholder.typicode.com/todos/',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};
let myObject = {
    getPost : (postID) => { 
          return request('http://jsonplaceholder.typicode.com/posts/' + postID);
               
        },
    getTodos: () => {
        return request(getOptions); //Return the Promise
        },
        getUsers: () => {
           return request('http://jsonplaceholder.typicode.com/users/');
            
        }
        
                  
    }

module.exports = myObject;