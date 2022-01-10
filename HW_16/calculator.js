const div = document.querySelector('#keyboard');
const inputText = document.querySelector('#inp_display');
const btnText = 'С 7 8 9 / 4 5 6 * 1 2 3 - 0 + ='.split(' ');

for (let i = 0; i < btnText.length; i++) {
  const btn = document.createElement('button'); 
  btn.classList.add('btn');

  if (btnText[i] === 'С') {
    btn.classList.add('clear');
  } else if (btnText[i] === '0') {
    btn.classList.add('zero');
  } else if (btnText[i] === '=') {
    btn.classList.add('result');
  } 

  btn.innerText = `${btnText[i]}`;
  div.appendChild(btn);
}

document.querySelectorAll('button').forEach(button => {
  button.onclick = () => {
    if (button.innerText === 'С') {
      inputText.value = '';
    } else if (button.innerText === '=') {
      inputText.value = eval(inputText.value);
    } else {
      let oldInputTex = inputText.value;
      inputText.value = oldInputTex + button.innerText; 
    }
  }
});
