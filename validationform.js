 const form = document.getElementById('contactfinalform');
 const button = document.getElementById('submitbtn')

 function check(event){
    event.preventDefault();
    let emailuser = form.email.value;
    let textname = form.name.value;
    let message = form.message.value;
   if(emailuser!==emailuser.toLowerCase()) {
        alert ("Edit the Email in Lower Case");
   } else if(emailuser===emailuser.toLowerCase() &&  textname!== "" &  message!== "") {
        alert("Success!! form sent")
   }
 }
 button.addEventListener('click',check)