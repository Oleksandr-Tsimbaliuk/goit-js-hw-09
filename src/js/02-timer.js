import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  btnStart: document.querySelector('[data-start]'),
  daysSpan: document.querySelector('[data-days]'),
  hoursSpan: document.querySelector('[data-hours]'),
  minutesSpan: document.querySelector('[data-minutes]'),
  secondsSpan: document.querySelector('[data-seconds]'),
};

refs.btnStart.addEventListener('click', onBtnStart);
let futureDate = null;
refs.btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    futureDate = selectedDates[0].getTime();
    if (selectedDates[0] <= Date.now()) {
      return Notiflix.Notify.failure('Please choose a date in the future');
    }
    refs.btnStart.disabled = false;
  },
};

flatpickr('#datetime-picker', options);

const timer = {
  start() {
    const timerId = setInterval(() => {
      const currentTime = Date.now();
      const timeLeft = futureDate - currentTime;
      const { days, hours, minutes, seconds } = convertMs(timeLeft);
      refs.daysSpan.textContent = days;
      refs.hoursSpan.textContent = hours;
      refs.minutesSpan.textContent = minutes;
      refs.secondsSpan.textContent = seconds;
      console.log(`${days}:${hours}:${minutes}:${seconds}`);

      if (timeLeft < 1000) {
        clearInterval(timerId);
        refs.btnStart.disabled = false;
      }
    }, 1000);
  },
};

function onBtnStart() {
  timer.start();
  refs.btnStart.disabled = true;
}

function convertMs(timeLeft) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(timeLeft / day));
  const hours = addLeadingZero(Math.floor((timeLeft % day) / hour));
  const minutes = addLeadingZero(
    Math.floor(((timeLeft % day) % hour) / minute)
  );
  const seconds = addLeadingZero(
    Math.floor((((timeLeft % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
