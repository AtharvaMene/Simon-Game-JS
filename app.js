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
  }, 500);
}
function levelUp() {
  level++;
  h2.innerText = `Level: ${level}`;

  //randomly choose button to flash

  let randomIndx = Math.floor(Math.random() * 4);
  let randomColor = btns[randomIndx];
  let randBtn = document.querySelector(`.${randomColor}`);
  btnFlash(randBtn);
}
