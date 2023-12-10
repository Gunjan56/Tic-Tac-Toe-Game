let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let playAgain = document.querySelector('#playAgain-btn');
let messageContainer = document.querySelector('.message-container');
let message = document.querySelector('#message');
let container = document.querySelector('.container');
let turnO = true; //Player1, PlayerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText = 'O';
            box.style.color = "black";
            turnO = false;
        }else{
            box.innerText = "X";
            box.style.color = "#b0413e";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();

    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    messageContainer.classList.add('hide');
    container.classList.remove('hide');
    resetBtn.classList.remove('hide');
}

const showWinner = (winner) => {
    message.innerText = `Congratulations 🎉🎉🎉🎊🎊, Winner is ${winner}`;
    messageContainer.classList.remove('hide');
    container.classList.add('hide');
    resetBtn.classList.add('hide');
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let posOneValue = boxes[pattern[0]].innerText;
        let posTwoValue = boxes[pattern[1]].innerText;
        let posThreeValue = boxes[pattern[2]].innerText;

        if(posOneValue !== "" && posTwoValue !== "" && posThreeValue !== ""){
            if(posOneValue === posTwoValue && posTwoValue === posThreeValue){
                showWinner(posOneValue);
            }
        }
    }
}

playAgain.addEventListener('click',resetGame );
resetBtn.addEventListener('click', resetGame);
