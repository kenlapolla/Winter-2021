function getUserByName(username) {
	return new Promise((resolve,reject) => {
		 $.get('http://jsonplaceholder.typicode.com/users?username=' + username, users => {
			 if(users.length > 0) {
			 	resolve(users[0]);
             } else {
				reject('User with name ' + username + 'not found');
             }
		 });
	})
}

function handleUsernameError(err){
		console.warn(err, 'Using id=1 instead');
		return {
			username: "Sample User",
			id: 1
		};
}

function getPostsByUser(user) {
    return new Promise((resolve,reject) => {
         $.get('http://jsonplaceholder.typicode.com/posts?userId=' + user.id, posts => {
             console.log("posts");
             console.log(posts);
             if(posts.length > 0){
                reject("No posts found");
             } else {
             resolve(posts);
             }
         });
    })
    }

function showUserItems(){
    getUserByName('Bret')
         .catch(handleUsernameError)
         .then(getPostsByUser).catch(handleUsernameError)
         .then(render);
         
}

showUserItems();