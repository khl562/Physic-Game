var game = {
    //userGuess: usersGuess(),
    guessLeft: 9,
    //lettersGuessed: Guessed(),


    computerGuess: function() {
        var CompGuess =" ";
        var possible = "abcdefghijklmnopqrstuvwxyz"

        compGuess = possible.charAt(Math.floor(Math.random() * possible.length));

        return compGuess;

        
    },

}


var comp = game.computerGuess();


console.log(newFunction());

function newFunction() {
    document.getElementById('comp-guess').innerHTML = game.computerGuess();
}
