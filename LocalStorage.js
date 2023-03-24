function saveinfomation() {
  const nameform = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('messageform').value;

  const task = {
    nameform,
    email,
    message,
  };
  localStorage.setItem('information', JSON.stringify(task));
}

function loadDataFromLocalStorage() {
  if (localStorage.getItem('information') !== null) {
    const tasks = JSON.parse(localStorage.getItem('information'));
    document.getElementById('name').value = tasks.nameform;
    document.getElementById('email').value = tasks.email;
    document.getElementById('messageform').value = tasks.message;
  }
}
saveinfomation();
loadDataFromLocalStorage();
