const form = document.getElementById('contactfinalform');


form.addEventListener('submit', check);


function check(e){
     e.preventDefault();
   /*   validationform(); */
     saveinfomation();
}

function validationform(){
     let nameform = document.getElementById('name').value;
     let email = document.getElementById('email').value;
     let message = document.getElementById('messageform').value;


}

function saveinfomation(){
     let nameform = document.getElementById('name').value;
     let email = document.getElementById('email').value;
     let message = document.getElementById('messageform').value;

     const task = {
          nameform,
          email,
          message
     }

     if(localStorage.getItem('information')!== null){
          //let tasks = JSON.parse(localStorage.getItem('information'));
          //tasks.push(task);
          localStorage.setItem('information',JSON.stringify(task));
     }else {
               //let tasks = JSON.parse(localStorage.getItem('information'));
               //tasks.push(task);
               localStorage.setItem('information',JSON.stringify(task));
     }


     // if(localStorage.getItem('information')=== null){
     //      let tasks= [];
     //      tasks.push(task);
     //      localStorage.setItem('information',JSON.stringify(tasks));
     // } else {
     //      let tasks = JSON.parse(localStorage.getItem('information'));
     //      tasks.push(task);
     //      localStorage.setItem('information',JSON.stringify(tasks));
     // }
   /*  console.log(JSON.parse(localStorage.getItem('infomation'))) convert the infomation into a string*/
}




/* function check(e){
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
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
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
} */