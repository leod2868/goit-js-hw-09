function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
}
let timerId = null;

refs.startBtn.addEventListener('click', onSartBatton);
refs.stopBtn.addEventListener('click', onStopBatton);

function onSartBatton() {
    refs.startBtn.setAttribute('disabled', true);
    refs.stopBtn.removeAttribute('disabled', true);
    timerId = setInterval(() => {
        const color = getRandomHexColor();
        refs.body.style.backgroundColor = color
    }, 1000);
}

function onStopBatton() {
    refs.stopBtn.setAttribute('disabled', true);
    refs.startBtn.removeAttribute('disabled', true);
    clearInterval(timerId);
}