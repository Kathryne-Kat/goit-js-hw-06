const formLogin = document.querySelector(".login-form");

function formSubmit(event) {
  event.preventDefault();
    if (formLogin.elements.email.value === "" || formLogin.elements.password.value === "") {
      //console.log("Please fill in all the fields!");
      return alert("Please fill in all the fields!");             
  }
  console.log(`Email: ${formLogin.elements.email.value}, Password: ${formLogin.elements.password.value}`);
  formLogin.reset();
}

formLogin.addEventListener("submit", formSubmit);