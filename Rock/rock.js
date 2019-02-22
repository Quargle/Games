
function computerPlay() {
    choices = ['rock', 'paper', 'scissors'];
    choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function playRound(e){
    playerSelection = e.target.id;
    computerSelection = computerPlay();
    document.getElementById('computerMove').innerHTML = "The computer chose " + computerSelection + "...";
    if (
        (playerSelection === 'paper' && computerSelection === 'rock')
    || (playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'scissors' && computerSelection === 'paper')
        ){
        document.getElementById('result').innerHTML = "You win! Your "+ playerSelection + " beats the computer's " + computerSelection + "!";
        playerWins++;
    }
    else if (playerSelection === computerSelection){
        document.getElementById('result').innerHTML = "A draw! You both picked " + playerSelection + "!";
        draws++;
    }
    else {
        document.getElementById('result').innerHTML = "The computer wins! It's " + computerSelection + " beats your " + playerSelection + "!";
        computerWins++;
    }
    updateScores();
    console.log("Player wins: " + playerWins +
        "\nComputer wins: " + computerWins +
        "\nDraws: " + draws);
}

function updateScores(){
    document.getElementById('playerWins').innerHTML = "Player Wins: " + playerWins;
    document.getElementById('computerWins').innerHTML = "Computer Wins: " + computerWins;
    document.getElementById('draws').innerHTML = "Draws: " + draws;
}

let playerWins = 0;
let computerWins = 0;
let draws = 0;

document.getElementById("rock").addEventListener("click", playRound);
document.getElementById("paper").addEventListener("click", playRound);
document.getElementById("scissors").addEventListener("click", playRound);

