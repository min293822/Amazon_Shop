document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  let cards = document.querySelectorAll('.custom-card-size');

  function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Check if the cookie string begins with the name we want
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

  const csrftoken = getCookie('csrftoken');

  cards.forEach(card => {
        card.addEventListener('click', productDetails);
    });

  function productDetails(event){
        let btn = event.target.parentElement.querySelector('.btn-primary');
        let input = event.target.parentElement.parentElement.querySelector('.proId');
        const id = input.value;
        const data = { id: id };
        const url1 = `send/`;
        const url2 = 'addToCart/';
            
        if (event.target !== btn) {
            fetch(url1, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrftoken
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    return response.json(); // Parse the JSON response
                } else {
                    return response.json().then(data => {
                        throw new Error(data.error || 'Error occurred'); // Throw an error with message
                    });
                }
            })
            .then(data => {
                console.log('success');

                window.location.href = `/ProductDetails/${id}/`; 
            })
            .catch(error => {
                console.log(error);
            });
        } else {
          fetch(url2, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrftoken
                },
                body: JSON.stringify(data)
          })
            .then(response => {
                if (response.ok) {
                    return response.json(); // Parse the JSON response
                } else {
                    return response.json().then(data => {
                        throw new Error(data.error || 'Error occurred'); // Throw an error with message
                    });
                }
            })
            .then(data => {
                document.getElementById('numCart').innerText = data;
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
  
  

});
