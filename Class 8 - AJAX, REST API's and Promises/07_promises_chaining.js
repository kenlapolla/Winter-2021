//------------ dataService.js ------------
function getUserByName(username) {
    return new Promise(resolve => {
         $.get('http://jsonplaceholder.typicode.com/users?username=' + username, users => {
         console.log("Users");
         console.log(users);
             resolve(users[0]);
         });
     })
    }
    
    function getPostsByUser(user) {
    return new Promise(resolve => {
         $.get('http://jsonplaceholder.typicode.com/posts?userId=' + user.id, posts => {
             resolve(posts);
         });
    })
    }
    
    //------------ interface.js ------------
    
    function render(posts) {
        //render the posts data
        console.log(posts);
    }
    
    function showUserItems(){
      getUserByName('Bret')
       .then(getPostsByUser)
       .then(render);
    }
    
    showUserItems();