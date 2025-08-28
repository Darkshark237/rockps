// console.log("Hello World");
let humanScore = 0
let computerScore = 0

function getComputerChoice(){

    let pcChoice = ""

    let rand = Math.floor(Math.random()*3)

    if(rand == 0){
        pcChoice = "rock"
    }else if (rand == 1){
        pcChoice = "paper"
    }else{
        pcChoice = "scissors"
    }
    console.log(pcChoice)
    return pcChoice
}
// 

function getHumanChoice(){
    const userInput = prompt("Enter Rock, Paper or Scissors").toLocaleLowerCase()

    const arr = ["rock", "paper", "scissors"]
    
    if(arr.includes(userInput)) return userInput

    console.log("Check the spelling of what you entered!")
    getHumanChoice()
}

// getComputerChoice();

// getHumanChoice()

// User WIN
function userWin(computerChoice, humanChoice){
    humanScore++
    computerScore
    console.log("You win! " + humanChoice + " beats " + computerChoice + "\n" + "Your score : " + humanScore + "\n" + "Computer's Score : " + computerScore)
} 
function pcWin(computerChoice, humanChoice){
    humanScore
    computerScore++
    console.log("You loose! " + computerChoice + " beats " + humanChoice + "\n" + "Your score : " + humanScore + "\n" + "Computer's Score : " + computerScore)
} 
function drawgame(computerChoice, humanChoice){
    humanScore
    computerScore
    console.log("This is a draw game\n" + "Your score : " + humanScore + "\n" + "Computer's Score : " + computerScore)
}



function playRound(computerChoice, humanChoice){


    if(computerChoice === humanChoice){
        drawgame(computerChoice, humanChoice)
    }else if(computerChoice == "rock" && humanChoice == "paper"){
        // humanScore++
        // computerScore
        // console.log("You win! " + humanChoice + " beats " + computerChoice + " Your score : " + humanScore + " to " + computerScore)
        userWin(computerChoice, humanChoice)
    }else if(computerChoice == "paper" && humanChoice == "scissors"){
        userWin(computerChoice, humanChoice)
    }else if(computerChoice == "scissors" && humanChoice == "rock"){
        userWin(computerChoice, humanChoice)
    }
    else if(computerChoice == "scissors" && humanChoice == "paper"){
        pcWin(computerChoice, humanChoice)
    }else if(computerChoice == "rock" && humanChoice == "scissors"){
        pcWin(computerChoice, humanChoice)
    }else if(computerChoice == "paper" && humanChoice == "rock"){
        pcWin(computerChoice, humanChoice)
    }

}


function playGame(turns){
 
    let turn = 0
    do {
        let computerSelection = getComputerChoice()
        let humanSelection = getHumanChoice()
        playRound(computerSelection, humanSelection)
        turn++
    }while(turn < turns)
    
    if(humanScore > computerScore){
        alert("You win with " + humanScore + " to " + computerScore)
    }else if(humanScore == computerScore){
        alert("This was a draw with " + humanScore + " to " + computerScore)
    }else{
        alert("You loose with " + humanScore + " to " + computerScore)
    }
 
}

const nbTurns = prompt("Enter The number of turns you want to play")

playGame(nbTurns)



