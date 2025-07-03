const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')
let computerScore = 0
let humanScore = 0
/* when user clicks it has already gone through a full round */
let rounds = 1 

/* Listening for a button choice, calling playRound */
document.addEventListener('click', (e) => {
    const choice = e.target.textContent

    if (choice === 'rock' 
        || choice === 'paper'
        || choice === 'scissors') playRound(choice)
})

function getComputerChoice() {
    const randomNumberOfThree = Math.floor(Math.random() * 3) + 1
    return randomNumberOfThree === 1 ? 'rock' : randomNumberOfThree === 2 ? 'paper' : 'scissors'
}

function playRound(playerSelection) {
    const totalWinner = document.querySelector('.winner')
    const currentRoundWinner = document.querySelector('.current-round-winner')
    const currentRound = document.querySelector('.current-round')
    const computerChoiceDisplay = document.querySelector('.computer-choice')

    const computerChoice = getComputerChoice();

    /* Reset rounds once 5 rounds have been played */
    if (rounds === 6) rounds = 1

    currentRound.textContent = rounds
    computerChoiceDisplay.textContent = computerChoice
    
    /* Game is a tie */
    if (playerSelection === computerChoice) {
        currentRoundWinner.textContent = `It's a tie!`
    /* Human wins */
    } else if ((playerSelection === 'paper' && computerChoice === 'rock') ||
        (playerSelection === 'scissors' && computerChoice === 'paper') ||
        (playerSelection === 'rock' && computerChoice === 'scissors')) {

        currentRoundWinner.textContent = 'You'
        humanScore++
    /* Human loses */
    } else {
        currentRoundWinner.textContent = 'Computer'
        computerScore++
    }

    /* If 5 rounds were played, announce the winner */
    if (rounds === 5) {
        totalWinner.textContent = computerScore === humanScore ? `It's a tie!` : computerScore > humanScore ? 'Computer' : 'You'
    } else {
        totalWinner.textContent = ''
    }
    /* Played a full round */
    rounds++
}