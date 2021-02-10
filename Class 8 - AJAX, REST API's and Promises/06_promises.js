let p = new Promise((resolve,reject) => {
	//do something async...and get a value
	let myAsyncValue = 'abc'
	resolve(myAsyncValue);
});

p.then(data => {
	console.log(data);
})