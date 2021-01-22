// setTimeout(function(){
//     console.log('later');
// }, 5000);

// console.log('now');


let teacher = {
	name: 'Shane',
	speak: function(a, b) {
        
        console.log(this.name,a,b);
        let callbackFunction = function() {
            console.log('later my name is ' + this.name);
        }.bind(this);
		//Maybe you're fetching data from an API, or getting user input
		setTimeout(callbackFunction,1000)
		
		//Runs immediately
		console.log('Now my name is ' + this.name);
	}
}

teacher.speak(1,2);



// let someFunction = function(...params) {

// }

// // ES6 Cool Kids Way
// let someFunction2 = (...params) => {

// }



let teacher2 = {
	name: 'Shane',
	speak: function(a, b) {
        
        console.log(this.name,a,b);
        let callbackFunction = () => {
            console.log('later my name is ' + this.name);
        };
		//Maybe you're fetching data from an API, or getting user input
		setTimeout(callbackFunction,1000)
		
		//Runs immediately
		console.log('Now my name is ' + this.name);
	}
}

teacher2.speak(1,2);



