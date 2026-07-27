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
                if (score > 150) {
                    resultText = "Great Job! You beat level 1! Can you beat the next level?";
                } else if (score > 100) {
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

if (start2) { 
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
                if (score2 > 200) { 
                    resultText2 = "Awesome!! You beat level 2! Can you tackle level 3?";
                } else if (score2 > 150) {
                    resultText2 = "So close! Maybe the next attempt will bring a better score...";
                } else {
                    resultText2 = "Almost there! Click faster for a better score >:D";
                }
                result2.textContent = resultText2;
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

// LEVEL 3 CODE
const start3 = document.getElementById("startTimer3");

if (start3) {
    let seconds3 = 60;
    let score3 = 0;
    let isPlaying3 = false;
    let resultText3 = "";
    const timer3 = document.getElementById("timer3");
    const click3 = document.getElementById("click3");
    const scoreElement3 = document.getElementById("score3");
    const result3 = document.getElementById("result3");
    const resultDiv3 = document.getElementById("resultDiv3");

    start3.addEventListener("click", function() {
        start3.disabled = true;
        click3.disabled = false;
        const countdown3 = setInterval(function() {
            seconds3--;
            timer3.textContent = seconds3;
            if (seconds3 <= 0) {
                clearInterval(countdown3);
                timer3.textContent = "Time's up!";
                click3.disabled = true;
                if (score3 > 250) { 
                    resultText3 = "You beat level 3! Maybe you will beat all the levels...";
                } else if (score3 > 200) {
                    resultText3 = "So close! Try again for more clicks!";
                } else {
                    resultText3 = "Almost there! Re-try for a better score!";
                }
                result3.textContent = resultText3;
                resultDiv3.classList.remove("hidden");
                resultDiv3.classList.add("result");
            }
        }, 1000);
    });

    click3.addEventListener("click", function() {
        score3++;
        scoreElement3.textContent = score3;
    });
}

// LEVEL 4 CODE
const start4 = document.getElementById("startTimer4");

if (start4) { 
    let seconds4 = 60;
    let score4 = 0;
    let isPlaying4 = false;
    let resultText4 = "";
    const timer4 = document.getElementById("timer4");
    const click4 = document.getElementById("click4");
    const scoreElement4 = document.getElementById("score4");
    const result4 = document.getElementById("result4");
    const resultDiv4 = document.getElementById("resultDiv4");

    start4.addEventListener("click", function() {
        start4.disabled = true;
        click4.disabled = false;
        const countdown4 = setInterval(function() {
            seconds4--;
            timer4.textContent = seconds4;
            if (seconds4 <= 0) {
                clearInterval(countdown4);
                timer4.textContent = "Time's up!";
                click4.disabled = true;
                if (score4 > 300) { 
                    resultText4 = "Great Job! You beat level 4!";
                } else if (score4 > 250) {
                    resultText4 = "So close! Try again to get a better score!";
                } else {
                    resultText4 = "Almost there! Re-try for a better score!";
                }
                result4.textContent = resultText4;
                resultDiv4.classList.remove("hidden");
                resultDiv4.classList.add("result");
            }
        }, 1000);
    });

    click4.addEventListener("click", function() {
        score4++;
        scoreElement4.textContent = score4;
    });
}

if (start5) { 
    let seconds5 = 60;
    let score5 = 0;
    let isPlaying5 = false;
    let resultText5 = "";
    const timer5 = document.getElementById("timer5");
    const click5 = document.getElementById("click5");
    const scoreElement5 = document.getElementById("score5");
    const result5 = document.getElementById("result5");
    const resultDiv5 = document.getElementById("resultDiv5");

    start5.addEventListener("click", function() {
        start5.disabled = true;
        click5.disabled = false;
        const countdown5 = setInterval(function() {
            seconds5--;
            timer5.textContent = seconds5;
            if (seconds5 <= 0) {
                clearInterval(countdown5);
                timer5.textContent = "Time's up!";
                click5.disabled = true;
                if (score5 > 350) { 
                    resultText5 = "You are a legend! You beat the last level!";
                } else if (score5 > 300) {
                    resultText5 = "So close! Try again to get a better score!";
                } else {
                    resultText5 = "Almost there! Re-try for a better score!";
                }
                result5.textContent = resultText5;
                resultDiv5.classList.remove("hidden");
                resultDiv5.classList.add("result");
            }
        }, 1000);
    });

    click5.addEventListener("click", function() {
        score5++;
        scoreElement5.textContent = score5;
    });
}
