let hands = ['rock', 'paper', 'scissors'];

function getComputerHand(){ 
    return hands[parseInt(Math.random()*3)]
}

function compare(choice1, choice2){ 
	console.log("Player1: " + choice1);
    console.log("Player2: " + choice2);
  choice1 = choice1.toLowerCase();
  choice2 = choice2.toLowerCase();
  if (choice1 == choice2){
		return "Tie!";
  }
  if (choice1 == "rock"){
		if (choice2 == "paper"){
    	return "Player2 Won!";
		}
    else{
    	return "Player1 Won!";
    }
  }
  else if (choice1 == "paper"){
  	if (choice2 == "scissors"){
    	return "Player2 Won!";
    }
    else{
    	return "Player1 Won!";
    }
  }
  else if (choice1 == "scissors"){
  	if (choice2 == "rock"){
    	return "Player2 Won!"
    }
    else{
    	return "Player1 Won!"
    }
  }
}

function checkAnswers(){
  //Get the value from the selection
  let choiceOption = document.getElementById("rpsSelection");
  let answer = choiceOption.value;
  // choiceOption.innerHTML(reply)

// let choice1 = getComputerHand(); // computer's choice
  let choice1 = answer;
  let choice2 = getComputerHand(); // our choice
  let game_result = compare(choice1, choice2); // get the result
  let answerParagraph = document.getElementById('answer');
  answerParagraph.innerText = game_result;
  console.log(game_result); // log the result
}
