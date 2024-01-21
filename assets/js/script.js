const diffrentChoices = [
    {id:"rock", winsOver:"scissor"},
     {id:"paper", winsOver:"rock"},
      {id:"scissor", winsOver:"paper"},
]



const winnerCombination = ['']

let latestPlayerChoice = null
let latestComputerChoice = null
let playerScore = 0
let computerScore = 0
let playerName = ""

function playGame (playerChoice){
  const playerArrayMatch = diffrentChoices.find(x=>x.id===playerChoice)
  const randomComputerIndex = Math.floor(Math.random()*3)
  const computerArrayMatch = diffrentChoices[randomComputerIndex]
  let winner = ""
  if (computerScore === 10 || playerScore === 10){
    playerScore = 0
    computerScore = 0
  }

  if (playerArrayMatch.winsOver === computerArrayMatch.id){
     playerScore ++
     winner = "YOU WIN!"
     if (playerScore === 10){
        alert('YOU WON THE ENTIRE GAME. CONGRATZ!')
     }
  }
else if (computerArrayMatch.winsOver === playerArrayMatch.id){
     computerScore ++
     winner = "COMPUTER WINS!"
     if (computerScore === 10){
        alert('COMPUTER WON THE ENTIRE GAME. TRY AGAIN!')
     }
  }
  else {
      winner = "IT'S A TIE!"
  }
document.getElementById('playerDisplay').innerHTML = `${playerName}: ${playerArrayMatch.id}`
document.getElementById('computerDisplay').innerHTML = `COMPUTER: ${computerArrayMatch.id}`
document.getElementById('resultDisplay').innerHTML = winner
document.getElementById('computerPoints').innerHTML = computerScore
document.getElementById('playerPoints').innerHTML = playerScore
}

function setPlayerName(){
playerName = document.getElementById('playerNameInput').value
document.getElementById('playerDisplay').innerHTML = `${playerName}:`
}

