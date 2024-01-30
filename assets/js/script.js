/*jshint esversion: 6 */

// ROCK - PAPER - SCISSOR PP2.


// DECLARE WHAT WINS OVER THE OTHER
const diffrentChoices = [
    {id: "rock", winsOver: "scissor"},
     {id: "paper", winsOver: "rock"},
      {id: "scissor", winsOver: "paper"},
];



let playerScore = 0;
let computerScore = 0;
let playerName = "";

/* CALL PLAYGAME WHEN ONE OF THE 3 BUTTONS ARE PRESSED, 
COMPUTER CHOOSE BETWEEN 0-2 IN ARRAY THAT BECOMES ROCK, PAPER OR SCISSOR.
IF PLAYER WIN, DECLARE "YOU WIN" AND ADD 1 POINT AND THE SAME FOR COMPUTER.
FIRST PLAYER TO 10 POINTS WILL BE DECLARED AS A WINNER
WITH AN ALERT.
*/
function playGame (playerChoice){
  const playerArrayMatch = diffrentChoices.find(x=>x.id===playerChoice);
  const randomComputerIndex = Math.floor(Math.random()*3);
  const computerArrayMatch = diffrentChoices[randomComputerIndex];
  let winner = "";
  if (computerScore === 10 || playerScore === 10){
    playerScore = 0;
    computerScore = 0;
  }
// IF PLAYER WINS ADD +1 POINT AND DECLARE HIM THE WINNER OF THAT ROUND.
  if (playerArrayMatch.winsOver === computerArrayMatch.id){
     playerScore ++;
     winner = "YOU WIN!";
     if (playerScore === 10){
        alert('YOU WON THE ENTIRE GAME. CONGRATZ!');
     }
  }
  // IF COMPUTER WINS ADD +1 POINT AND DECLARE HIM THE WINNER OF THAT ROUND.
else if (computerArrayMatch.winsOver === playerArrayMatch.id){
     computerScore ++;
     winner = "YOU LOST!";
     if (computerScore === 10){
        alert('COMPUTER WON THE ENTIRE GAME. TRY AGAIN!');
     }
  }
  // IF PLAYER & COMPUTER CHOOSE THE SAME BUTTON DECLARE "IT'S A TIE"
  else {
      winner = "IT'S A TIE!";
  }
document.getElementById('playerDisplay').innerHTML = `${playerName}: ${playerArrayMatch.id}`;
document.getElementById('computerDisplay').innerHTML = `COMPUTER: ${computerArrayMatch.id}`;
document.getElementById('resultDisplay').innerHTML = winner;
document.getElementById('computerPoints').innerHTML = computerScore;
document.getElementById('playerPoints').innerHTML = playerScore;
}

// CALLS THE PLAYER NAME THAT THE USER WRITE IN THE TEXTBOX.
function setPlayerName(){
playerName = document.getElementById('playerNameInput').value;
document.getElementById('playerDisplay').innerHTML = `${playerName}:`;
}

