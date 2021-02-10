let littleOne = [];
let howTheyMarch = ["one by one", "two by two", "three by three", "four by four", "five by five", "six by six", "seven by seven", "eight by eight", "nine by nine", "ten by ten"];

littleOne[0] = "The little one stops to suck her thumb";
littleOne[1] = "The little one stops to tie his shoe";
littleOne[2] = "The little one stops to climb a tree";
littleOne[3] = "The little one stops to shut the door";
littleOne[4] = "The little one stops to take a dive";
littleOne[5] = "The little one stops to pick up sticks";
littleOne[6] = "The little one stops to pray to heaven";
littleOne[7] = "The little one stops to roll a skate";
littleOne[8] = "The little one stops to check the time";
littleOne[9] = "The little one stops to shut The End";

function theAntsGoMarching(){
	for (let i = 0; i < howTheyMarch.length; i++){
		howManyByHowMany(i);
		console.log(littleOne[i]);
		console.log("And they all go marching down to the ground to get out of the rain, BOOM! BOOM! BOOM!");
	}
}




function howManyByHowMany(number){
	let numbers = howTheyMarch[number];
	let hurrah = " hurrah, hurrah \n";
	let march = "The ants go marching " + numbers;
    // debugger
	console.log(march + hurrah + march + hurrah + march);
}

theAntsGoMarching();