var Letter = require("./Letter");

function Word(word,letters,guessesRemaining) {
    this.word = word;
    this.letters = letters;
    this.guessesRemaining = guessesRemaining;
    this.parseLetters = function () {
        for (i = 0; i < word.length; i++) {
            this.letters.push(new Letter(this.word[i],false,"_"));
        }
    }
    this.guessString = function () {
        var guessString = [];
        for (i=0; i < this.word.length; i++) {
            this.letters[i].display();
            guessString.push(this.letters[i].current);
        };
        console.log("\n" + guessString.toString().replace(/,/g," ") + "\n" + "Guesses Remaining: " + this.guessesRemaining + "\n");
    };
    this.wrongGuess = function (guess) {
        switch(this.word.indexOf(guess)) {
            case -1:
                this.guessesRemaining--;
        }
    };
};

module.exports = Word;