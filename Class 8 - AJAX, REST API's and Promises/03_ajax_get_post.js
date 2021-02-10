$.get('http://jsonplaceholder.typicode.com/posts', {userId: 1}, t => {
    console.log("AJAX Request - GET " );
    console.log("Getting all posts by a specific user and returning an array of objects");
    console.log(t);
});


$.post('http://jsonplaceholder.typicode.com/posts', {		
        completed: false,
		title: "Teach Promises",
        userId: 1
    }, 
	response => {
		// Handle response, which usually contains the 
        // updated object including new ID's
        console.log("Ajax Request - POST");
        console.log("Adding a post to the list for a specific user and returning one object")
        console.log(response);

    })
    


//Replace todo with id: 1

$.ajax({
	method: 'PUT',
	url: 'http://jsonplaceholder.typicode.com/todos/1',
	data: {completed: false, title: "Teach REST", userId: 1},
	complete: (response) => {
        //handle response which usually includes the updated object.
        console.log("Ajax Request - PUT");
        console.log("Putting a todo item for a specific user")
        console.log(response);
        console.log(response.responseText);
	}
})

//Remove the object at '/todo/3'
let newObject = $.ajax({
	method: 'DELETE',
	url: 'http://jsonplaceholder.typicode.com/todos/3',
	complete: (response) => {
        //handle response
        console.log("Ajax Request - DELETE");
        console.log(response);
        console.log(response.statusText);
        console.log(response.responseText);
	}
})
