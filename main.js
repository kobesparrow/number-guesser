

// Global Variables

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
// var min = parseInt(document.querySelector('#min').value);
// var max = parseInt(document.querySelector('#max').value);

// function displayLowAlert() {
//  if (displayLow === NaN); {
//     alert("Please input a number before submitting.");
//   }
// } 


// UPDATE button event
updateButton.addEventListener('click', function(e) {
  e.preventDefault();
  var min = parseInt(document.querySelector('#min').value);
  var max = parseInt(document.querySelector('#max').value);
  randomNumber = generateRandom(min, max);
  updateRangeDisplay(min, max);
  testMaxValue(min, max);
  // testMinValue(min, max);
}); 

// Update range display
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

// function testMinValue(min, max) {
//   if (max < min) {
//     alert("Please adjust Maximum Range appropriately.")
//   }
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
  outsideMax();
})

function outsideMax() {
  if (parsedNumberOne >= max); {
    alert("Please guess a number within the current range.");
  }
}

// RESET game event
resetGameButton.addEventListener('click', function() {
  clearGame()
  generateRandom()
  initialMin.value="";
  initialMax.value="";
  document.querySelector(".reset-game").disabled = true;
})

// CLEAR button action
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

// function disableBtn() {
//   if (p1.value || p2.value || g1.value || g2.value){
//     resetGameButton.disabled=false;
//     clearGameButton.disabled=false;
//   } else {
//     resetGameButton.disabled=true;
//     clearGameButton.disabled=true;
//   }
// }

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
  // var playerResults = `<section class="${player}"> 
  //                         <p class="display-player-name">${playerName}</p>
  //                         <p class="current-guess">current guess</p>
  //                         <p class="big-pink-number">${playerGuess}</p>
  //                         <p class="player-result">${result}</p>
  //                       </section>`
  leftSectionScores.insertAdjacentHTML('beforeend', playerResults)
}

// Not a Number alert
// if (playerOneGuess === NaN) {
//   alert("Challenger One, please enter a number");
// }
// if (playerTwoGuess === NaN) {
//   alert("Challenger Two, please enter a number.");
// }


