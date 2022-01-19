const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const addZero = (elementClock, numberData) => (numberData < 10) ? elementClock.textContent = '0' + numberData : elementClock.textContent = numberData;

const clock = () => {
  const newDate = new Date();

  addZero(hours, newDate.getHours());
  addZero(minutes, newDate.getMinutes());
  addZero(seconds, newDate.getSeconds());
}

setInterval( () => clock(), 1000);

clock();
