// LEVEL 1 CODE
const start = document.getElementById("startTimer");

if (start) {
    let seconds = 60;
    let score = 0;
    let isPlaying = false;
    let resultText = "";
    const timer = document.getElementById("timer");
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
                if (score > 300) {
                    resultText = "Great Job! You beat the level!";
                } else if (score > 150) {
                    resultText = "So close! Try again to get a better score!";
                } else {
                    resultText = "Almost there! Re-try for a better score!";
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
}

// LEVEL 2 CODE
const start2 = document.getElementById("startTimer2");

if (start2) { // Only runs if Level 2 elements exist on the page
    let seconds2 = 60;
    let score2 = 0;
    let isPlaying2 = false;
    let resultText2 = "";
    const timer2 = document.getElementById("timer2");
    const click2 = document.getElementById("click2");
    const scoreElement2 = document.getElementById("score2");
    const result2 = document.getElementById("result2");
    const resultDiv2 = document.getElementById("resultDiv2");

    start2.addEventListener("click", function() {
        start2.disabled = true;
        click2.disabled = false;
        const countdown2 = setInterval(function() {
            seconds2--;
            timer2.textContent = seconds2;
            if (seconds2 <= 0) {
                clearInterval(countdown2);
                timer2.textContent = "Time's up!";
                click2.disabled = true;
                // Note: Level 2 goal updated to 450 to match your HTML text
                if (score2 > 450) { 
                    resultText2 = "Great Job! You beat the level!";
                } else if (score2 > 225) {
                    resultText2 = "So close! Try again to get a better score!";
                } else {
                    resultText2 = "Almost there! Re-try for a better score!";
                }
                result2.textContent = resultText2; // Fixed typo here (changed resultText to resultText2)
                resultDiv2.classList.remove("hidden");
                resultDiv2.classList.add("result");
            }
        }, 1000);
    });

    click2.addEventListener("click", function() {
        score2++;
        scoreElement2.textContent = score2;
    });
}
