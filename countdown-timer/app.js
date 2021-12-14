const display = document.getElementById("show-time");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
let pause = false;
const startTime = 10;
let timeCount = startTime * 60;
setInterval(showTime, 1000);
function showTime() {
  if (!pause) {
    const mins = format(Math.floor(timeCount / 60));
    const secs = format(timeCount % 60);

    display.innerHTML = `${mins}:${secs}`;
    timeCount--;
  }
}

function format(item) {
  if (item < 10) {
    return (item = `0${item}`);
  }
  return item;
}

pauseBtn.addEventListener("click", function () {
  pause = true;
});
playBtn.addEventListener("click", function () {
  pause = false;
});
