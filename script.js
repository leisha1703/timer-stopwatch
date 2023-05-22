
var interval;
var hours=0;
var minutes = 0;
var seconds = 0;

function startTimer() {
  interval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  document.getElementById("hours").textContent = padZero(hours);
  document.getElementById("minutes").textContent = padZero(minutes);
  document.getElementById("seconds").textContent = padZero(seconds);
//   document.getElementById("hours").innerHTML = hours;
//   document.getElementById("minutes").innerHTML = minutes;
//   document.getElementById("seconds").innerHTML = seconds;
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
    hours=0;
  minutes = 0;
  seconds = 0;
  document.getElementById("hours").textContent = "00";

  document.getElementById("minutes").textContent = "00";
  document.getElementById("seconds").textContent = "00";
}

function padZero(value) {
  return value < 10 ? "0" + value : value;
}
