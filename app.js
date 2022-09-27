const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    computerChoice = generateComputerChoice()
    computerChoiceDisplay.innerHTML = computerChoice

    resultDisplay.innerHTML = winner()

}))

function generateComputerChoice() {
    const randomNumber = (Math.floor(Math.random() * possibleChoices.length) +1)
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = "rock"
        
    }
    else if (randomNumber === 2) {
        computerChoice = "paper"
        
    }

    else {
        computerChoice = "scissors"
        
    }

    return computerChoice
}

function winner() {
    if (userChoice === "rock" && computerChoice === "scissors" || userChoice === "paper" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "paper" ){
        return "User is the Winner"
    }
    else {
        return "computer is the winner"
    }   

}