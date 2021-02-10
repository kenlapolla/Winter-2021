// let p = new Promise((resolve,reject) => {
// 	//do something async...and get a value
// 	let myAsyncValue = 'abc'
// 	setTimeout(()=> {
// 		console.log("I have fulfilled my promise");
// 		resolve(myAsyncValue);
// 	}, 2000);
	
// });
// console.log(p);
// console.log("Waiting on Promises as usual");
// p.then(data => {
// 	console.log(data);
// })


// function getUserByName(username) {
// 	return new Promise(
// 			(resolve, reject)=>
// 				{
// 					$.get('http://jsonplaceholder.typicode.com/users?username=' + username, users => {
// 						console.log("Promise Fulfilled", users[0]); 
// 						reject(users[0]);
// 					})
// 				}
// 		);
	
// }

// function getPostsByUser(user) {
// 	console.log(user);
// 	return new Promise((resolve, reject) => {
// 		$.get('http://jsonplaceholder.typicode.com/posts?userId=' + user.id, posts => {
// 			console.log("Promise Fulfilled for Posts", posts); 
// 		 	resolve(posts);
// 	 });
// 	})
// }

// function handleUsernameError(err){
// 	console.warn(err, 'Using id=1 instead');
// 	return {
// 		username: "Sample User",
// 		id: 1
// 	};
// }

// let p = getUserByName('Bret')

// .then(getPostsByUser)
// .catch(handleUsernameError);
// // getPostsByUser("1");


function getAllUsers() {
	return new Promise((resolve,reject) => {
			$.get('http://jsonplaceholder.typicode.com/users', users => {
				console.log("Promise Users Returned", users);
				resolve(users);
			})
	})

}

function getAllPosts() {
	return new Promise((resolve,reject) => {
		$.get('http://jsonplaceholder.typicode.com/posts', posts => {
				console.log("Promise Posts Returned", posts);
				resolve(posts);
			})
	})
}

let usersPromise = getAllUsers();
let postsPromise = getAllPosts();

Promise.all([usersPromise, postsPromise])
	.then(results => {
		let users = results[0];
		let posts = results[1];

		//Do something with users and posts
})