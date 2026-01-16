let boxes = document.querySelectorAll(".box");
let ResetButton = document.querySelector("#Reset-Button");
let NewButton = document.querySelector("#New-Button");
let MessageContainer = document.querySelector(".Message-Container");
let Msg = document.querySelector("#Msg");
let introPage = document.querySelector("#intro-page");
let mainGame = document.querySelector("main");
let startBtn = document.querySelector("#start-btn")

startBtn.addEventListener("click", () => {
    introPage.style.display = "none";
    mainGame.style.display = "flex";
});

let turnO = true;
let count = 0;

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const ResetGame = () =>{
turnO = true;
count = 0;
enableboxes();
MessageContainer.classList.add("Hide");
};


boxes.forEach((box) => {
  box.addEventListener("click", () => {             
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;
    let isWinner = checkWinner();
    if(count === 9 && !isWinner){
      gameDraw();
    }
  });
});
const gameDraw = () =>{
  Msg.innerText = "..It's A Draw..";
  MessageContainer.classList.remove("Hide");
  disableboxes();
};

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};

const showWinner = (winner) => {
  Msg.innerText = `..Congratulations, Winner Of The Game Is ${winner}..`;
  MessageContainer.classList.remove("Hide");
  disableboxes();
};

const checkWinner = () => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

NewButton.addEventListener("click",ResetGame);
ResetButton.addEventListener("click",ResetGame);