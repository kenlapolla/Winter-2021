$.get('http://jsonplaceholder.typicode.com/posts', posts => {
    console.log("Posts");
    console.log(posts); //An Array of objects of posts with their associated Userts
	$.get('http://jsonplaceholder.typicode.com/users', users => {
        //Do something with posts and users
        console.log("Users");
        console.log(users); //An array of objects of the respective users of the system
	});
});