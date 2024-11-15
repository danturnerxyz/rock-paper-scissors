const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const startBtn = document.getElementById('btn-start')

let playerChoice = ''
let computerChoice = ''
let playerScore = 0
let computerScore = 0
let totalScore = `Your score: ${playerScore} - Computer Score: ${computerScore}`

// Get computer choice

function getComputerChoice(max) {
    let num = Math.floor(Math.random() * max);
    if (num == 1) {
            computerChoice = 'rock'
    }   else if (num == 2) {
            computerChoice = 'paper'
    }   else {
            computerChoice = 'scissors'
    }
}

// Get user choice

rock.addEventListener('click', function(ev) {
    playerChoice = 'rock'
})

paper.addEventListener('click', function(ev) {
    playerChoice = 'paper';
})

scissors.addEventListener('click', function(ev) {
    playerChoice = 'scissors'
})

// Check conditionals to see who wins

function checkWinner(playerChoice, computerChoice) {
    if ((playerChoice == 'rock') && (computerChoice == 'scissors')) {
            console.log('You win! Rock beats scissors')
            playerScore++
    } 
        else if ((playerChoice == 'rock') && (computerChoice == 'paper')) {
            console.log('You Lose! Paper beats rock')
            computerScore++
    }    
        else if ((playerChoice == 'paper') && (computerChoice == 'rock')) {
            console.log('You win! Paper beats rock')
            playerScore++
    }
        else if ((playerChoice == 'paper') && (computerChoice == 'scissors')) {
            console.log('You lose! scissors beats paper')
            computerScore++
    }
        else if ((playerChoice == 'scissors') && (computerChoice == 'paper')) {
            console.log('You win! scissors beats paper')
            playerScore++
    }
        else if ((playerChoice == 'scissors') && (computerChoice == 'rock')) {
            console.log('You lose! rock beats paper')
            computerScore++
    }   else if ((playerChoice == computerChoice)) {
            console.log(`You both picked ${playerChoice}, try again`)
    }   else ('Error something went wrong')
    totalScore = `Your score: ${playerScore} - Computer Score: ${computerScore}`
}

// Start round

startBtn.addEventListener('click', function() {
    getComputerChoice(3)
    checkWinner(playerChoice, computerChoice)
    computerChoice = ''
    playerChoice = ''
    console.log(totalScore)
    if ((playerScore) == 5) {
        console.log(`Congratulations you're the champion of Rock, Paper, Scissors`)
        playerScore = 0
        computerScore = 0
    } else if ((computerScore) == 5) {
        console.log(`You lost to the machine`)
        playerScore = 0
        computerScore = 0
    }
})


