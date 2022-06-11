const buttons = document.querySelector('button');
const playerSelection = document.getElementById('player-selection');
const computerSelection = document.getElementById('computer-selection');
const result = document.getElementById('result');

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
}