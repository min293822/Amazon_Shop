document.addEventListener("DOMContentLoaded", () => {
  
  const account = document.getElementById("account");
  const popupSignUp = document.getElementById("popup-signup");
  const popupLogin = document.getElementById("popup-login");
  const loginBtn = document.getElementById("loginbtn");
  
  loginBtn.addEventListener("click", () => {
    account.style.display = "none";
    popupSignUp.style.display = "none";
    popupLogin.style.display = "flex";
  });
  
  const login = document.getElementById("login");
  
  login.addEventListener("click", () => {
    account.style.display = "block";
    popupSignUp.style.display = "none";
    popupLogin.style.display = "none";
  });
  
  const noAccount = document.getElementById("noAccount");
  const name = document.getElementById("full-name");
  
  noAccount.addEventListener("click", () => {
    account.style.display = "none";
    popupLogin.style.display = "none";
    popupSignUp.style.display = "flex";
    name.style.display = "flex";
  });
  
  const signUpBtn = document.getElementById("signupbtn");

  signUpBtn.addEventListener("click", () => {
    account.style.display = "none";
    popupLogin.style.display = "none";
    popupSignUp.style.display = "flex";
    name.style.display = "flex";
  });
  
  const nameBtn = document.getElementById("namebutton");
  const birthBtn = document.getElementById("birthbutton");
  const sexBtn = document.getElementById("sexbutton");
  const emailBtn = document.getElementById("emailbutton");
  const passBtn = document.getElementById("passbutton");
  
  const birthDate = document.getElementById("birth-date");
  const sex = document.getElementById("sex");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  nameBtn.addEventListener("click", () => {
    popupSignUp.style.display = "flex";
    name.style.display = "none";
    birthDate.style.display = "flex";
  });

  birthBtn.addEventListener("click", () => {
    popupSignUp.style.display = "flex";
    birthDate.style.display = "none";
    sex.style.display = "flex";
  });

  sexBtn.addEventListener("click", () => {
    popupSignUp.style.display = "flex";
    sex.style.display = "none";
    email.style.display = "flex";
  });

  emailBtn.addEventListener("click", () => {
    popupSignUp.style.display = "flex";
    email.style.display = "none";
    password.style.display = "flex";
  });
  
  passBtn.addEventListener("click", () => {
    popupSignUp.style.display = "none";
    account.style.display = "block";
    password.style.display = "none";
  });  

  const showPassword = document.getElementById("showPassw");
  const passwordInput = document.getElementById("password-input");
  
  showPassword.addEventListener('change', (event) => {
    if (event.target.checked) {
      passwordInput.setAttribute("type", "text");
    } else {
      passwordInput.setAttribute("type", "password");
    }
  });
  
  const showPass = document.getElementById("show");
  const passwordLogin = document.getElementById("password-login");

  showPass.addEventListener('change', (event) => {
    if (event.target.checked) {
      passwordLogin.setAttribute("type", "text");
    } else {
      passwordLogin.setAttribute("type", "password");
    }
  });
  
});
