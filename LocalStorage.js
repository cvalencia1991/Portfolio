function saveinfomation(){
     let nameform = document.getElementById('name').value;
     let email = document.getElementById('email').value;
     let message = document.getElementById('messageform').value;

     const task = {
          nameform,
          email,
          message
     }
     localStorage.setItem('information',JSON.stringify(task));
}

function loadDataFromLocalStorage(){
     if(localStorage.getItem('information')!== null){
          let tasks = JSON.parse(localStorage.getItem('information'));
          document.getElementById('name').value = tasks.nameform;
          document.getElementById('email').value = tasks.email;
          document.getElementById('messageform').value = tasks.message;
     }
}

loadDataFromLocalStorage();