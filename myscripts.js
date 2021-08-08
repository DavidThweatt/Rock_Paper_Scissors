let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const score_div = document.querySelector('.score');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const num = Math.floor(Math.random() * 3);
     return (choices[num]);
};

function win(playerSelection, computerSelection) {
    const playerSelection_div = document.getElementById(playerSelection);
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${playerSelection} beats ${computerSelection} . You win!`;
    playerSelection_div.classList.add('green-glow');
    setTimeout(() => playerSelection_div.classList.remove('green-glow'), 1000);
    restartGame()
};

function lose(playerSelection, computerSelection) {
    const playerSelection_div = document.getElementById(playerSelection);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
    result_p.innerHTML = `${computerSelection} beats ${playerSelection} . You lose!`;
    playerSelection_div.classList.add('red-glow');
    setTimeout(() => playerSelection_div.classList.remove('red-glow') , 1000);
    restartGame()
};

function draw(playerSelection, computerSelection) {
const playerSelection_div = document.getElementById(playerSelection);
result_p.innerHTML = "Draw!";
playerSelection_div.classList.add('gray-glow');
setTimeout(() => playerSelection_div.classList.remove('gray-glow'), 1000);
};

function restartGame() {
    if (playerScore === 5) {
        result_p.innerHTML = "YOU ARE VICTORIOUS!!!";
        setTimeout(() => location.reload(), 3000);
    } else if (computerScore === 5) {
        result_p.innerHTML = "YOU HAVE BEEN DEFEATED!"
        setTimeout(() => location.reload(), 3000);
    }
};

function game(playerSelection) {
    const computerSelection = computerPlay();
    switch (playerSelection + computerSelection) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(playerSelection, computerSelection);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(playerSelection, computerSelection);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(playerSelection, computerSelection);
            break;
    };
    
};

function main() {
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissors"));
};

main();