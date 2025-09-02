let gameSequence = [];
let userSequence = [];

let btns = ["red", "yellow", "green", "purple"];

let level = 0;
let started = false;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game Started");
    started = true;

    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 100);
}

function levelUp() {
  userSequence = [];
  level++;
  h2.innerText = `Level: ${level}`;

  //randomly choose button to flash

  let randomIndx = Math.floor(Math.random() * 4);
  let randomColor = btns[randomIndx];
  let randBtn = document.querySelector(`.${randomColor}`);
  // console.log(randomIndx);
  // console.log(randBtn);
  // console.log(randomColor);
  gameSequence.push(randomColor);
  btnFlash(randBtn);
}

function checkAns(idx) {
  if (userSequence[idx] == gameSequence[idx]) {
    if (userSequence.length == gameSequence.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerText = "Game Over! Press Any Key To Restart The Game";
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSequence.push(userColor);
  checkAns(userSequence.length - 1);
}

let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  let gameSequence = [];
  let userSequence = [];
  level = 0;
}
