let userScore = 0;
let comScore = 0;
let drawScore = 0;

const userOptions = document.querySelectorAll(".choice");
let getResult = document.querySelector("#msg");
let userMsg = document.querySelector("#msg_user");
let computerMsg = document.querySelector("#msg_com");

let userScoreShow = document.querySelector("#user-score");
let comScoreShow = document.querySelector("#comp-score");
let drawScoreShow = document.querySelector("#draw-score");

// User Selection
userOptions.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userSeletion = choice.getAttribute("id");
    playGame(userSeletion);
  });
});

// Computer Selection
const getComSlection = () => {
  //roack, paper, scissors
  const comOptions = ["rock", "paper", "scissors"];
  let comIndx = Math.floor(Math.random() * 3);
  return comOptions[comIndx];
};

// Game Play here
const playGame = (userSeletion) => {
  userMsg.innerHTML = `Your Selection: ${userSeletion}`;

  computerMsg.innerHTML = "Computer Selecting...";
  let count = 3; // Change this to set the countdown time

  // Update countdown every second
  const countdownInterval = setInterval(() => {
    computerMsg.innerHTML = `Computer Selecting in ${count} seconds...`;
    count--;

    if (count < 0) {
      clearInterval(countdownInterval);

      let comSlection = getComSlection();
      computerMsg.innerHTML = `Computer Selection: ${comSlection}`;

      if (userSeletion === comSlection) {
        draw();
      } else {
        let userWinner = true;

        if (userSeletion === "rock") {
          //paper , scissors
          userWinner = comSlection === "paper" ? false : true;
        } else if (userSeletion === "scissors") {
          //rock, paper
          userWinner = comSlection === "rock" ? false : true;
        } else {
          // userSeletion === "paper"
          // rock, scissors
          userWinner = comSlection === "scissors" ? false : true;
        }
        showWinner(userWinner);
      }
    }
  }, 200);
};

// Draw ....
function draw() {
  drawScore++;
  drawScoreShow.innerHTML = drawScore;
  getResult.innerHTML = `Result: Draw`;
  getResult.style.backgroundColor = "blue";
}

// Showing Winner

function showWinner(userWinner) {
  if (userWinner) {
    userScore++;
    userScoreShow.innerHTML = userScore;
    getResult.innerHTML = `Result: You Win`;
    getResult.style.backgroundColor = "green";
  } else {
    comScore++;
    comScoreShow.innerHTML = comScore;
    getResult.innerHTML = `Result: You Lose`;
    getResult.style.backgroundColor = "red";
  }
}
