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

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry! Try again.");
	}
}

function flipCard(cardID) {
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID]);
	checkForMatch();
}



flipCard(0);
console.log(cardsInPlay[0].suit);
console.log(cardsInPlay[0].cardImage);
flipCard(2);
console.log(cardsInPlay[1].suit);
console.log(cardsInPlay[1].cardImage);
// checkForMatch();







