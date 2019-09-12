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

	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
			alert("You found a match!");
		} else {
			alert("Sorry! Try again.");
		}
	}
}

function flipCard() {
	var cardID = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardID].cardImage);
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID]);
	checkForMatch();
}

/*
When the user clicks on a card, the image with the face of that card should be displayed. If the user has selected two cards, an alert should pop up letting the user know if the two cards match.
*/

function createBoard() {
	for (var i=0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();
/*
flipCard(0);
console.log(cardsInPlay[0].suit);
console.log(cardsInPlay[0].cardImage);
flipCard(2);
console.log(cardsInPlay[1].suit);
console.log(cardsInPlay[1].cardImage);
*/
// checkForMatch();







