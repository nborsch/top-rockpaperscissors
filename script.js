/* Get computer choice first*/
function getComputerChoice() {
    const randomNumberOfThree = Math.floor(Math.random() * 3) + 1
    return randomNumberOfThree === 1 ? 'rock' : randomNumberOfThree === 2 ? 'paper' : 'scissors'
}

/*Prompt user for human choice*/
function getHumanChoice() {
    return prompt('rock, paper, or scissors?').toLowerCase()

}

function playGame() {
    let computerScore = 0
    let humanScore = 0

    /*Game logic*/
    function playRound() {

        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        /* Game is a tie */
        if (humanSelection === computerSelection) {
            console.log(`It's a tie! Nobody wins.`)

            /* Human wins */
        } else if ((humanSelection === 'paper' && computerSelection === 'rock') ||
            (humanSelection === 'scissors' && computerSelection === 'paper') ||
            (humanSelection === 'rock' && computerSelection === 'scissors')) {

            console.log(`You win! ${humanSelection.charAt(0).toUpperCase() +
                humanSelection.slice(1)} beats ${computerSelection}.`)

            humanScore++

            /* Human loses */
        } else {
            console.log(`You lose! ${computerSelection.charAt(0).toUpperCase() +
                computerSelection.slice(1)} beats ${humanSelection}.`)

            computerScore++
        }
    }

    for (let i = 5; i > 0; i--) {
        playRound()
    }

    const winner = computerScore === humanScore ? `No winner, it's a tie!` : computerScore > humanScore ? `The computer wins!` : `You're the final winner!`

    /* Show total game rounds result*/
    console.log(`${winner} Computer ${computerScore} You ${humanScore}`)
}