
function computerPlay(){
   let num = Math.floor(Math.random()*3); 
   if(num == 0){
       return 'rock';
   }
   if(num == 1){
       return 'paper';
   }
   return 'scissors'; 
}

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        console.log(`It's a tie!Both the players selected ${playerSelection}`);
        return 0;
    }
    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            console.log(`You lose!${computerSelection} beats ${playerSelection}`);
            return -1;
        }
        else{
            console.log(`You win!${playerSelection} beats ${computerSelection}`);
            return 1;
        }
    }
    
    if(playerSelection == "paper"){
        if(computerSelection == "scissors"){
            console.log(`You lose!${computerSelection} beats ${playerSelection}`);
            return -1;
        }
        else{
            console.log(`You win!${playerSelection} beats ${computerSelection}`);
            return 1;
        }
    }
    
    if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            console.log(`You lose!${computerSelection} beats ${playerSelection}`);
            return -1;
        }
        else{
            console.log(`You win!${playerSelection} beats ${computerSelection}`);
            return 1;
        }
    }
}

function game(){
    let playerSelection;
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0;i<5;i++){
        playerSelection = prompt("Rock,Paper or Scissors?");
        computerSelection = computerPlay();
        let res = playRound(playerSelection,computerSelection);
        (res > 0)?playerScore+=res:computerScore+=res;
    }
    console.log(`Player: ${playerScore}\nComputer: ${-1*computerScore}`);
}

game();