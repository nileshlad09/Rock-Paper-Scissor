let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randamNum = Math.floor(Math.random() * 3);
    return choices[randamNum];
}
function converToword(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    else return "Scissors";

}
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    result_div.innerHTML=`${converToword(userChoice)} beats ${converToword(computerChoice)}. You win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')}, 300);
}
function loss(userChoice, computerChoice){
    computerScore++;
    compScore_span.innerHTML=computerScore;
    result_div.innerHTML=`${converToword(computerChoice)} beats ${converToword(userChoice)}. You lost.......`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')}, 300);
}
function draw(userChoice){
    result_div.innerHTML=`it's Draw`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')}, 300);
}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loss(userChoice, computerChoice);
            break;

        case "pp":
        case "rr":
        case "ss":
            draw(userChoice);
            break;
    }
}



rock_div.addEventListener('click',()=> {
    game('r');
})
paper_div.addEventListener('click',  ()=> {
    game('p');
})
scissor_div.addEventListener('click',  ()=> {
    game('s');
})