import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

inputDate = document.querySelector('#datetime-picker');
startBtn = document.querySelector('button[data-start]');
daysRef = document.querySelector('span[data-days]');
hoursRef = document.querySelector('span[data-hours]');
minsRef = document.querySelector('span[data-minutes]');
secsRef = document.querySelector('span[data-seconds]');
   
flatpickr('#datetime-picker', options);

startBtn.disabled = true;

 const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    startBtn.disabled = false;
  },
};



const startTime = selectedDates[0];

const timer = {
  intervalId : null ,
  start() {

    startBtn.disabled = true;
    inputDate.disabled = true;

     this.intervalId = setInterval(() => {
       const currentTime = Date.now();
       const deltaTime = startTime - currentTime;
       const timeConvert = convertMs(deltaTime);
       updateTime(timeConvert);
       if (deltaTime === 0) { 
         clearInterval(this.intervalId);
       };
         
    }, 1000);
}
}

startBtn.addEventListener('click', () => timer.start());

function updateTime({ days, hours, minutes, seconds }) {
  daysRef.textContent = `${days}`;
  hoursRef.textContent = `${hours}`;
  minsRef.textContent = `${minutes}`;
  secsRef.textContent = `${seconds}`;
}



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };

}

function addLeadingZero(value) { return String(value).padStart(2, '0') };





