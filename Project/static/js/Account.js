document.addEventListener("DOMContentLoaded", () => {
  const elements = {
    passwordLogin: document.getElementById("password-login"),
    showPass: document.getElementById("showPass"),
    showPassw: document.getElementById("showPassw"),
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
    passwordInput: document.getElementById("password-input"),
    passbutton: document.getElementById("passbutton"),
    signInHomeSide: document.getElementById("sign_in_home_side"),
   signUpHomeSide: document.getElementById("sign_up_home_side"),
   accountUrlUp: signUpHomeSide.getAttribute('data-account-url'),
   accountUrlIn: signInHomeSide.getAttribute('data-account-url'),
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
    elements.popupSignup.style.display = "none";
    elements.account.style.display = "flex";
  });

  elements.loginbtn.addEventListener("click", () => {
    elements.popupLogin.style.display = "flex";
    elements.account.style.display = "none";
  });

  elements.login.addEventListener("click", () => {
    elements.popupLogin.style.display = "none";
    elements.account.style.display = "block";
  });
  
if(elements.signInHomeSide){
elements.signInHomeSide.addEventListener("click", () => {
    window.location.href = accountUrlIn;
    elements.popupLogin.style.display = "flex";
    elements.account.style.display = "none";
  });
}

  elements.signupbtn.addEventListener("click", () => {
    elements.popupSignup.style.display = "flex";
    elements.fullName.style.display = "flex";
    elements.account.style.display = "none";
  });

if(elements.signUpHomeSide){
elements.signUpHomeSide.addEventListener("click", () => {
    window.location.href = accountUrlUp;
    elements.popupSignup.style.display = "flex";
    elements.fullName.style.display = "flex";
    elements.account.style.display = "none";
  });
}

  elements.showPass.addEventListener("change", (event) => {
    elements.passwordLogin.setAttribute('type', event.target.checked ? 'text' : 'password');
  });
  
  elements.showPassw.addEventListener("change", (event) => {
    elements.passwordInput.setAttribute('type', event.target.checked ? 'text' : 'password');
  });
});
