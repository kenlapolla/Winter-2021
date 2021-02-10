function getAllUsers() {
	return new Promise((resolve,reject) => {
			$.get('http://jsonplaceholder.typicode.com/users', users => {
                // resolve(users);
                reject("users");
			})
	})

}

function getAllPosts() {
	return new Promise((resolve,reject) => {
			$.get('http://jsonplaceholder.typicode.com/posts', posts => {
				resolve(posts);
			})
	})
}
function handleErrors(err){
    console.warn(err, 'Using id=1 instead');
    // return {
    //     username: "Sample User",
    //     id: 1
    // };
}
let usersPromise = getAllUsers();
let postsPromise = getAllPosts();

Promise.all([usersPromise, postsPromise]).catch(handleErrors)
	.then(results => {
        console.log(results);
		let users = results[0];
		let posts = results[1];

		//Do something with users and posts
});