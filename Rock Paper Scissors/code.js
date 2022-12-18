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
        outcome = `You lose! ${capitalizeWord(playerSelection)} is beat by ${computerSelection}!`;
    } else if(playerSelection === computerSelection){
        outcome = `Draw! Both chose ${playerSelection}!`;
    } else if(playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'rock' && computerSelection === 'scissors'){
        outcome = `You win! ${capitalizeWord(playerSelection)} beats ${computerSelection}!`;
    } else {
        outcome = `Chose either rock, paper or scissors`;
    }
    console.log(outcome);
    return outcome;
}

const btns = document.querySelectorAll('button')

btns.forEach(btn => {
    btn.addEventListener('click', () => { 
        playRound(playerSelection = btn.id);
    })
});


