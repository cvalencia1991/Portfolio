/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-nested-ternary */
const form = document.getElementById('contactfinalform');
const emailElement = document.getElementById('email');

function validationform() {
  const nameform = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('messageform');
  let isValid = true;
  nameform.value = nameform.value.trim();
  email.value = email.value.trim();
  message.value = message.value.trim();

  function isValidEmail(email) {
    const re = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
  }
  function SetError(element, message) {
    const errorDisplay = element.previousElementSibling;
    errorDisplay.innerText = message;
    element.classList.add('error');
    element.classList.remove('success');
  }
  function SetSuccess(element) {
    const errorDisplay = element.previousElementSibling;
    errorDisplay.innerText = '';
    element.classList.add('success');
    element.classList.remove('error');
  }
  function checkEmail() {
    const errorDisplay = emailElement.previousElementSibling;
    const str = emailElement.value;
    if (str !== str.toLowerCase()) {
      errorDisplay.innerText = 'Email has to be in lower case';
      emailElement.classList.add('error');
      emailElement.classList.remove('success');
    } else {
      errorDisplay.innerText = '';
      emailElement.classList.remove('error');
    }
  }
  emailElement.addEventListener('input', checkEmail);
  nameform.value === '' ? SetError(nameform, 'Username is required') : SetSuccess(nameform);
  email.value === '' ? SetError(email, 'email is required') : !isValidEmail(email.value) ? SetError(email, 'provide a valid email adress') : SetSuccess(email);
  message.value === '' ? SetError(message, 'message is required') : SetSuccess(message);
  if (nameform.classList.contains('error') || email.classList.contains('error') || message.classList.contains('error')) {
    isValid = false;
  }
  return isValid;
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  validationform();
  if (validationform()) {
    saveinfomation();
    form.submit();
  }
});
