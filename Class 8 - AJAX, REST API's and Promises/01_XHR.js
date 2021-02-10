const ajaxCall = () => {
    let ajaxRequest = new XMLHttpRequest();
   
    ajaxRequest.onreadystatechange = function() {
        if (ajaxRequest.readyState == XMLHttpRequest.DONE ) {
           if (ajaxRequest.status == 200) {
               let myDiv = document.querySelector('.listOne');
               let newDiv = document.createElement('div');
               newDiv.innerHTML = ajaxRequest.responseText;
               console.log(ajaxRequest);
               myDiv.appendChild(newDiv);
           }
           else if (ajaxRequest.status == 400) {
              console.log('There was an error 400');
           }
           else {
              console.log('something else other than 200 was returned');
           }
        }
    };

    ajaxRequest.open("GET", 'http://jsonplaceholder.typicode.com/posts', true);
    ajaxRequest.send();
}


let myBtn = document.getElementById('myButton');
myBtn.addEventListener('click', ajaxCall);

let clearList = document.getElementById('deleteList');
let todoList = document.querySelector('.listOne');
clearList.addEventListener('click', function(){
   todoList.innerHTML = "";
});
