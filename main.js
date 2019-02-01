
var playerOneGuess = document.querySelector('.value-input__guess');
var minRangeInput = document.querySelector('.column-left__range--highlowinputs');
var maxRangeInput = document.querySelector('.column-left__range--highlowinputs');
var updateButton = document.querySelector('.update-button');
var randomNumber = generateRandom(minRange, maxRange);
var displayLow = document.querySelector('.displayLow');
var displayHigh = document.querySelector('.displayHigh');
var min = document.getElementById('min');
var max = document.getElementById('max');

updateButton.addEventListener('click', function() {
  var minRangeString = minRangeInput.value;
  var minRange = parseInt(minRangeString, 10);
  var maxRangeString = maxRangeInput.value;
  var maxRange = parseInt(maxRangeString, 10);
  displayLow.innerText="minRangeString";
  displayHigh.innerText="maxRangeString";
})

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(randomNumber);

var playerTwoGuess = document.querySelector('.value-input__guess');
var submitGuessButton = document.querySelector('.submitGuess');
var displayPlayerOneGuess = document.querySelector('.bigPinkPlayerOne')
var displayPlayerTwoGuess = document.querySelector('.bigPinkPlayerTwo')
var playerOneNameBox = document.querySelector('.playerOneEnteredName');
var playerTwonameBox = document.querySelector('.playerTwoEnteredName');
var challengerOneDisplay = document.querySelector('.displayPlayerOneName')
var challengerTwoDisplay = document.querySelector('.displayPlayerTwoName')

submitGuessButton.addEventListener('click', function() {
  var playerOneGuessString = playerOneGuess.value;
  var playerTwoGuessString = playerTwoGuess.value;
  var challengerOneInt = parseInt(playerOneGuessString, 10);
  var challengerTwoInt = parseInt(playerOneGuessString, 10);
  displayPlayerOneGuess.innertext="playerOneGuessString";
  displayPlayerTwoGuess.innerText="playerTwoGuessString";
  var playerOneName = playerOneNameBox.value;
  var playerTwoName = playerTwoNameBox.value;
  challengerOneDisplay.innertext="playerOneName";
  challengerTwoDisplay.innertext="playerTwoname";
})  

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

