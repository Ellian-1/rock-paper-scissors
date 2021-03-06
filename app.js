const buttons = document.querySelectorAll('button');
const playerSelection = document.getElementById('player-selection');
const computerSelection = document.getElementById('computer-selection');
const result = document.getElementById('result');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        playerSelection.innerText = e.target.id;
        computerPlay();
        play();
    });
});

const computerPlay = () => {
    const choices = ['rock', 'paper', 'scissors'];

    const choice = choices[Math.floor(Math.random() * choices.length)];

    if (choice === 'rock') {
        computerSelection.innerText = 'rock';
    } else if (choice === 'paper') {
        computerSelection.innerText = 'paper';
    } else if (choice === 'scissors') {
        computerSelection.innerText = 'scissors';
    }
};

const play = () => {
    if (playerSelection.innerText === computerSelection.innerText) {
        result.innerText = `It's a Draw! ${playerSelection.innerText} is equal to ${computerSelection.innerText}.`;
    } 
    else if (playerSelection.innerText === 'rock' && computerSelection.innerText === 'scissors') {
        result.innerText = `You Win! ${playerSelection.innerText} beats ${computerSelection.innerText}.`;
    }
    else if (playerSelection.innerText === 'rock' && computerSelection.innerText === 'paper') {
        result.innerText = `You Lose! ${computerSelection.innerText} beats ${playerSelection.innerText}.`;
    } 
    else if (playerSelection.innerText === 'paper' && computerSelection.innerText === 'rock') {
        result.innerText = `You Win! ${playerSelection.innerText} beats ${computerSelection.innerText}.`;
    } 
    else if (playerSelection.innerText === 'paper' && computerSelection.innerText === 'scissors') {
        result.innerText = `You Lose! ${computerSelection.innerText} beats ${playerSelection.innerText}.`;
    } 
    else if (playerSelection.innerText === 'scissors' && computerSelection.innerText === 'paper') {
        result.innerText = `You Win! ${playerSelection.innerText} beats ${computerSelection.innerText}.`;
    } 
    else if (playerSelection.innerText === 'scissors' && computerSelection.innerText === 'rock') {
        result.innerText = `You Lose! ${computerSelection.innerText} beats ${playerSelection.innerText}.`;
    }
};