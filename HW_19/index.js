const clockTegP = document.getElementById('clock');

const addZero = (elementData) => (elementData < 10) ? '0' + elementData : elementData;

const clock = () => {
  const date = new Date();

  clockTegP.textContent = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
}

setInterval( () => clock(), 1000);

clock();
