const clockTegP = document.getElementById('clock');
let hours = 23;
let minutes = 59;
let seconds = 55;

const addZero = (elementData) => (elementData < 10) ? '0' + elementData : elementData;
const outClock = () => clockTegP.textContent = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);

const clock = () => {
  if (seconds < 59) {
    seconds ++;
    outClock();
    return;  
  }
  seconds = 0;  
  
  if (minutes < 59) {
    minutes ++;
    outClock();
    return;
  }
  minutes = 0;

  if (hours < 23) {
    hours ++;
    outClock();
    return;
  }
  hours = 0; 
}

setInterval( () => clock(), 1000);

clock();
