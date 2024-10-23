
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password");
    const showPass = document.getElementById("showPass");
    showPass.addEventListener('change', ()=>{
        if(showPass.checked){
        passwordInput.setAttribute("type","text");
      } else{
        passwordInput.setAttribute("type","password");
      }
      
      
    });
    
    const forgot = document.getElementById("forgot");
    forgot.onclick = ()=>{
      alert("WTF! Don't you even know your fucking password?");
    }
    
  
 });
    