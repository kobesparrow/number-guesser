

// Global Variables

var playerOneGuess = document.querySelector('.value-input__guess');
var randomNumber = generateRandom();
var updateButton = document.querySelector('.update-button');
var playerTwoGuess = document.querySelector('.value-input__guess');
var submitGuessButton = document.querySelector('.submitGuess');
var displayPlayerOneGuess = document.querySelector('.bigPinkPlayerOne')
var displayPlayerTwoGuess = document.querySelector('.bigPinkPlayerTwo')
var playerOneNameBox = document.querySelector('.playerOneEnteredName');
var playerTwonameBox = document.querySelector('.playerTwoEnteredName');
var challengerOneDisplay = document.querySelector('.displayPlayerOneName')
var challengerTwoDisplay = document.querySelector('.displayPlayerTwoName')

updateButton.addEventListener('click', function(e) {
  e.preventDefault();
  var min = parseInt(document.querySelector('#min').value);
  var max = parseInt(document.querySelector('#max').value);
  randomNumber = generateRandom(min, max);
  updateMinRangeDisplay(min);
  updateMaxRangeDisplay(max);
});

function updateMinRangeDisplay(min) {
  var minInput = min;
  var displayLow = document.querySelector('.displayLow');
  displayLow.innerText = minInput;
}

function updateMaxRangeDisplay(max) { 
  var maxInput = max;
  var displayHigh = document.querySelector('.displayHigh');
  displayHigh.innerText = maxInput;
}

function generateRandom(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min)) + min;
} 


function checkNumber1() {
if (challengerOneInt === randomNumber) {
  return "Boom!";
} else if (challengerOneInt > randomNumber) {
  return "that's too high";
} else {
  return "that's too low";
  }
}
  
function checkNumber2() {
if (challengerTwoInt === randomNumber) {
  return "Boom!";
} else if (challengerTwoInt > randomNumber) {
    return "that's too high!";
} else {
    return "that's too low!";
  }
}

