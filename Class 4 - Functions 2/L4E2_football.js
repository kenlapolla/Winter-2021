let players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

//Find a player with the name Mike
let foundPlayer = players.find(function(mike) {
    return mike.firstName == 'Mike';
});
console.log(foundPlayer);

//Get an array of all players in the RB position
let rbPlayers = players.filter(function(rb){
    return rb.position.toLowerCase() == 'rB'.toLowerCase() ;
});
console.log(rbPlayers);


//Get an array of all the players lastNames
let lastNames = players.map(function(lastNamesFound){
    return lastNamesFound.lastName;
})
console.log(lastNames);

//Get an array of the full names of all the running backs with more than 5 touchdowns

let rbFullNames = players.filter(function(rb){
    return rb.position.toLowerCase() == 'rB'.toLowerCase() && rb.touchdowns > 5 ;
});


let rbFullNamesFinal = rbFullNames.map(function(rbFullName){
    return `${rbFullName.firstName} ${rbFullName.lastName}`;
});

console.log(rbFullNamesFinal);

//Get the number of touchdowns scored by Running backs
let rbScore = rbPlayers.reduce(function(sum, current){
    return sum + current.touchdowns;
}, 0);
console.log(rbScore);


console.log(players.filter(function(player){
    return player.touchdowns > 5 && player.position == 'RB';
}).map(function(player){
    return `${player.firstName} ${player.lastName}`;
}));


console.log(players.filter(function(player){
    return player.position =='RB';
}).reduce(function(total, player){
    
    return total + player.touchdowns;
},0));	
    