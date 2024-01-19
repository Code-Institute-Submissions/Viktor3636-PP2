// PP2 PROJECT ROCK - PAPER - SCISSORS

function startPlay(playerChoice) {
    // Choices for the computer
    const computerChoices = ['rock', 'paper', 'scissor'];

    // Randomly pick a choice for the computer
    const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Log player's and computer's choices
    console.log('Player choice:', playerChoice);
    console.log('Computer choice:', computerChoice);

    // Determine the winner or declare a tie
    if (playerChoice === computerChoice) {
        console.log('It\'s a tie!');
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')
    ) {
        console.log('Player wins!');
    } else {
        console.log('Computer wins!');
    }

}