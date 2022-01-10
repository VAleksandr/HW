const userName = document.getElementById('Username');
const passWord = document.getElementById('Password');
const btn = document.getElementById('Btn');
const btn_reg = document.getElementById('Btn_reg');

const authorizationFun = () => {

  if (localStorage.getItem('user') === null) {
    alert ('Make registration.');
  } else {
    users = JSON.parse(localStorage.getItem('user'));
    users.find(({name, sign}) => name === userName.value && sign === passWord.value)?
      window.location = 'calculator.html':
      alert ('Error. Login or password is incorrect or make registration.'); 
  }
}

const registration = () => {
  let users = [];
  const user = {
    name: userName.value,
    sign: passWord.value
  };
  
  if (localStorage.getItem('user') === null) {
    users.push(user);
    localStorage.setItem('user', JSON.stringify(users));
    alert ('Registration completed successfully.');  
  } else {
    users = JSON.parse(localStorage.getItem('user'));
    console.log(users);

    if (users.find(({name, sign}) => name === userName.value)) {
      alert ('Enter another username.')
    } else {
      users.push(user);
      localStorage.setItem('user', JSON.stringify(users)); 
      alert ('Registration completed successfully.');
    }
  }
}

btn.onclick = () => {
  authorizationFun();
}

btn_reg.onclick = () => {
  registration();
}
