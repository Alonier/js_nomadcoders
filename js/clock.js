// const clock = document.querySelector("#clock");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function getClock() {
  const date = new Date();
  hours.innerText = `${String(date.getHours()).padStart(2, "0")}:`;
  minutes.innerText = `${String(date.getMinutes()).padStart(2, "0")}:`;
  seconds.innerText = String(date.getSeconds()).padStart(2, "0");
  //   clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
