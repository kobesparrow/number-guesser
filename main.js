var playerOneGuess = document.querySelector('.player-1-guess');
var playerTwoGuess = document.querySelector('.player-2-guess');
var updateButton = document.querySelector('.update-button');
var randomNumber = generateRandom();
var displayPlayerOneGuess = document.querySelector('.bigPinkPlayerOne');
var displayPlayerTwoGuess = document.querySelector('.bigPinkPlayerTwo');
var submitGuessButton = document.querySelector('.submit-guess');
var leftSectionScores = document.querySelector('#leftsection__scores');
var resetGameButton = document.querySelector('.reset-game');
var clearGameButton = document.querySelector('.clear-game');
var p1 = document.querySelector('.player-one-name');
var p2 = document.querySelector('.player-two-name');
var g1 = document.querySelector('#guess1');
var g2 = document.querySelector('#guess2');
var disableButtons = document.querySelector('.column-left__users');
var initialMin = document.querySelector('#min');
var initialMax = document.querySelector('#max');
var displayLow = document.querySelector('.displayLow');
var displayHigh = document.querySelector('.displayHigh');
var parsedNumberOne = Number.parseInt(playerOneGuess.value);
var parsedNumberTwo = Number.parseInt(playerTwoGuess.value);


updateButton.addEventListener('click', function(e) {
  e.preventDefault();
  var min = parseInt(document.querySelector('#min').value);
  var max = parseInt(document.querySelector('#max').value);
  randomNumber = generateRandom(min, max);
  updateRangeDisplay(min, max);
  testMaxValue(min, max);
  requiredMinRange();
  requiredMaxRange();
}); 

function requiredMinRange() {
  var noName = document.querySelector('#min').value;
  if (noName === "") {
    alert("Please enter a minimum range.")
    displayLow.innerText = "?";
  }
}

function requiredMaxRange() {
  var noName = document.querySelector('#max').value;
  if (noName === "") {
    alert("Please enter a maximum range.")
    displayHigh.innerText = "?";
  }
}

function updateRangeDisplay(min, max) {
  var displayLow = document.querySelector('.displayLow');
  displayLow.innerText = min;
  var displayHigh = document.querySelector('.displayHigh');
  displayHigh.innerText = max;
}

function testMaxValue(min, max) {
  if (min > max) {
    alert("Please input minimum and maximum range sequentially");
    initialMin.value="";
    initialMax.value="";
    displayLow.innerText = "?";
    displayHigh.innerText = "?";
  }
}


function generateRandom(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min)) + min;
} 

submitGuessButton.addEventListener('click', function() {
  var playerOneName = document.querySelector('.player-one-name').value;
  var playerTwoName = document.querySelector('.player-two-name').value;
  var parsedNumberOne = Number.parseInt(playerOneGuess.value);
  var parsedNumberTwo = Number.parseInt(playerTwoGuess.value);
  var checkNumber1 = checkNumber(parsedNumberOne);
  var checkNumber2 = checkNumber(parsedNumberTwo);
  displayGuess('player-one', playerOneName, parsedNumberOne, checkNumber1);
  displayGuess('player-two', playerTwoName, parsedNumberTwo, checkNumber2);
  requiredNamePlayerOne();
  requiredNamePlayerTwo();
  requiredGuessPlayerOne();
  requiredGuessPlayerTwo();
  guessOutsideRangePlayerOne();
  guessOutsideRangePlayerTwo();
})

function guessOutsideRangePlayerOne() {
  var guessRangeMin = parseInt(document.querySelector('#min').value);
  var guessRangeMax = parseInt(document.querySelector('#max').value);
  var numberGuessie = document.querySelector('.player-1-guess').value;
  if (numberGuessie < guessRangeMin) {
    alert("Player one guess out of range.");
    g1.value="";
  }
  if (numberGuessie > guessRangeMax) {
    alert("Player one guess out of range.");
    g1.value="";
  }
}

function guessOutsideRangePlayerTwo() {
  var guessRangeMin = parseInt(document.querySelector('#min').value);
  var guessRangeMax = parseInt(document.querySelector('#max').value);
  var numberGuessie = document.querySelector('.player-2-guess').value;
  if (numberGuessie < guessRangeMin) {
    alert("Player two guess out of range.");
    g2.value="";
  }
  if (numberGuessie > guessRangeMax) {
    alert("Player two guess out of range.");
    g2.value="";
  }
}

function requiredNamePlayerOne() {
  var noName = document.querySelector('.player-one-name').value;
  if (noName === "") {
    alert("Player one please enter a name.")
  }
}

function requiredNamePlayerTwo() {
  var noName = document.querySelector('.player-two-name').value;
  if (noName === "") {
    alert("Player two please enter a name.")
  }
}

function requiredGuessPlayerOne() {
  var noName = document.querySelector('.player-1-guess').value;
  if (noName === "") {
    alert("Player one please enter a guess.")
  }
}

function requiredGuessPlayerTwo() {
  var noName = document.querySelector('.player-2-guess').value;
  if (noName === "") {
    alert("Player two please enter a guess.")
  }
}

resetGameButton.addEventListener('click', function() {
  clearGame()
  generateRandom()
  initialMin.value="";
  initialMax.value="";
  document.querySelector(".reset-game").disabled = true;
})

clearGameButton.addEventListener('click', function() {
  p1.value="";
  p2.value="";
  g1.value="";
  g2.value="";
  document.querySelector(".clear-game").disabled = true;
});

function clearGame() {
  p1.value="";
  p2.value="";
  g1.value="";
  g2.value="";
}

document.querySelector(".reset-game").disabled = true;
document.querySelector(".clear-game").disabled = true;

disableButtons.addEventListener('keyup', function() {
  document.querySelector(".clear-game").disabled = false;
  document.querySelector(".reset-game").disabled = false;
});


function checkNumber(challengerGuess) {
if (challengerGuess === randomNumber) {
  return "Boom!";
} else if (challengerGuess > randomNumber) {
  return "that's too high";
} else {
  return "that's too low";
  }
}

function displayGuess (player, playerName, playerGuess, result) {
  var playerResults = `<section class="${player}"> 
                          <p class="display-player-name">${playerName}</p>
                          <p class="current-guess">current guess</p>
                          <p class="big-pink-number">${playerGuess}</p>
                          <p class="player-result">${result}</p>
                        </section>`
  leftSectionScores.insertAdjacentHTML('beforeend', playerResults)
}


