var wordList = ['pizza', 'hamburger', 'french fries', 'pasta', 'fried rice', 'gyro']

var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

var wins = 0;
var losses = 0;
var guesses = 7;
var userGuesses = [];


document.onkeydown = function(event) {
    var key = event.key;

    var playerGuess = key;
        userGuesses.push(playerGuess);

    var computerGuess = letterArray[Math.floor(Math.random()*letterArray.length)];

    var win = document.getElementById("wins");
    win.innerHTML = wins;

    var lose = document.getElementById("losses");
     lose.innerHTML = losses;

    var guess = document.getElementById("guessLeft");
     guess.innerHTML = guesses;
    
    var guessedLetters = document.getElementById('guesses');
     guessedLetters.innerHTML = userGuesses.join(', ');

    if (computerGuess === playerGuess) {
        wins++;
        guesses = 10;
        userGuesses = [];
        alert('You\'re psychic!');
    } else if (guesses <= 1) {
        losses ++;
        guesses = 10;
        userGuesses = [];
        alert('You lose!');
    } else if (computerGuess !== playerGuess) {
        guesses--;
    
    }


     
}









//function ()
    //initialize game score 

//cpu will pick random word
    //if user guess === indexof word.split (?)
        //input correct guess into empty space at indexof word
       
    
    //else 
        //guesses --
        //guessedLetters.push(key)
 
    //if guesses ===  0
        //alert
        //losses++
        //restart game
        //choose new word
    
    // //need to state a variable which will keep track of missing letters of the word. when variable reaches 0 
        //alert
        //wins++


