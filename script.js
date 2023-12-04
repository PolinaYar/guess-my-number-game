'use strict';

// VARIABLES
const body = document.querySelector('body');
const secretNumberBox = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const scoreLabel = document.querySelector('.score');
const highscoreLabel = document.querySelector('.highscore');

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// MESSAGE
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

// FUNCTIONALITY
checkBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ no number!');

    // When player wins the game
  } else if (guess === secretNumber) {
    displayMessage('🎉 correct number!');
    secretNumberBox.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    secretNumberBox.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreLabel.textContent = highscore;
    }

    // When the guess is wrong
  } else if (guess !== secretNumber && guess >= 1 && guess <= 20) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 too high' : '📉 too low');
      score--;
      scoreLabel.textContent = score;
    } else {
      displayMessage('😵 you lost the game!');
      scoreLabel.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('start guessing...');
  scoreLabel.textContent = score;
  secretNumberBox.textContent = '?';
  guessInput.value = '';

  body.style.backgroundColor = '#222';
  secretNumberBox.style.width = '15rem';
});
