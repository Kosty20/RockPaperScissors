function getComputerChoice() {
    const arrChoice = ['rock', 'paper', 'scissors'];
    return arrChoice[Math.floor(Math.random() * 3)];
}

function capitalizeWord(str) {
    str = str.toString();
    let x = str.charAt(0).toUpperCase();
    let y = str.slice(1).toLowerCase();
    return x + y;
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    playerSelection = playerSelection.toLowerCase();
    let outcome = '';
    
    if(playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'rock'){
        outcome = `You lose!`;
    } else if(playerSelection === computerSelection){
        outcome = `Draw!`;
    } else if(playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'rock' && computerSelection === 'scissors'){
        outcome = `You win!`;
    } else {
        outcome = `Chose either rock, paper or scissors`;
    }
    playerWindow.src = `PNGs/${playerSelection}.png`;
    computerWindow.src = `PNGs/${computerSelection}.png`;
    console.log(outcome);
    return outcome;
}

const btns = document.querySelectorAll('div.btn-box>div>img')
const playerWindow = document.querySelector('div.screen>div.player>img');
const computerWindow = document.querySelector('div.screen>div.computer>img');


btns.forEach(btn => {
    btn.addEventListener('click', () => {
        playerWindow.src = ``;
        computerWindow.src = ``;
        setTimeout(() => {playRound(playerSelection = btn.alt);}, 1000);    
    })
});




