var newLetter;

function Letter(letter,guessed,current) {
    this.letter = letter;
    this.guessed = guessed;
    this.current = current;
    this.display = function (){
        switch (this.guessed) {
            case true:
                this.current = this.letter;
                break;
            case false:
                this.current = "_";
                break;
        };
    };
    this.guess = function guess(guess) {
        if (this.letter === guess) {
            this.guessed = true;
        } else {
            this.guessed = false;
        }
    };
}

module.exports = Letter;