let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetGame");
let newBtn = document.querySelector("#newGame");
let winnerMsg = document.querySelector(".winner");
let msgCOntainer = document.querySelector(".msgContainer");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgCOntainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Button is Clicked");
        if(turnO){
            box.innerHTML = "O";
            turnO = false;
        }else{
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled =true;
    }

}

const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled =false;
        box.innerText = "";
    }

}

const showWinner =(winner) =>{
    winnerMsg.innerText = ` Congratulations, Winner is ${winner}`;
    msgCOntainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner", pos1Val);
            }
            showWinner(pos1Val);
        }

    }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);