// Stopwatch
let stopwatchInterval = 0;
let stopwatchRunning = false;
let stopwatchTime = 0;

const stopwatchDisplay = document.getElementById('stopwatch-display');
const startStopwatchBtn = document.getElementById('start-stopwatch');
const resetStopwatchBtn = document.getElementById('reset-stopwatch');

function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchInterval = setInterval(updateStopwatch, 1000);
        startStopwatchBtn.textContent = 'Stop';
        stopwatchRunning = true;
    } else {
        clearInterval(stopwatchInterval);
        startStopwatchBtn.textContent = 'Start';
        stopwatchRunning = false;
    }
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    startStopwatchBtn.textContent = 'Start';
    stopwatchRunning = false;
    stopwatchTime = 0;
    stopwatchDisplay.textContent = `00:00:00`;
}

function updateStopwatch() {
    stopwatchTime++;
    const hours = Math.floor(stopwatchTime / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((stopwatchTime % 3600) / 60).toString().padStart(2, '0');
    const seconds = (stopwatchTime % 60).toString().padStart(2, '0');
    stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

startStopwatchBtn.addEventListener('click', startStopwatch);
resetStopwatchBtn.addEventListener('click', resetStopwatch);


// Timer
let timerInterval;
let timerRunning = false;
let timerTime = 0;

const timerDisplay = document.getElementById('timer-display');
const timerInputHr = document.getElementById('timer-input-hours');
const timerInputMin = document.getElementById('timer-input-minutes');
const timerInputSec = document.getElementById('timer-input-seconds');
const startTimerBtn = document.getElementById('start-timer');
const resetTimerBtn = document.getElementById('reset-timer');

function startTimer() {
    if (!timerRunning) {
        // const inputValue = timerInput.value;
        // const timeParts = inputValue.split(':');
        let hours = parseInt(timerInputHr.value);
        let minutes = parseInt(timerInputMin.value);
        let seconds = parseInt(timerInputSec.value);

        if (isNaN(hours)) {
            hours = 0;
        }
        if (isNaN(minutes)) {
            minutes = 0;
        }
        if (isNaN(seconds)) {
            seconds = 0;
        }

        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        if (totalSeconds <= 0) {
            alert('Invalid input. Please enter a positive time.');
            return;
        }
        timerTime = totalSeconds;
        timerInterval = setInterval(updateTimer, 1000);
        startTimerBtn.textContent = 'Stop';
        timerRunning = true;
        timerInputHr.disabled = true;
        timerInputMin.disabled = true;
        timerInputSec.disabled = true;
    } else {
        clearInterval(timerInterval);
        startTimerBtn.textContent = 'Start';
        timerRunning = false;
        timerInputHr.disabled = true;
        timerInputMin.disabled = true;
        timerInputSec.disabled = true;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    startTimerBtn.textContent = 'Start';
    timerRunning = false;
    timerTime = 0;
    timerInputHr.value = '';
    timerInputMin.value = '';
    timerInputSec.value = '';
    timerInputHr.disabled = false;
    timerInputMin.disabled = false;
    timerInputSec.disabled = false;
    timerDisplay.textContent = `00:00:00`;
}

function updateTimer() {
    if (timerTime === 0) {
        clearInterval(timerInterval);
        startTimerBtn.textContent = 'Start';
        timerRunning = false;
        timerInputHr.disabled = false;
        timerInputMin.disabled = false;
        timerInputSec.disabled = false;
        alert('Timer has finished!');
    } else {
        timerTime--;
        const hours = Math.floor(timerTime / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((timerTime % 3600) / 60).toString().padStart(2, '0');
        const seconds = (timerTime % 60).toString().padStart(2, '0');
        timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

startTimerBtn.addEventListener('click', startTimer);
resetTimerBtn.addEventListener('click', resetTimer);
