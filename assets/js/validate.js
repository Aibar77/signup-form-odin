const passwrd = document.getElementById('password')
const confirm = document.getElementById('confirm-password')
const submitBtn = document.querySelector('.submit-btn');
const error = document.querySelector('.password-error');
const form = document.querySelector('#form')
let valid = false;
submitBtn.addEventListener('click', (e)=> {
  if (passwrd.value === confirm.value) {
    valid = true;
    passwrd.classList.add('valid')
    confirm.classList.add('valid')
  } else {
    
    passwrd.classList.add('invalid')
    confirm.classList.add('invalid')
    error.style.display = 'inline-block';
    
  }
})
form.addEventListener('submit', (e)=> {
  if (!valid) {
    e.preventDefault();
  }
})