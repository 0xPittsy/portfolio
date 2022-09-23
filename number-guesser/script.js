// Generates a random number from 1 to 10 and pits the users guess against a computer.

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Function Declatations

function generateTarget(){
    return Math.floor(Math.random() * 10);
}

function compareGuesses(user, cpu, target){
    if (target === user && target === cpu){
        return true;
    }
    else if (Math.abs(user - target) < Math.abs(cpu - target)){
        return true;
    }
    else return false;
}

function updateScore(winner){
    if (winner === 'human'){
        humanScore++;
    } else if (winner === 'computer'){
        computerScore++;
    }
}

function advanceRound(){
    currentRoundNumber++;
}


console.log(compareGuesses(1, 5, 8))
console.log(updateScore())