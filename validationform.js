const form = document.getElementById('contactfinalform');
const emailElement = document.getElementById('email');

function validationform() {
  const nameform = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('messageform');

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

  if (nameform.value === '') {
    SetError(nameform, 'Username is required');
  } else {
    SetSuccess(nameform);
  }
  if (email.value === '') {
    SetError(email, 'email is required');
  } else if (!isValidEmail(email.value)) {
    SetError(email, 'provide a valid email adress');
  } else {
    SetSuccess(email);
  }

  if (message.value === '') {
    SetError(message, 'message is required');
  } else {
    SetSuccess(message);
  }

  let isValid = true;
  if (nameform.classList.contains('error') || email.classList.contains('error') || message.classList.contains('error')) {
    isValid = false;
  }
  return isValid;
}

function check(e) {
  e.preventDefault();
  validationform();
  if (validationform()) {
    // eslint-disable-next-line no-undef
    saveinfomation();
    // eslint-disable-next-line no-alert
    alert('submit sucessfull');
  }
}
form.addEventListener('submit', check);