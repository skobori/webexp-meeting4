$(document).ready(function() {

	console.log("hello");

	function chooseCard() {
		valueRand = Math.floor((Math.random() * 13) + 1);
		if (valueRand === 1) {
			valueRand = "A";
		} else if (valueRand === 11) {
			valueRand = "J";
		} else if (valueRand === 12) {
			valueRand = "Q";
		} else if (valueRand === 13) {
			valueRand = "K";
		}

		value = String(valueRand);

		suitRand = Math.floor((Math.random() * 4) + 1);
		suit = "";
		if (suitRand === 1) {
			suit = "Spades"
		} else if (suitRand === 2) {
			suit = "Hearts"
		} else if (suitRand === 3) {
			suit = "Diamonds"
		} else {
			suit = "Clubs"
		}
		return {v: value, s: suit}
	}


	function cardToValue(card) {
		value = card.v;
		if (value === "A") {
			value = 14;
		}  else if (value === "J") {
			value = 11;
		} else if (value === "Q") {
			value = 12;
		} else if (value === "K") {
			value = 13;
		}
		return value;
	}

	player1 = {
		card: {v: "Q", s: "diamond"},
		points: 0
	}

	player2 = {
		card: {v: "Q", s: "diamond"},
		points: 0
	}

	function game() {
		player1.card = chooseCard();
		player2.card = chooseCard();

		$("#player .value").html(player1.card.v);
		$("#player .suit").html(player1.card.s);
		$("#dealer .value").html(player2.card.v);
		$("#dealer .suit").html(player2.card.s);

		console.log("hello");
		if (cardToValue(player1.card) > cardToValue(player2.card)) {
			player1.points += 1;
		} else if (cardToValue(player1.card) < cardToValue(player2.card)) {
			player1.points -= 1;
		}
		$(".score").html(player1.points);
	}

	$("#gameOn").click(game);

});

