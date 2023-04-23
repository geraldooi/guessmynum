'use strict';

const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const fieldGuess = document.querySelector('.guess');

const colorGreen = '#60b347';
const colorBlack = '#222';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
};

const displayHighScore = function (highScore) {
    document.querySelector('.highscore').textContent = highScore;
};

const incorrectGuess = function () {
    score--;
    if (score > 0) {
        displayScore(score);
    } else {
        displayMessage('💥 You loss the game!');
    }
};

btnCheck.addEventListener('click', function () {
    const guessValue = Number(fieldGuess.value);
    console.log(guessValue);

    if (!guessValue) {
        displayMessage('⛔ No Number');
        incorrectGuess();
    } else if (guessValue < number) {
        displayMessage('🔻 Too Low');
        incorrectGuess();
    } else if (guessValue > number) {
        displayMessage('🔺 Too High');
        incorrectGuess();
    } else {
        displayNumber(number);
        displayMessage('🎉 Correct!!!');
        document.querySelector('body').style.backgroundColor = colorGreen;
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            displayHighScore(highScore);
        }
    }
});

btnAgain.addEventListener('click', function () {
    number = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    displayNumber('?');
    displayScore(score);
    displayMessage('Start guessing...');
    fieldGuess.value = '';

    document.querySelector('body').style.backgroundColor = colorBlack;
    document.querySelector('.number').style.width = '15rem';
});
