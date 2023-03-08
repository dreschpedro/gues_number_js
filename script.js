// get elements from DOM
const nameInput = document.getElementById("name");
const playerName = document.getElementById("playerName");
const rules = document.getElementById("rules");
const guessInput = document.getElementById("guess");
const result = document.getElementById("result");
const gameDiv = document.getElementById("game");

// initialize variables
let correctNumber;
let numTries;

// function to generate a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to start the game
function startGame() {
  // get player name
  const name = nameInput.value;
  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  // welcome player
  playerName.textContent = name;

  // set rules
  rules.textContent = "Guess a number between 1 and 100.";

  // generate random number
  correctNumber = getRandomNumber(1, 100);

  // reset number of tries
  numTries = 0;

  // show game div
  gameDiv.style.display = "block";
}

// function to check the guess
function guessNumber() {
  // get guess
  const guess = Number(guessInput.value);
  if (guess < 1 || guess > 100 || isNaN(guess)) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  // increase number of tries
  numTries++;

  // check guess
  if (guess === correctNumber) {
    // correct guess
    result.textContent = `Congratulations ${playerName.textContent}! You guessed the number in ${numTries} tries.`;
    guessInput.disabled = true;
  } else if (guess < correctNumber) {
    // guess too low
    result.textContent = "Your guess was too low. Try again.";
  } else {
    // guess too high
    result.textContent = "Your guess was too high. Try again.";
  }
}

// function to play again
function playAgain() {
  // hide game div
  gameDiv.style.display = "none";

  // reset guess input and result
  guessInput.value = "";
  guessInput.disabled = false;
  result.textContent = "";
}
