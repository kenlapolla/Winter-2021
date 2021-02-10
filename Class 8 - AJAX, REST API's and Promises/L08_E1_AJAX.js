// 1) Get all posts
// $.get('http://jsonplaceholder.typicode.com/posts', data => {
// 	console.log(data);
// });

// 2) Get post with id of 10
$.get('http://jsonplaceholder.typicode.com/posts', data => {
    console.log(data); //All Posts
    $.get(`http://jsonplaceholder.typicode.com/posts/${data[0].id}`, data2 => {
        console.log(data2);
    });
	
});

// // 3) Get the comments from post with id of 12
// $.get('http://jsonplaceholder.typicode.com/post/12/comments', data => {
// 	console.log(data);
// });

// // 4) Get all the posts from user with id of 2
// $.get('http://jsonplaceholder.typicode.com/user/2/posts', data => {
// 	console.log(data);
// });

// // 5) Create a new post and log the id generated for it by the server
// $.post('http://jsonplaceholder.typicode.com/posts',{
// 	userId: 1,
// 	title: "My New Post",
// 	body: "This is the body"
// }, data => {
// 	console.log(data.id)
// })

// // 6) Replace the post with id of 12
// $.ajax({
// 	method: 'PUT',
// 	url: 'http://jsonplaceholder.typicode.com/posts/12',
// 	data: {
// 		userId: 1,
// 		title: "New Post",
// 		body: "New post added"
// 	},
// 	complete: response => {
// 		console.log(response.responseJSON);
// 	}
// })

// // 7) Update the title field of the post with id of 12
// $.ajax({
// 	method: 'PATCH',
// 	url: 'http://jsonplaceholder.typicode.com/posts/12',
// 	data: {
// title: "patched it"
// },
// 	complete: response => {
// 		console.log(response.responseJSON);
// 	}
// })

// // 8) Delete the post with id of 12
// $.ajax({
// 	method: 'DELETE',
// 	url: 'http://jsonplaceholder.typicode.com/posts/12',
// 	complete: response => {
// 		console.log(response.statusText);
// 	}
// })