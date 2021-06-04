let field = document.querySelector(".field");
let ball = document.querySelector(".ball");

field.addEventListener("click", function (event) {
  ball.style.left = event.clientX - ball.clientWidth / 2 + "px";
  ball.style.top = event.clientY - ball.clientHeight / 2 + "px";
});

let gateLeft = document.querySelector(".gateLeft");
let gateRight = document.querySelector(".gateRight");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let container = document.querySelector(".container");
let goalsLeft = 0;
let goalsRight = 0;

function winner(player) {
  player.innerHTML = "5/5";
  setTimeout(() => {
    ball.style.display = "none";
    container.style.visibility = "visible";
    container.style.opacity = "1";
    container.style.transition = "opacity 1s linear, visibility 1s linear";
  }, 1000);
}

gateLeft.addEventListener("click", function (event) {
  ball.style.left = event.clientX - ball.clientWidth / 2 + "px";
  ball.style.top = event.clientY - ball.clientHeight / 2 + "px";

  if (goalsLeft < 4) {
    goalsLeft++;
    player1.innerHTML = goalsLeft + "/5";
  } else {
    winner(player1);
  }
});

gateRight.addEventListener("click", function (event) {
  ball.style.left = event.clientX - ball.clientWidth / 2 + "px";
  ball.style.top = event.clientY - ball.clientHeight / 2 + "px";

  if (goalsRight < 4) {
    goalsRight++;
    player2.innerHTML = goalsRight + "/5";
  } else {
    winner(player2);
  }
});

let restartButton = document.querySelector(".restartButton");

restartButton.addEventListener("click", function () {
  container.style.visibility = "invisible";
  container.style.opacity = "0";
  container.style.transition = "none";
  player1.innerHTML = "0/5";
  player2.innerHTML = "0/5";
  goalsLeft = 0;
  goalsRight = 0;
  setTimeout (() => {
    ball.style.display = "block";
    ball.style.left = "auto";
    ball.style.top = "auto";
  }, 1000);
});
