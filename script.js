let seconds = 60;
let score = 0;
let isPlaying = false;

const timer = document.getElementById("timer");
const start = document.getElementById("startTimer");
const click = document.getElementById("click");
const scoreElement = document.getElementById("score");

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
    }
  }, 1000);
});

click.addEventListener("click", function() {
  score++;
  scoreElement.textContent = score;
});
