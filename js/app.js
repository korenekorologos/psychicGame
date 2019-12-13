var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    var guessLetters = [];
    var wins = 0;
    var numGuesses = 9;
    var losses = 0;


    document.onkeyup = function (event) {


      var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
      var userGuess = event.key;
      var computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];



      if (letterOptions.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
          wins++;
          numGuesses = 9;
          guessLetters = [];
        }

        if (userGuess != computerGuess) {
          numGuesses--;
          guessLetters.push(userGuess);
        }

        if (numGuesses === 0) {

          numGuesses = 9;
          losses++;
          guessLetters = [];


        }

        var html =
          "<h1> The Psychic Game </h1>" +
          "<h3>Guess what letter I'm thinking of</h3>" +
          "<h3>Wins: " + wins + "</h3>" +
          "<h3>Losses: " + losses + "</h3>" +
          "<h3>Guesses Left: " + numGuesses + "</h3>" +
          "<h3>Your Guesses so far: " + guessLetters.join(", ") + "</h3>";
        document.querySelector("#psychicGame").innerHTML = html;

      }
    }