document.addEventListener("DOMContentLoaded", () => {
  const elements = {
    passwordLogin: document.getElementById("password-login"),
    showPass: document.getElementById("showPass"),
    loginbtn: document.getElementById("loginbtn"),
    signupbtn: document.getElementById("signupbtn"),
    popupLogin: document.getElementById("popup-login"),
    popupSignup: document.getElementById("popup-signup"),
    account: document.getElementById("account"),
    login: document.getElementById("login"),
    fullName: document.getElementById("full-name"),
    birthDate: document.getElementById("birth-date"),
    sex: document.getElementById("sex"),
    email: document.getElementById("email"),
    password: document.getElementById("password"),
    namebutton: document.getElementById("namebutton"),
    birthbutton: document.getElementById("birthbutton"),
    sexbutton: document.getElementById("sexbutton"),
    emailbutton: document.getElementById("emailbutton"),
    passbutton: document.getElementById("passbutton"),
  };

  const showSection = (current, next) => {
    elements[current].style.display = "none";
    elements[next].style.display = "flex";
  };

  elements.namebutton.addEventListener("click", () => showSection("fullName", "birthDate"));
  elements.birthbutton.addEventListener("click", () => showSection("birthDate", "sex"));
  elements.sexbutton.addEventListener("click", () => showSection("sex", "email"));
  elements.emailbutton.addEventListener("click", () => showSection("email", "password"));

  elements.passbutton.addEventListener("click", () => {
    elements.password.style.display = "none";
    elements.account.style.display = "flex";
    elements.popupSignup.style.display = "none";
  });

  elements.loginbtn.addEventListener("click", () => {
    elements.popupLogin.style.display = "flex";
    elements.account.style.display = "none";
  });

  elements.login.addEventListener("click", () => {
    elements.popupLogin.style.display = "none";
    elements.account.style.display = "block";
  });

  elements.signupbtn.addEventListener("click", () => {
    elements.popupSignup.style.display = "flex";
    elements.fullName.style.display = "flex";
    elements.account.style.display = "none";
  });

  elements.showPass.addEventListener("change", (event) => {
    elements.passwordLogin.setAttribute('type', event.target.checked ? 'text' : 'password');
  });
});
