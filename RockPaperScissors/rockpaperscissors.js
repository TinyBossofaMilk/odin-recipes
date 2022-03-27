/*
psuedocode:

loop through 5 games
prompt and take input
identify rock paper scissors



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


function playRound(playerSelection, computerSelection)
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

    return undefined;
}

//let match = (input, comparison) => text.match(/comparison/);

function game()
{
    const NUMOFGAMES = 5;
    let inputChoice;

    for(let i = 1; i <= NUMOFGAMES; i++)
    {
        //`Round ${i} out of ${NUMOFGAMES}`;
        console.log( `Round ${i} out of ${NUMOFGAMES}: ` + 
                playRound(prompt("Enter 'Rock', 'Paper', or 'Scissors'!",), computerPlay()));
    }
}