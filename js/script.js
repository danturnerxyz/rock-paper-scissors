const container = document.getElementById('container')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const startBtn = document.getElementById('btn-start')
const rps = document.querySelectorAll('.flex-item')
const playerSpan = document.getElementById('player-span')
const compSpan = document.getElementById('computer-span')
const msgDiv = document.getElementById('msg-div')
const msgTxt = document.getElementById('msg-text')


let playerChoice = ''
let compChoice = ''
let playerScore = 0
let compScore = 0
let totalScore = `Your score: ${playerScore} - Computer Score: ${compScore}`

function getComputerChoice(max) {
    let num = Math.floor(Math.random() * max);
    if (num == 1) {
            compChoice = 'rock'
    }   else if (num == 2) {
            compChoice = 'paper'
    }   else {
            compChoice = 'scissors'
    }
}

// Get user choice

container.addEventListener('click', ev => {
    if (ev.target.closest('.flex-item')) {
        for (i of rps) {
            i.classList.remove('active-item')
        }
        ev.target.closest('.flex-item').classList.toggle('active-item')
        playerChoice = ev.target.closest('.flex-item').id
    }
})



function checkWinner(playerChoice, compChoice) {
    if ((playerChoice == 'rock') && (compChoice == 'scissors')) {
            msgTxt.textContent = 'You win! Rock beats scissors'
            playerScore++
    } 
        else if ((playerChoice == 'rock') && (compChoice == 'paper')) {
            msgTxt.textContent = 'You Lose! Paper beats rock'
            compScore++
    }    
        else if ((playerChoice == 'paper') && (compChoice == 'rock')) {
            msgTxt.textContent = 'You win! Paper beats rock'
            playerScore++
    }
        else if ((playerChoice == 'paper') && (compChoice == 'scissors')) {
            msgTxt.textContent = 'You lose! scissors beats paper'
            compScore++
    }
        else if ((playerChoice == 'scissors') && (compChoice == 'paper')) {
            msgTxt.textContent = 'You win! scissors beats paper'
            playerScore++
    }
        else if ((playerChoice == 'scissors') && (compChoice == 'rock')) {
            msgTxt.textContent = 'You lose! rock beats paper'
            compScore++
    }   else if ((playerChoice == compChoice)) {
            msgTxt.textContent = (`You both picked ${playerChoice}, try again`)
    }   else ('Error something went wrong')
    playerSpan.textContent = `${playerScore}`
    compSpan.textContent = `${compScore}`
}

// Start round

startBtn.addEventListener('click', function() {
    getComputerChoice(3)
    checkWinner(playerChoice, compChoice)
    compChoice = ''
    playerChoice = ''
    for (i of rps) {
        i.classList.remove('active-item')
    }
    console.log(totalScore)
    if ((playerScore) == 5) {
        msgTxt.textContent = `Congratulations you're the winner!`
        playerSpan.textContent = `0`
        compSpan.textContent = `0`
    } else if ((compScore) == 5) {
        msgTxt.textContent = `Sorry, you lose`
        playerSpan.textContent = `0`
        compSpan.textContent = `0`
    }
})


