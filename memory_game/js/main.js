/*
console.log("Up and running!");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log("User flipped " + cardThree);
console.log("User flipped " + cardTwo);
*/

/*
	var cardOne = cards[0];
	cardsInPlay.push(cardOne);
	console.log("User flipped " + cardsInPlay[0] + ".");
	var cardTwo = cards[2];
	cardsInPlay.push(cardTwo);
	console.log("User flipped " + cardsInPlay[1] + ".");
*/

/*
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		}	else  alert("Sorry, try again");
	}
*/

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry! Try again.");
	}
}

function flipCard(cardID) {
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
	checkForMatch();
}

flipCard(0);
flipCard(2);
// checkForMatch();







