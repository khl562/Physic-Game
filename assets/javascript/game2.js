



var guessLeft = 10;
var win = 0;
var lose = 0; 


$(document).ready(function() {




console.log(computerGuess);
    

    // for(var i = 0; i < guessLeft; i++) {
        var computerGuess = random();

        function random() {
            var possible = "abcdefghijklmnopqrstuvwxyz"
            var compGuess = possible.charAt(Math.floor(Math.random() * possible.length));

            return compGuess;
        };

        document.onkeyup = function(event) {
            $('#guessed').append(event.key);
        

        if (event.key != computerGuess) {
            guessLeft = guessLeft - 1;
        };

        if (event.key == computerGuess) {
        //function to reset computer guess
            win = win + 1;
            guessLeft = 10;
            $('#guessed').empty();
            computerGuess = random();
        };

        if (guessLeft <= 0) {
            lose = lose + 1;
            $('#guessed').empty();
            guessLeft = 10;
            computerGuess = random();
        //function to reset computer guess
        }

        document.getElementById('guess-left').innerHTML = guessLeft;

        // document.getElementById('comp-guess').innerHTML = computerGuess;

        document.getElementById('user-win').innerHTML = win;

        document.getElementById('user-loss').innerHTML = lose;
    };

    

    



});