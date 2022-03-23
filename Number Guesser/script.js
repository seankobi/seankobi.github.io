let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
  return Math.floor(Math.random()*10);
};

function compareGuesses(userGuess, compGuess, generateTarget){
      if(Math.abs(generateTarget - userGuess) < Math.abs(generateTarget - compGuess)){
        return true;
      }else
      if(Math.abs(generateTarget - userGuess) > Math.abs(generateTarget - compGuess)){
        return false;
      }else
      return true;
};

const updateScore = (winner) =>{
    if(winner === 'human'){
      humanScore += 1;
    }else 
    if(winner === 'computer'){
      computerScore += 1;
    };
};

const advanceRound = function(){
    return currentRoundNumber += 1;
};
