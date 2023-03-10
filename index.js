const buttons = document.querySelectorAll('button')
const result = document.querySelector('results')

// todo: Connect html buttons and apply to playerselection
buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleUserSelection(button.id)

        // console.log(playerSelection)

        
    })
})


function handleUserSelection(playerSelection) {
    const computerChoice = getComputerChoice()
    const roundResults = playRound(playerSelection, computerChoice) 
    console.log(roundResults)
}

// todo: get computer selection
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// todo: display round result
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();


    const winCondition = {
        rock: "Scissors",
        paper: "Rock",
        scissors: "Paper"
    };



    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie!";
    } else if (winCondition[playerSelection] === computerSelection) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// todo: run game until comp or player reaches 5 wins
function game() {
    let playerScore = 0;
    let computerScore = 0;

    // for (let i = 0; i < 5; i++) {
    //     const playerSelection = prompt("Choose Rock, Paper, or Scissors");
    //     const computerSelection = getComputerChoice();
    //     const result = playRound(playerSelection, computerSelection);
    //     console.log(result);

    //     if(result.startsWith("You Win!")) {
    //         playerScore++;
    //     } else if(result.startsWith("You Lose!")) {
    //         computerScore++;
    //     } 
        



    // }

    
  // todo: display result
    console.log(`Final Score: You ${playerScore} - ${computerScore} Computer`);
        if (playerScore > computerScore) {
    console.log("Congratulations, You Win!")
        } else if (computerScore > playerScore) {
    console.log("You've been out smarted by a computer! Please try again!")
        } else {
    console.log("It's a Tie!")
}



}
game()

