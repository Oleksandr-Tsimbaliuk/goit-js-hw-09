const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

btnStart.addEventListener('click', onbtnStart);
btnStop.addEventListener('click', onbtnStop);

function onbtnStart() {
  btnStart.disabled = true;
  btnStop.disabled = false;

  document.body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onbtnStop() {
  btnStart.disabled = false;
  btnStop.disabled = true;

  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
