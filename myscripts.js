function computerPlay() {
    let num = Math.floor(Math.random() * 3)

     if (num === 0) {
         return "rock";
     } else if (num === 1) {
         return "paper";
     } else {
         return "scissors"
     }
}
 

function playerPlay() {
    let selection = prompt("Rock, Paper or Scissors?")
     let pick = selection.toLowerCase()
    
     return pick;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win!!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win!!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win!!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose";
    }
  }
  const playerSelection = playerPlay();
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

  function game() {
      let You = 0
      let Computer = 0

      for (let i = 1; i <= 5; i++) playerPlay(i); {
        if (playRound === "You Win!!") {
            You++
        } else if (playRound === "You Lose") {
            Computer++
        }

      }

      if (You > Computer) {
          return "WINNER WINNER!!";
        } else if (You === Computer) {
            return "Draw";
        } else {
          return "You Lose"
      }
  }

  console.log(game());