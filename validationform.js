const form = document.getElementById('contactfinalform');

form.addEventListener('submit', check);

function check(e){
     e.preventDefault();
     if(validationform()){
          // submit the form
          saveinfomation()
          //form.submit();
     }

}

function validationform() {
     let nameform = document.getElementById('name');
     let email = document.getElementById('email');
     let message = document.getElementById('messageform');

     nameform.value = nameform.value.trim();
     email.value = email.value.trim();
     message.value = message.value.trim();

     if(nameform.value === '') {
          SetError(nameform,'Username is required');
     } else {
          SetSuccess (nameform);
     }
     if (email.value=== '') {
          SetError(email,'email is required');
     } else if(!isValidEmail(email.value)) {
          SetError(email,'provide a valid email adress');
     } else {
          SetSuccess (email);
     }

     if (message.value=== '') {
          SetError(message,'message is required');
     } else {
          SetSuccess (message);
     }

     let isValid=true;
     if(nameform.classList.contains('error') || email.classList.contains('error') || message.classList.contains('error')) {
          isValid = false
     }
     return isValid
}


function isValidEmail (email) {
     const re =/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
     //const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
     return re.test(String(email).toLowerCase());
 }

function SetError (element, message) {
     const inputControl = element.parentElement;
     const errorDisplay = element.previousElementSibling;

     errorDisplay.innerText = message;
     element.classList.add('error');
     element.classList.remove('success');
}

function SetSuccess (element) {
     const inputControl = element.parentElement;
     const errorDisplay = element.previousElementSibling;

     errorDisplay.innerText='';
     element.classList.add('success');
     element.classList.remove('error');
}

function checkEmail(){
     let str = emailElement.value;

     const errorDisplay = emailElement.previousElementSibling;
     if(str!==str.toLowerCase()){
          errorDisplay.innerText='Email has to be in lower case';
          emailElement.classList.add('error');
          emailElement.classList.remove('success');
     } else{
          errorDisplay.innerText='';
          emailElement.classList.remove('error');
     }
}

const emailElement = document.getElementById('email');
emailElement.addEventListener('input', checkEmail);