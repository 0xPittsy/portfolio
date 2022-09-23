// Plays Rock Paper Scissors against an RNG from 1-3.

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
  
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    }
    else console.log('Error: Invalid input.')
  };
  
  getUserChoice('rock');
  
  function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    switch (rand) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  function determineWinner(userChoice, computerChoice) { 
    if (userChoice === 'bomb'){
          if (computerChoice != '') {
            return "You won! Sneaky devil..."
          } else return "You won! Sneaky devil..."
        }
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (userChoice === 'rock') {
        if (computerChoice != 'paper') {
          return "You won!";
        } else return "You got rugged... Try again?";
    } else if (userChoice === 'paper') {
        if (computerChoice != 'scissors') {
          return "You won!";
        } else return "You got rugged... Try again?";
    } else if (userChoice === 'scissors') {
        if (computerChoice != 'rock'){
          return "You won!";
        } else return "You got rugged... Try again?";
    }
  }
  
  function playGame() {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
    
  }
  playGame();