// Word constructor function
var words = function() {
	this.firstWord = 'Hawkins';
	this.secondWord = 'Indiana';
	this.secondWord = 'Eleven';
	this.thirdWord = 'Demogorgon';
	this.fourthWord = 'Dartanion';
	this.fifthWord = 'The Upside Down';
	this.sixthWord = 'Mike Wheeler';
	this.seventhWord = 'Will Byers';
	this.eighthWord = 'Jim Hopper';
	};

// Choose random solution word
module.exports = function word() {
		var randomWord = words[Math.floor (Math.random () * words.length-1)];

		function blanksFromAnswer(result) {
			var result = "_";
			for(i = 0; i < randomWord.length; i++) {
				text += result;
			}
			console.log(result);
		}
  };
