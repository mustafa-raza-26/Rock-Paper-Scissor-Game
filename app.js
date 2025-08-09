let playerDisplay = document.getElementById('player');
let computerDisplay = document.getElementById('computer');
let pShow = document.getElementById('playscroe');
let cShow = document.getElementById('compscore');
let user_Score = 0
let comp_Score = 0
let show_Result = document.getElementById('result');

function game(playerChoice) {
    let computer_Num = Math.floor(Math.random()*3)
    let comp_Choice = ""
    
    if (computer_Num === 0) {
        comp_Choice = "rock";
    }
    else if (computer_Num === 1) {
        comp_Choice = "paper";
    }
    else if (computer_Num === 2) {
        comp_Choice = "scissors"
    }
    let result = "";

    if ((playerChoice === "rock" && comp_Choice === "scissors")||
        (playerChoice === "paper" && comp_Choice === "rock") || 
        (playerChoice === "scissors" && comp_Choice === "paper")) {
        result = "YOU WIN!";
    }
    else if (playerChoice === comp_Choice) {
        result = "DRAW!";
    }else {
        result = "YOU LOSE!";
    }

    playerDisplay.innerText = playerChoice ;
    computerDisplay.innerText = comp_Choice;
    show_Result.innerText = result;
    
    if (result === "YOU WIN!") {
        show_Result.style.color = "green";
        user_Score++;
        pShow.innerText = user_Score;
    }
    else if (result === "YOU LOSE!") {
        show_Result.style.color = "red";
        comp_Score++;
        cShow.innerText = comp_Score;
    } else {
        show_Result.style.color = "blue";
    }
}





























// let player_Display = document.getElementById('player')
// let computer_Display = document.getElementById('computer')
// let result = document.getElementById('result')

// function game(playerchoice) {
//     let c_Num = Math.floor(Math.random()*3)
//     let c_Choice = ''

//     if (c_Choice === 0) {
//         c_Choice = 'stone'
//     }
//     else if (c_Choice === 1) {
//         c_Choice = 'paper'
//     }
//     else  if (c_Choice === 2) {
//         c_Choice = 'scissor'
//     }
//     let result = ''

//     if (
//         (playerchoice === "stone" && c_Choice === "scissors") ||
//         (playerchoice === "paper" && c_Choice === "stone") ||
//         (playerchoice === "scissors" && c_Choice === "paper")
//       ) {
//         result = "YOU WIN!";
//     } else if (playerchoice === c_Choice) {
//         result = "DRAW!";
//     } else {
//         result = "YOU LOSE!";
//     }

//     player_Display.innerText =  'Player:'+ playerchoice
//     computer_Display.innerText = "Computer: " + c_Choice
//     result.innerHtml = result
// }
// game(playerchoice)