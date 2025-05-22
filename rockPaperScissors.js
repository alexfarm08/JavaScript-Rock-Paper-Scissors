const arrayRPS = ["Rock", "Paper", "Scissors"]; //Array for rock paper scissors
let numRounds = 0; //declares num rounds 

console.log("Welcome to my little Rock Paper Scissors game!"); //welcome msg to console

//This example returns a random integer between the specified values. The value is no lower than min (or the next integer greater than min if min isn't an integer), and is less than (but not equal to) max
function getRandomInt(min,max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

//returns random val from function
function getComputerChoice() {
    let comPick = arrayRPS[getRandomInt(0,3)];
    return comPick;
}

//function to get user choice 
function getHumanChoice() {
    let userChoice = prompt("Enter one of the following (0 for rock, 1 for paper, 2 scissors)");
    let humanPick = arrayRPS[userChoice];
    return humanPick;
}

//play game func to play the game
function playGame(numRounds) {
    let playerScore = 0; //declares player score
    let computerScore = 0; //declares computer score

    //function to play round & find winner of round and ++ their score
    function playRound() {
    let pPick = getHumanChoice();
    console.log("Player Picks: " + pPick);
    let cPick = getComputerChoice();
    console.log("Computer Picks: " + cPick);

    if (pPick == "Rock" & cPick == "Rock") {
        console.log("Tie no one wins 😭");
    }
    else if (pPick == "Rock" & cPick == "Paper") {
        console.log("Computer Wins!");
        computerScore++;
    }
    else if (pPick == "Rock" & cPick == "Scissors") {
        console.log("Human wins!");
        playerScore++;
    }
    else if (pPick == "Paper" & cPick == "Rock") {
        console.log("Human wins!");
        playerScore++;
    }
    else if (pPick == "Paper" & cPick == "Paper") {
        console.log("Tie no one wins 😭");
    }
    else if (pPick == "Paper" & cPick == "Scissors") {
        console.log("Computer Wins!");
        computerScore++;
    }
    else if (pPick == "Scissors" & cPick == "Rock") {
        console.log("Computer Wins!");
        computerScore++;
    }
    else if (pPick == "Scissors" & cPick == "Paper") {
        console.log("Human wins!");
        playerScore++;
    }
    else if (pPick == "Scissors" & cPick == "Scissors") {
        console.log("Tie no one wins 😭");
    }

}

// for loop to play game num times
for (let i = 0; i < numRounds; i++) {
    playRound();
    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
}

//if statement to display end game and winner
console.log("Game over");
if (playerScore > computerScore) {
    console.log("Player wins!")
}
else if (playerScore < computerScore) {
    console.log("Computer wins!");
}
else {
    console.log("Tie");
}

}

// prompts user to input how many rounds to play
numRounds = prompt("Enter the number of rounds to play");

// calls play game to play numRounds amount of rounds
console.log(playGame(numRounds));
