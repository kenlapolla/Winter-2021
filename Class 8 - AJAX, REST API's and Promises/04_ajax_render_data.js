//Rendering data from a list
//Get reference to the list element
let list = $('ul#userList');

//Make a GET request for the items to render
$.get('http://jsonplaceholder.typicode.com/users', function(users){
    //Iterate over the response, adding elements to DOM
    console.log("Building HTML List from a returned array of objects");
    console.log(users);
	users.forEach(function(user){
		var li = $('<li></li>');
		li.text(user.name);
		list.append(li);
	})
})


$.ajax('http://jsonplaceholder.typicode.com/users',{
	method: 'GET',
	complete: response => {
		console.log("Users on system");
		console.log(response);
		console.log(response.responseJSON);
	}
});
