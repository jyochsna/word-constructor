
var Word = require("./word.js");
var inquirer = require("inquirer");

//
var guessCount = 10;
var word;
var wordsArray = ["apple", "banana", "watermelon", "oranges", "kiwis"];
var wordGuess ;
//
startGame();

function startGame() {
    guessCount = 10;
    wordGuess - [];
    var randomWord = Math.floor(Math.random() * wordsArray.length);
 
    word = new Word(wordsArray[randomWord]);
    
}

// 
function prompt() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a letter!",
                name: "letter"
            }
        ])
        .then(response => {
            // 
            if (guesses.indexOf(response.letter) === -1) {
                guesses.push(response.letter);
                if (word.check(response.letter)) correct();
                else incorrect();
            } else {
                trace("\nYou already guessed that letter.  Please guess again.\n");
                prompt();
            }
        });
}

function correct() {
    word.display();
    trace("\nCORRECT!!!\n");
    if (word.done) {
        if (word_arr.length > 0) {
            trace("You got it right!! Next word!\n");
            startGame();
        } else {
            trace("Congratulations! You guessed all the words!!");
        }
    } else {
        prompt();
    }
}

function incorrect() {
    word.display();
    trace("\nINCORRECT!!!\n");
    trace(--qCnt, "guesses remaining!!!\n");
    if (qCnt === 0) {
        trace("You're out of guesses.\n");
        playAgain();
    } else {
        prompt();
    }
}

function playAgain() {
    inquirer
        .prompt([
            {
                type: "confirm",
                message: "Would you like to play again?",
                name: "confirm",
                default: true
            }
        ])
        .then(response => {
            // 
            if (response.confirm) {
                startGame();
            }
        });
}

function trace(...args) {
    console.log(args.join(' '));
}