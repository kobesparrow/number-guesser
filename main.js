

// Global Variables

var playerOneGuess = document.querySelector('.player-1-guess');
var playerTwoGuess = document.querySelector('.player-2-guess');
var updateButton = document.querySelector('.update-button');
var randomNumber = generateRandom();
var displayPlayerOneGuess = document.querySelector('.bigPinkPlayerOne');
var displayPlayerTwoGuess = document.querySelector('.bigPinkPlayerTwo');
var submitGuessButton = document.querySelector('.submit-guess');
var leftSectionScores = document.querySelector('#leftsection__scores');
var resetGameButton = document.querySelector('#resetGameButton-JS');
var clearGameButton = document.querySelector('#clearGameButton-JS')

// UPDATE button event
updateButton.addEventListener('click', function(e) {
  e.preventDefault();
  var min = parseInt(document.querySelector('#min').value);
  var max = parseInt(document.querySelector('#max').value);
  randomNumber = generateRandom(min, max);
  console.log(min, max)
  updateRangeDisplay(min, max);
  // updateMaxRangeDisplay(max);
});


// Update range display
function updateRangeDisplay(min, max) {
  // var minInput = min;
  var displayLow = document.querySelector('.displayLow');
  displayLow.innerText = min;
  // var maxInput = max;
  var displayHigh = document.querySelector('.displayHigh');
  displayHigh.innerText = max;
}

// function updateMaxRangeDisplay(max) { 
  // var maxInput = max;
  // var displayHigh = document.querySelector('.displayHigh');
  // displayHigh.innerText = maxInput;
// }

// our random number
function generateRandom(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min)) + min;
} 

// SUBMIT button event
submitGuessButton.addEventListener('click', function() {
  var playerOneName = document.querySelector('.player-one-name').value;
  var playerTwoName = document.querySelector('.player-two-name').value;
  var parsedNumberOne = Number.parseInt(playerOneGuess.value);
  var parsedNumberTwo = Number.parseInt(playerTwoGuess.value);
  var checkNumber1 = checkNumber(parsedNumberOne);
  var checkNumber2 = checkNumber(parsedNumberTwo);
  displayGuess('player-one', playerOneName, parsedNumberOne, checkNumber1);
  displayGuess('player-two', playerTwoName, parsedNumberTwo, checkNumber2);
})

// RESET game event
resetGameButton.addEventListener('click', function() {

})

// 
clearGameButton.addEventListener('click', function() {
  var playerOneName = document.querySelector('player-one-name').value;
  var playerTwoName = document.querySelector('player-two-name').value;

})

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
                          <p class ="player-result">${result}</p>
                        </section>`
  leftSectionScores.insertAdjacentHTML('beforeend', playerResults)
}

// Not a Number alert
// if (playerOneGuess === NaN) {
//   alert("Challenger One, please enter a number");
// }
// if (playerTwoGuess === NaN) {
//   alert("Challenger Two, please enter a number.");
// }


