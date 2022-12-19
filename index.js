let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timer = document.querySelector(".timer");
let startStopBtn = document.querySelector(".start-stop-btn");
let resetBtn = document.querySelector(".reset-btn");

let timerStatus = "stopped";
let timerInterval = null;

function stopWatch() {

    seconds++

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++
    
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++
        }
    }

    if (seconds < 10) {
        leadingSeconds = "0" + seconds;
    } else {
        leadingSeconds = seconds;
    }

    if (minutes < 10) {
        leadingMinutes = "0" + minutes;
    } else {
        leadingMinutes = minutes;
    }

    if (hours < 10) {
        leadingHours = "0" + hours;
    } else {
      leadingHours = hours;
    }

    timer.textContent = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`
}

startStopBtn.addEventListener("click", () => {
    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        startStopBtn.innerHTML = `<i class="fas fa-pause" id="pause"></i>`;
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval);
        startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="start"></i>`;
        timerStatus = "stopped";
    }
})

resetBtn.addEventListener("click", () => {
    window.clearInterval(timerInterval);
    
    seconds = 0;
    minutes = 0;
    hours = 0;

    timer.textContent = "00:00:00";
    startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="start"></i>`;
    timerStatus = "stopped";
})