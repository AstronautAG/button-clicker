let seconds = 60;
let score = 0;
let isPlaying = false;
let resultText = "";

const timer = document.getElementById("timer");
const start = document.getElementById("startTimer");
const click = document.getElementById("click");
const scoreElement = document.getElementById("score");
const result = document.getElementById("result");
const resultDiv = document.getElementById("resultDiv");


start.addEventListener("click", function() {
  start.disabled = true;
  click.disabled = false;

  const countdown = setInterval(function() {
    seconds--;
    timer.textContent = seconds;
  
    if (seconds <= 0) {
      clearInterval(countdown);
      timer.textContent = "Time's up!";
      click.disabled = true;

      if (score > 550) {
        resultText = "Great Job! You beat the game!"
      } else if (score > 350) {
        resultText = "So close! Try again to get a better score!"
      } else {
        resultText = "Almost there! Re-try for a better score!"
      }
      result.textContent = resultText;

      resultDiv.classList.remove("hidden");
      resultDiv.classList.add("result");
    }
  }, 1000);
});

click.addEventListener("click", function() {
  score++;
  scoreElement.textContent = score;
});
