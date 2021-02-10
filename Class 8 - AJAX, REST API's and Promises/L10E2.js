//Look up the username entered by the username
/*

Write code that calls the placeholder API and logs the desired data to the console for the following scenarios:
Get all posts
Get post with id of 10
Get the comments from post with id of 12
note: comments are part of a different data model, you'll need to structure your endpoint to ask for all of the comments that belong to post #12
Get all the posts from user with id of 2
Create a new post and log the id generated for it by the server
Replace the post with id of 12 and render the responseJSON
Update the title of post with id of 12 and render responseJSON
Delete the post with id of 12 and render a success message
Display a list of posts.
When the user clicks on a post, display all the comments from that post
Display a link back to all posts

Challenge 2 - Part 2
Post View - Clicking on a post renders a post view, including:
Post title
Post text
A list of comments on the post
A back link to the user homepage
Album View - Clicking on an album renders the album page, including:
Thumbnails of all the photos and the photo's title
A search box that filters the photos by title as the user types
A back link to the user homepage
*/

var btnSubmit = document.getElementById('submit');
var names = new Array();
var userInfo = new Array();
var message1 = document.getElementById('#message');
var message2 = '';


//Helper Function to detect if the object is empty
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

$(document).ready(function(){
	
	getUsersListFromWeb()
	.then(users => buildUsernameSelection(users))
	.catch(err => console.log('Error', err.message));

	//Get All Posts By the user
	getAllPostsbyUserID(1)
	.then(posts => getPostById(posts[0].id))
	.catch(err => console.log('Error', err.message));

});
function buildUsernameSelection(response) {
	return new Promise((resolve, reject)=> {

		// console.log("Next Function");
		let userNameList = document.getElementById('lblUsername');
	// 		// console.log(userinfo);	
	// 			//Create a new DOM Element
		let newSelectInput = document.createElement('select');
	    newSelectInput.id = 'users';
	
	// 			//Loop through the list of names and create an option for each				
		response.forEach(function(selectedName, index){
	// 				console.log("Selected Name = ");
	// 				console.log(selectedName);
					newSelectInput.innerHTML += '<option value="' + selectedName.username + '\">' + selectedName.username + "</option>";
		});
		resolve(userNameList.appendChild(newSelectInput));

	});
}
function getUsersListFromWeb() {
	return new Promise((resolve, reject)=> {
		//jQuery.get( url [, data ] [, success ] [, dataType ] )
		$.get('http://jsonplaceholder.typicode.com/users', function(t){
    		// console.log(t);

		t.map(function(obj, index, array){
				//If the "key" is name then store that into an array
			if (obj.name){
					names.push({id: obj.id,username: obj.username}); //Push the names into the array
					userInfo.push(obj);
				}
			
			}); //End map
			
			if(names.length > 0) {
				resolve(names); //Respond that everything worked and pass the names array to the next object
			} else {
				reject(new Error('Names have not been found'));
			}
				// console.log(names);
			});
		})
}

function getAlbums(user) {
	return new Promise((resolve, reject)=> {
// 			//Find the table if it exists
			let albumTable = document.getElementById('albumList');
			albumTable.innerHTML = ''; //Clear the list
			
			// FORMAT: https://jsonplaceholder.typicode.com/albums?userId=1
			$.get('http://jsonplaceholder.typicode.com/albums', {userId: user}, function(data){
				data.forEach(function(objData,index){
					let newLi = `<li class="Album"><b>Album:</b> <span>${objData.title}</span></li>`;
					$('#albumList').append(newLi); //Add the List Item
					resolve(1);
				});
				
			});
	 
	});
}

function getAllPosts(){
	return new Promise((resolve, reject)=>{
		$.get('http://jsonplaceholder.typicode.com/posts', function(data) {
			//The request wants to have a callback function to call afterwards
			resolve(data);
		})
	})
}

function getAllPostsbyUserID(userId) {
	return new Promise((resolve, reject)=>{
		$.get('http://jsonplaceholder.typicode.com/posts',{userId: userId}, function(data) {
			//The request wants to have a callback function to call afterwards
			resolve(data);
		})
	})
}

//REST call 
function getPostById(postId) {
	return new Promise((resolve, reject)=>{
		$.get('http://jsonplaceholder.typicode.com/posts',{id: postId}, function(data) {
			resolve(data)
		});
	})
}

//REST Call 
function getAllCommentsbyPostId(postId){
	return new Promise((resolve, reject)=>{
		$.get(`http://jsonplaceholder.typicode.com/posts/${postId}/comments`, function(data) {
			//The request wants to have a callback function to call afterwards
			console.log("Comment Info", data);
			resolve(data);
		})
	})
}
//Helper Function to make a Posts List
function buildPostsList(data) {
	
		let postsTable = document.getElementById('postList');
		postsTable.innerHTML = ''; //Clear the list

				
		data.forEach(function(objData,index){
				//The List of Posts
				let newLi = `<li rowDetail = ${index} onclick="postDetail(${objData.id}, this)">${objData.title}</li>`;
				$('#postList').append(newLi);
				
		});

}
//Helper Function to make a Comments List
function buildCommentsList(data){
	let tempTable = document.getElementById('comments');
		tempTable.innerHTML = ''; //Clear the list

				
		data.forEach(function(objData,index){
				//The List of Posts
				let newLi = `<li rowDetail = ${index}>${objData.name}</li>`;
				$('#comments').append(newLi);
				
		});
}
//Called from the Posts List
function postDetail(postID, element){
	Promise.all([getPostById(postID), getAllCommentsbyPostId(postID)])
	.then(result => {
		result[0][0].title;
		$('#mainContent').find("h1").text(result[0][0].title);
		$('#mainContent').find("p").text(result[0][0].body);
		console.log("Comments Array", result[1]);	

		buildCommentsList(result[1]);
	})
	
}
//Add an Event listener tom the submit button
btnSubmit.addEventListener('click', function(event){
	event.preventDefault();
	
	//Get the id of the selected User
	let selectedElement = document.getElementById('users');
	let userID = selectedElement.selectedIndex + 1;
	console.log("User ID 1", userID);
	
	//Run a Parallel Promise for Posts and Albums by User
	Promise.all([getAllPostsbyUserID(userID), getAlbums(userID)]).then(result => {
		//Build the Posts and Albums Lists
		buildPostsList(result[0]);
		console.log(result);
	})
 });

 