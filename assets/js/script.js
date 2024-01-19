// PP2 PROJECT ROCK - PAPER - SCISSORS

// Initialize scores
let playerScore = 0;
let computerScore = 0;

function startPlay(playerChoice) {
    // Choices for the computer
    const computerChoices = ['rock', 'paper', 'scissor'];

    // Randomly pick a choice for the computer
    const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Display player's and computer's choices
    document.getElementById('playerDisplay').innerText = 'YOU CHOOSE: ' + playerChoice.toUpperCase();
    document.getElementById('computerDisplay').innerText = 'COMPUTER CHOOSE: ' + computerChoice.toUpperCase();

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
}
