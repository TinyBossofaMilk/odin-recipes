/*
psuedocode:

loop through 5 games
prompt and take input
identify rock paper scissors

Create three buttons, one for each selection. 
Add an event listener to the buttons that call your playRound 
function with the correct playerSelection every time a button is clicked. 
(you can keep the console.logs for this step)

Add a div for displaying results and change all of your console.logs into DOM methods.

Display the running score, and announce a winner of the
 game once one player reaches 5 points.
 
You will likely have to refactor (rework/rewrite) your original code to make 
it work for this. That’s OK! Reworking old code is an important
 part of a programmer’s life.

Once you’re all done with your UI and made sure everything’s satisfactory, 
commit your changes to the rps-ui branch.
*/

function computerPlay()
{
    switch(Math.floor(Math.random()*3))
    {
        case 0: return 'rock';
        case 1: return 'paper';
    }

    return 'scissors';
}


function playRound(playerSelection, computerSelection = computerPlay())
{
    if(playerSelection.match(/rock/))
    {
        if(computerSelection.match(/rock/))
            return 'Draw!';
        else if(computerSelection.match(/paper/))
            return `You lose! Paper beats rock!`;
        else 
            return `You win! Rock beats Scissors!`;
    }
    else if(playerSelection.match(/paper/))
    {
        if(computerSelection.match(/paper/))
            return  `Draw!`;
        else if(computerSelection.match(/scissors/))
            return `You lose! Scissors beats paper!`;
        else 
            return `You win! Paper beats Rock!`;

    }
    else if(playerSelection.match(/scissors/))
    {
        if(computerSelection.match(/scissors/))
            return 'Draw!';
        else if(computerSelection.match(/rock/))
            return `You lose! Rock beats scissors!`;
        else 
            return `You win! Scissors beats paper!`;

    }

    return alert("enter something intelligent idiot");
}

//let match = (input, comparison) => text.match(/comparison/);

function game()
{
    const NUMOFGAMES = 5;
    let inputChoice;

    for(let i = 1; i <= NUMOFGAMES; i++)
    {
        console.log( `Round ${i} out of ${NUMOFGAMES}: ` + 
                playRound(prompt("Enter 'Rock', 'Paper', or 'Scissors'!",), computerPlay()));
    }
}




const body = document.querySelector("body");

let buttons = [];

for(let i = 0; i < 3; i++)
    {buttons.push(document.createElement('button'));}

buttons[0].textContent =  "rock";
buttons[0].id =  "rock";
buttons[1].textContent = "paper";
buttons[1].id = "paper";
buttons[2].textContent = "scissors";
buttons[2].id = "scissors";

const score = document.createElement("div");
const result = document.createElement("div");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', function (id = button.id) {
        result.textContent = playRound(this.id);

        if(result.textContent.includes("win"))
        {playerScore++;}
        else if(result.textContent.includes("lose"))
        {computerScore++;}
        
        if(playerScore == 5)
        {alert("You win!");}
        else if(computerScore == 5)
        {alert("You lose :/");}
        
        score.textContent = `Player's Score: ${playerScore} Computer's Score: ${computerScore}`;
        });
});

buttons.forEach((button) => {
    body.appendChild(button);    
});
body.appendChild(score);
body.appendChild(result);
