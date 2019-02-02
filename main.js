
var playerOneGuess = document.querySelector('.value-input__guess');
var updateButton = document.querySelector('.update-button');
var randomNumber = generateRandom();
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
  generateRandom();
  updateMinRangeDisplay();
  updateMaxRangeDisplay();
});

function updateMinRangeDisplay() {
  var minInput = parseInt(document.querySelector('#min').value);
  var displayLow = document.querySelector('.displayLow');
  displayLow.innerText = minInput;
}

function updateMaxRangeDisplay() {
  var maxInput = parseInt(document.querySelector('#max').value);
  var displayHigh = document.querySelector('.displayHigh');
  displayHigh.innerText = maxInput;
}

function generateRandom(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// submitGuessButton.addEventListener('click', function() {
//   var playerOneGuessString = playerOneGuess.value;
//   var playerTwoGuessString = playerTwoGuess.value;
//   var challengerOneInt = parseInt(playerOneGuessString, 10);
//   var challengerTwoInt = parseInt(playerOneGuessString, 10);
//   displayPlayerOneGuess.innertext="playerOneGuessString";
//   displayPlayerTwoGuess.innerText="playerTwoGuessString";
//   var playerOneName = playerOneNameBox.value;
//   var playerTwoName = playerTwoNameBox.value;
//   challengerOneDisplay.innertext="playerOneName";
//   challengerTwoDisplay.innertext="playerTwoname";
// })  

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

