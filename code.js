function getComputerChoice() {
    const arrChoice = ['rock', 'paper', 'scissors'];
    return arrChoice[Math.floor(Math.random() * 3)];
}


const outcomeBox = document.querySelector('div.outcome');
const playerScore = document.querySelectorAll('#container>.screen>.player>.playerScore>div');
const computerScore = document.querySelectorAll('#container>.screen>.computer>.computerScore>div');

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

    if(outcome === `You win!`){
        playerScore[x].style.backgroundColor = 'black';
        x++;
        if(x === playerScore.length){
            outcomeBox.innerText = `You win!`;
            x = 0; y = 0;

        }
    } else if(outcome === `You lose!`){
        computerScore[y].style.backgroundColor = 'black';
        y++;
        if(y === computerScore.length){
            outcomeBox.innerText = `You lost!`;
            x = 0; y = 0;
        };
    }

    console.log(outcome);
    return outcome;
}

let x = 0, y = 0;

 

const btns = document.querySelectorAll('div.btn-box>button')
const playerWindow = document.querySelector('div.screen>div.player>div>img');
const computerWindow = document.querySelector('div.screen>div.computer>div>img');


btns.forEach(btn => {
    btn.addEventListener('click', () => {
        for(let i of btns){
            i.disabled = true;
        } 
        playerWindow.src = ``;
        computerWindow.src = ``;
        setTimeout(() => {
            playRound(playerSelection = btn.id)
            for(let i of btns){
                i.disabled = false;
            } 
        }, 1000);    
    })
});
toLowerCase


