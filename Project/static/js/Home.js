document.addEventListener("DOMContentLoaded", () => {
  
  const searchInput = document.querySelector(".search-input"); 
  const cartBtns = document.querySelectorAll('.btn-primary');
  const numOfCart = document.getElementById('numCart');
  const cards = Array.from(document.querySelectorAll('#card'));


  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    const sortedCards = cards.sort((a, b) => {
      const cardA = a.dataset.productName.toLowerCase();
      const cardB = b.dataset.productName.toLowerCase();
      const matchA = cardA.includes(query) ? -1 : 0;
      const matchB = cardB.includes(query) ? -1 : 0;
      return matchA - matchB;
    });

    const row = document.querySelector('.row');
    sortedCards.forEach(card => {
      row.appendChild(card);
    });
  });

  cartBtns.forEach(button => {
    button.addEventListener('click', () => {
      numOfCart.textContent = parseInt(numOfCart.textContent) + 1;
    });
  });

  document.getElementById("to-top").addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

});
