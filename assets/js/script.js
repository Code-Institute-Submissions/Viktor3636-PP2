// PP2 PROJECT ROCK - PAPER - SCISSORS

let playerScore = 0;
let computerScore = 0;

function startPlay(playerChoice) {
    // Choices for the computer
    const computerChoices = ['rock', 'paper', 'scissor'];

    // Randomly pick a choice for the computer
    const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Display player's and computer's choices
    document.getElementById('playerDisplay').innerText = 'YOU: ' + playerChoice.toUpperCase();
    document.getElementById('computerDisplay').innerText = 'COMPUTER: ' + computerChoice.toUpperCase();

    // Determine the winner or declare a tie
    let result = '';
    if (playerChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')
    ) {
        result = 'You win!';
        playerScore++;
    } else {
        result = 'Computer wins!';
        computerScore++;
    }

    // Display the result
    document.getElementById('resultDisplay').innerText = result;

    // Update and display scores
    document.getElementById('playerPoints').innerText = playerScore;
    document.getElementById('computerPoints').innerText = computerScore;

    // Check if a player has reached 10 points
    if (playerScore === 10 || computerScore === 10) {
        declareWinner();
    }
}

function declareWinner() {
    // Determine and display the overall winner
    let overallResult = '';
    if (playerScore === 10) {
        overallResult = 'Congratulations! You are the overall winner!';
    } else {
        overallResult = 'Oops! Computer is the overall winner. Better luck next time!';
    }

    // Display the overall result
    document.getElementById('resultDisplay').innerText = overallResult;

     playerScore = 0;
     computerScore = 0;
     document.getElementById('playerPoints').innerText = playerScore;
     document.getElementById('computerPoints').innerText = computerScore;
}