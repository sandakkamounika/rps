'use strict';
const computerScore = document.getElementById('computer-score');
const userScore = document.getElementById('user-score');

let cScore =0;
let pScore = 0;

const gameStartContainer = document.getElementById('game-start');
const gameStartContainer = document.querySelector('.game-result');

const hands = document.querySelector('.hands');

const btnGameStart = document.getElementById('btn-game-start');


//functions

//game start function
const gameStart = function(){
    computerScore.innerText = cScore;
    userScore.innerText = pScore;

    
    gameResultContainer.classList.remove('hidden');
    gameResultContainer.classList.add('hidden');
    hands.classList.remove('hidden');
    
};

const check = function (input) {
    let userSelected = input;
    const choice = ['rock' , 'paper' , 'scissors'];
    const num=Math.trunc(Math.random() * 3);

    const computerSelected = choice[num];
};
//event listener
btnGameStart.addEventListener('click',gameStart);
//calling functions