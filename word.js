// Word constructor function
var words = [
		"Hawkins",
		"Indiana",
		"Eleven",
		"Demogorgon",
		"Dartanion",
		"The Upside Down",
		"Mike Wheeler",
		"Will Byers",
		"Jim Hopper",
	];
	var remGuesses = 15;
	var randomWord = words[Math.floor (Math.random () * words.length -1)];
	var wrongLetters = [];

// Choose random solution word
module.exports = function word () {
		var randomWord = words[Math.floor (Math.random () * words.length)];
  };

	console.log(randomWord);
