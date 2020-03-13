//global variables
var userGuess = "";
var wordsArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var secretLetter = "";
var letter = ""; //used to clear data 

//start game
$(document).ready(function () {


   
    {
        
       
    function startGame() {
        //hide winning div
        $(".winDiv").hide();
        //hide game over div
        $(".gameOver").hide();
        //set/reset variables
        var guessesRemaining = 10;
        $("#guessesRemaining").text(guessesRemaining);
        $("#letterGuessed").text("");
        $(".highLow").text("");

        //gets randomword from array
        secretLetter = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        console.log("Secret Letter is " + secretLetter);

        //capture user input
            document.onkeypress = function (event) {
                //capture input and convert captial letters to lowercase
                userGuess = event.key.toLowerCase();
                //reduce guesses remaining
                guessesRemaining--;
                //append remaining guesses to screen
                $("#guessesRemaining").text(guessesRemaining);

                //append userGuess to screen
                $("#letterGuessed").text(userGuess);

                //test to see if capturing correct letter
                console.log(userGuess);

                //run comparison to see if letter guessed is higher or lower than the secret letter  
                highLow();
                if (guessesRemaining === 0) {
                    $(document).off('onkeypress');
                    console.log("hi"); 
                    //show game over div
                    $(".gameOver").show();
                    $("#playAgain").on("click", function () {
                        startGame();
                    });
                }

            }
        }

    }

    //check if value is higher or lower than letter guessed
    function highLow() {
        if (userGuess === secretLetter) {
            $(".winDiv").show();
            //restart game
            $("#play").on("click", function () {
                startGame();
            });
        }
        else if (userGuess < secretLetter) {
            $(".highLow").text("HIGHER");
        }
        else
            $(".highLow").text("LOWER");
    }

    startGame();

});

