$.get('http://jsonplaceholder.typicode.com/posts', function(todos){
	console.log(todos);
});

// let myBtn = document.getElementById('myButton');
// myBtn.addEventListener('click', ajaxCall);

let clearList = document.getElementById('deleteList');
let todoList = document.querySelector('.listOne');
clearList.addEventListener('click', function(){
   todoList.innerHTML = "";
});
