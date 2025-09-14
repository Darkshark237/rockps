// console.log("Hello World");
let humanScore = 0
let computerScore = 0
let gameEnd = false


// let container = document.querySelector(".userselection")

// let currentResult = document.createElement("div")

// currentResult.style.cssText = "border : 1px solid black; width : 50%; margin-top : 10px"

// currentResult.textContent = "current result"

// container.appendChild(currentResult)


// let endResult = document.createElement("div")

// endResult.style.cssText = "border : 1px solid black; width : 50%; margin-top : 10px"

// endResult.textContent = "end result"

// container.appendChild(endResult)



let result = document.querySelector("#result")

let endResult = document.querySelector("#endResult")



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
// USER SELECTION


// const buttons = document.querySelectorAll("button")

// buttons.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         // console.log(btn.textContent, typeof btn.textContent)
//         console.log(e.target.textContent, typeof e.target.textContent)
//         return e.target.textContent
//     })
// })



function getHumanChoice(){
    const userInput = prompt("Enter Rock, Paper or Scissors").toLocaleLowerCase()
    
    if(userInput != "rock" && userInput != "paper" && userInput != "scissors"){
        console.error("invalid choice")
    }

    return userInput
    
}


// User WIN
function userWin(computerChoice, humanChoice){
    humanScore++
    computerScore
    console.log("You win! " + humanChoice + " beats " + computerChoice + "\n" + "Your score : " + humanScore + "\n" + "Computer's Score : " + computerScore)
    result.textContent = "You win! " + humanChoice + " beats " + computerChoice + "\n"

    endResult.textContent = "Your score : " + humanScore + "\t" + "Computer's Score : " + computerScore
    
} 
function pcWin(computerChoice, humanChoice){
    humanScore
    computerScore++
    console.log("You loose! " + computerChoice + " beats " + humanChoice + "\n" + "Your score : " + humanScore + "\n" + "Computer's Score : " + computerScore)

    result.textContent = "You loose! " + computerChoice + " beats " + humanChoice + "\n"
    endResult.textContent = "Your score : " + humanScore + "\t" + "Computer's Score : " + computerScore
} 
function drawgame(computerChoice, humanChoice){
    // humanScore
    // computerScore
    console.log("This is a draw game\n" + "Your score : " + humanScore + "\n" + "Computer's Score : " + computerScore)
    result.textContent = "This is a draw game\n"
    // endResult += "Your score : " + humanScore + "\n" + "Computer's Score : " + computerScore
}





function playRound(computerChoice, humanChoice){

    // if(gameEnd) return

    if(computerChoice == "rock" && humanChoice == "paper"){
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
    }else if(computerChoice === humanChoice){
        drawgame(computerChoice, humanChoice)
    }

    // playGame()

}


let onRock = document.querySelector("#rock")
let onPaper = document.querySelector("#paper")
let onScissors = document.querySelector("#scissors")


onRock.addEventListener(("click"), () => playRound(getComputerChoice(), "rock"))
onPaper.addEventListener(("click"), () => playRound(getComputerChoice(), "paper"))
onScissors.addEventListener(("click"), () => playRound(getComputerChoice(), "scissors"))




// function playGame(){
 
//     // let turn = 0
//     // do {
//     //     let computerSelection = getComputerChoice()
//     //     let humanSelection = getHumanChoice()
//     //     playRound(computerSelection, humanSelection)
//     //     turn++
//     // }while(turn < turns)
    
//     if(humanScore > computerScore){
//         alert("You win with " + humanScore + " to " + computerScore)
//     }else if(humanScore == computerScore){
//         alert("This was a draw with " + humanScore + " to " + computerScore)
//     }else{
//         alert("You loose with " + humanScore + " to " + computerScore)
//     }
 
// }

// const nbTurns = prompt("Enter The number of turns you want to play")

// playGame()



