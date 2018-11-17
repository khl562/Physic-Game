var computerGuess = random();

function random() {
    var CompGuess ="";
    var possible = "abcdefghijklmnopqrstuvwxyz"

    compGuess = possible.charAt(Math.floor(Math.random() * possible.length));

    return compGuess;
}



var guessLeft = 10;
var win = 0;
var lose = 0


//for (var i = 0; i < guessLeft; i++) {


    document.onkeyup = function(event) {
        var userGuess = event.key;
        $('#guessed').append(event.key);
            

        if (event.key != computerGuess) {
            guessLeft = guessLeft - 1;
        }

        if (event.key == computerGuess) {
            //function to reset computer guess, letters guessed, and guesses left
            win = win = 1;
            guessLeft = 10;
        }

        if (guessLeft <= 0) {
            lose = lose + 1;
            guessLeft = 10;
            //function to reset computer guess, letters guessed, and guesses left
        }

        document.getElementById('guess-left').innerHTML = guessLeft;

        document.getElementById('guessed').innerHTML = event.key;

        document.getElementById('comp-guess').innerHTML = computerGuess;

        document.getElementById('user-win').innerHTML = win;

        document.getElementById('user-loss').innerHTML = lose;
    }
//}