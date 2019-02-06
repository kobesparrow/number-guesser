

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
var clearGameButton = document.querySelector('#clearGameButton-JS');
var p1 = document.querySelector('.player-one-name');
var p2 = document.querySelector('.player-two-name');
var g1 = document.querySelector('#guess1');
var g2 = document.querySelector('#guess2');
var disableButtons = document.querySelector('.column-left__users');



// UPDATE button event
updateButton.addEventListener('click', function(e) {
  e.preventDefault();
  var min = parseInt(document.querySelector('#min').value);
  var max = parseInt(document.querySelector('#max').value);
  randomNumber = generateRandom(min, max);
  console.log(min, max)
  updateRangeDisplay(min, max);
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
  // resetGameButton.disabled=false;
  // resetGameButton.disabled=false;
})

// RESET game event
resetGameButton.addEventListener('click', function() {
  clearGame()
  generateRandom()
  resetGameButton.disabled=true;
  clearGameButton.disabled=true
})

clearGameButton.addEventListener('click', clearGame())

function clearGame() {
  p1.value="";
  p2.value="";
  g1.value="";
  g2.value="";
}

function disableBtn() {
  if (p1.value || p2.value || g1.value || g2.value){
    resetGameButton.disabled=false;
    clearGameButton.disabled=false;
  } else {
    resetGameButton.disabled=true;
    clearGameButton.disabled=true;
  }
}

disableButtons.addEventListener('keyup', disableBtn());

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


