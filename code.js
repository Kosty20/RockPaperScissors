function getComputerChoice() {
    const arrChoice = ['rock', 'paper', 'scissors'];
    return arrChoice[Math.floor(Math.random() * 3)];
}


const outcomeBox = document.querySelector('div.outcome');
const playerScore = document.querySelectorAll('#container>.screen>.player>.playerScore>div');
const computerScore = document.querySelectorAll('#container>.screen>.computer>.computerScore>div');
const btns = document.querySelectorAll('div.btn-box>div>button')
const playerWindow = document.querySelector('div.screen>div.player>div>img');
const computerWindow = document.querySelector('div.screen>div.computer>div>img');
const restart = document.querySelector('.restart');

let x = 0, y = 0;

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
    playerWindow.style.transform = 'scale(1)';
    computerWindow.style.transform = 'scale(1)';

    if(outcome === `You win!`){
        playerScore[x].style.backgroundColor = 'black';
        x++;
        if(x === playerScore.length){
            finish(outcome);
        };
    } else if(outcome === `You lose!`){
        computerScore[y].style.backgroundColor = 'black';
        y++;
        if(y === computerScore.length){
            finish(outcome);
        };
    }

    console.log(outcome);
}

function finish(i){
    outcomeBox.innerText = i;
    setTimeout(() => {outcomeBox.classList.remove('fade')}, 1000);
    setTimeout(() => {
        restart.classList.remove('fade');
        restart.disabled = false;
        restart.style.cursor = 'pointer'
    }, 2000)
}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        for(let i of btns){
            i.disabled = true;
        }; 
        playerWindow.style.transform = 'scale(0)';
        computerWindow.style.transform = 'scale(0)';
        setTimeout(() => {
            playRound(playerSelection = btn.id);
            if(x !== 5 && y !== 5){
                for(let i of btns){
                    i.disabled = false;
                } 
            }
        }, 1000);    
    })
});

restart.addEventListener('click', () => {
    restart.disabled = true;
    restart.style.cursor = 'default'
    x = 0; y = 0;
    for(let btn of btns){
        btn.disabled = false;
    }
    for(let i of playerScore){
        i.style.backgroundColor = 'white';
    }
    for(let j of computerScore){
        j.style.backgroundColor = 'white'
    }
    playerWindow.src = ``;
    computerWindow.src = ``;
    restart.classList.add('fade');
    outcomeBox.classList.add('fade')
})


