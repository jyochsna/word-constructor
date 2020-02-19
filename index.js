var inquirer = require("inquirer");
var Letter = require("./Letter");
var Word = require("./Word");

var wordsArray = ["January" , "February", "March" , "April", "May", "June", "July" , "December"];

function startGame(){
    var currentUnguessed = 1;
    var randomPick = Math.floor(Math.random()*wordsArray.length);
    var randomWord = wordsArray[randomPick];
    var newWord = new Word(randomWord);
}

function userInput(){
    inquirer
    .prompt({
        type: "input",
        name: "guess",
        message: "Guess a Letter !",
    }).then(function(answers){
        console.log("----test---")
        console.log(answers);
        // currentUnguessed = 0;
        // for (i=0; i<newWord.letters.length; i++){
        //     switch(newWord.letters[i].letter){
        //         case(answer.guess):
        //         newWord.letter[i].guess(answer.guess);
        //         break;
        //     };
        //     switch
        // }
    })
}
startGame();
userInput();