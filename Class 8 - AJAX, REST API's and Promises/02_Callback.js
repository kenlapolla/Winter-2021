console.log('Before');
getUser(1, function(user){
    console.log('User', user);
});

console.log('After');
function getUser(id, callback) {
    //Value won't be available
    setTimeout(() => {
        console.log('Reading information from a database...');
        callback( {id: id, gitHubUserName: 'ken'});
    }, 2000)
   
}