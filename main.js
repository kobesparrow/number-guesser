
var minRangeInput = document.querySelector('.leftsection__range--minimum');
var maxRangeInput = document.querySelector('.leftsection__range--maximum');
var updateButton = document.querySelector('.leftsection__range--button');
var displayLow = document.querySelector('.leftsection__users--lowRange');
var displayHigh = document.querySeletor('.leftsection__users--highRange');

updateButton.addEventListener('click', function() {
  var minRangeString = minRangeInput.value;
  var minRange = parseInt(minRangeString, 10);
  var maxRangeString = maxRangeInput.value;
  var maxRange = parseInt(maxRangeString, 10);
  displayLow.innerText="minRangeString";
  displayHigh.innerText="maxRangeString";
})

function generateRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var randomNumber = generateRandom(minRange, maxRange);

var playerOneGuess = document.querySelector('.playerOneGuess');
var playerTwoGuess = document.querySelector('.playerTwoGuess');
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

if (challengerOneInt < randomNumber) {
  TKTKTK("that's too high");
} else if (challengerOneInt > randomNumber) {
  TKTKTKTK("that's too low");
} else {
   ENDOFGAMEFUNCTION 
}

if (challengerTwoInt < randomNumber) {
  TKTKTK("that's too high");
} else if (challengerTwoInt > randomNumber) {
  TKTKTKTK("that's too low");
} else {
   ENDOFGAMEFUNCTION 
}


