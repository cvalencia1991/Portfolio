const form = document.getElementById('contactfinalform');
const nameform = document.getElementById('name')
const email = document.getElementById('email');
const message = document.getElementById('messageform')


function check(e){
     e.preventDefault();
     ValidateImputs();
}

function ValidateImputs() {
     const nameValue = nameform.value.trim();
     const emailvalue = email.value.trim();
     const message = form.message.value.trim();


     if(nameValue === '') {
          SetError(nameform,'Username is required');
     } else {
          SetSuccess (nameform);
     }
     if (emailvalue=== '') {
          SetError(email,'Username is required');
     } else if(!isValidEmail(emailvalue)) {
          SetError(email,'provide a valid email adress');
     } else {
          SetSuccess (email);
     }

}


function isValidEmail (email) {
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(String(email).toLowerCase());
 }

function SetError (element, message) {
     const inputControl = element.parentElement;
     const errorDisplay = inputControl.querySelector('.error');

     errorDisplay.innerText = message;
     inputControl.classList.add('error');
     inputControl.classList.remove('success');
}

function SetSuccess (element) {
     const inputControl = element.parentElement;
     const errorDisplay = inputControl.querySelector('.error');

     errorDisplay.innertext = '';
     inputControl.classlist.add('success');
     inputControl.classlist.remove('error');
}


form.addEventListener('submit', check);






