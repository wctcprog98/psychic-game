//global variables

var userGuess = "";
var wins = 0;
var losses = 0;
var guessesRemaining = "";
var lettersGuessed = [];
var wordsArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var secretLetter = "";
var guesses = 0;

//create startup function
//Hide gameOver
function startGame() {
     //gets randomword from array
     secretLetter = wordsArray[Math.floor(Math.random() * wordsArray.length)];
     console.log("Secret Letter is " + secretLetter);
     console.log(userGuess);

    $(".gameOver").hide();
    $(".gameDiv").show();

    //update values  
    guessesRemaining = 10;
    wins = 0;
    losses = 0;
    //change HTML 
    $(".guesses-remaining").text(guessesRemaining);
    $(".wins-text").text(wins);
    $(".guesses-remaining").text(losses);

}
startGame();

//function to hide div
function gameOver() {
    if (guessesRemaining === 0) {
        $(".gameDiv").hide();
        $(".gameOver").show();
        $("button").on("click", function () {
            startGame(); 
        })
    }
}
    //function to show div

    //grab user keys
    document.onkeyup = function (event) {
        guessesRemaining--; 
        //gets key pushed from user
        userGuess = event.key;
        console.log(userGuess);

        //guesses text updated to guesses remaining
        $(".guesses-remaining").text(guessesRemaining);
        console.log(guessesRemaining);
        if (guessesRemaining === 0) {
            gameOver();
        }

        secretLetter = secretLetter.toLowerCase();
        if (userGuess === secretLetter) {
            wins++;
            $(".wins-text").text(wins);
        }
        else {
            losses++;
            $(".losses-text").text(losses);
        }

    }

