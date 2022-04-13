
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
    const btns = document.querySelectorAll("button");
    playerSelection = btns.forEach((btn) =>{
        btn.addEventListener("click",() => {playerSelection =btn.id;
            computerSelection = computerPlay();
            console.log(playerSelection);
            console.log(computerSelection);
            let res = playRound(playerSelection,computerSelection);
            (res > 0)?playerScore = playerScore+res:computerScore = computerScore+res;
            if(playerScore == 5 || computerScore == -5){
                h2.textContent = (playerScore > -1*computerScore)? "Player Wins!":"Computer Wins";
                game();
            }else{
                h2.textContent = (`Player: ${playerScore}\nComputer: ${-1*computerScore}`);
            }
        })
            }
    );
        
}

const container = document.querySelector("body");
const h2 = document.createElement("h2");
game();
container.appendChild(h2);
