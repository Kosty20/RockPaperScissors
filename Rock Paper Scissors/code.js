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

    return outcome;
}

function game(){
    let x = 0; y = 0;
    for(i = 1; i<= 5; i++){
        let playerSelection = prompt(`Rock, Paper, Scissors!`)
        let game = playRound(playerSelection, computerSelection = getComputerChoice());
        if(game === `You lose! ${capitalizeWord(playerSelection)} is beat by ${computerSelection}!`){
            x++;
            console.log(`You lost this one`);
        } else if(game === `You win! ${capitalizeWord(playerSelection)} beats ${computerSelection}!`){
            y++;
            console.log(`You won this battle`);
        } else {
            i--; //if theres a draw or the input is incorrect, the round doesnt count
            console.log(`Draw, this one didnt count!`);
        }
    }
    if(x < y){
        alert(`You win!`)
    } else if(x > y){
        alert(`You lose!`);
    }
}

