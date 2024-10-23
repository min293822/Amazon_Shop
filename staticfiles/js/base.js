let cards = document.querySelectorAll('.card');

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {1
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');

cards.forEach(card=>addToCart);

function addToCart(event){
  let btn = event.target.querySelector('.btn-primary');
  if(event.target != btn){
    let id = event.target.querySelector('.proId');
    let url = 'ProductDetails/';
    let data = {id:id}
   
   fetch(url, {
     method:'POST',
     headers:{
      "Content-Type": "application/json", 
      "X-CSRFToken": csrftoken},
     body: JSON.stringify(data)
   }).then(res=>res.json()).then(data=>{
     console.log('success');
   }).catch(error=>{
     console.log(error);
   });
   
  } else{
    console.log("Error");
  }
}
