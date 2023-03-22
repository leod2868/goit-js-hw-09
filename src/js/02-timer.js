import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


    inputDate = document.querySelector('#datetime-picker');
    startBtn = document.querySelector('button[data-start]');
    daysRef = document.querySelector('span[data-days]');
    hoursRef = document.querySelector('span[data-hours]');
    minsRef = document.querySelector('span[data-minutes]');
    secsRef = document.querySelector('span[data-seconds]');


let timerId = null;

startBtn.setAttribute('disabled', true);
startBtn.addEventListener('click', onSartTimer);

function flatpickr(inputDate, options);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
  console.log(selectedDates[0]);
  },
};
