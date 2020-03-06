//global variables

var userGuess = "";
var wins = 0;
var losses = 0;
var lettersGuessed = [];
var wordsArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var secretLetter = "";
var guesses = 0;
var guessesRemaining = 10;

//create startup function
//Hide gameOver
function startGame() {
     //gets randomword from array
     secretLetter = wordsArray[Math.floor(Math.random() * wordsArray.length)];
     console.log("Secret Letter is " + secretLetter);
    console.log(userGuess);

    $(".gameOver").hide();
    $(".gameDiv").show();
    $("#guessesRemaining").text()

    //update values  
    lettersGuessed = ""; 
    guessesRemaining = 10; 
    //change HTML 
    $("#guessesRemaining").text(guessesRemaining);
    $("#letterGuessed").text(lettersGuessed); 

}
function highLow() {
    if (userGuess === secretLetter) {
        $(".highLow").text("WINNER"); 
    }
    else if (userGuess < secretLetter) {
        $(".highLow").text("HIGHER"); 
    }
    else
    $(".highLow").text("LOWER"); 
}
startGame();

//function to hide div
function gameOver() {
    if (guessesRemaining === 0) {

        $(".gameDiv").hide();
        $(".gameOver").show();
        $("#playAgain").on("click", function () {
            startGame(); 
        })
        
    }
    else if (userGuess === secretLetter)
    {
        $("gameDiv").hide();
        $(".winDiv").show();
        }
}
    //function to show div

    //grab user keys
    document.onkeyup = function (event) {
        guessesRemaining--; 
        //gets key pushed from user
        userGuess = event.key;
        console.log(userGuess);
        $("#letterGuessed").text(userGuess); 

        highLow();
        //guesses text updated to guesses remaining
        $("#guessesRemaining").text(guessesRemaining);
        console.log(guessesRemaining);
        if (guessesRemaining === 0) {
            gameOver();
        }

        secretLetter = secretLetter.toLowerCase();
        if (userGuess === secretLetter) {
            wins++;
            $("#wins").text(wins);
        }
        else {
            losses++;
            $("#losses").text(losses);
        }
    
    }

