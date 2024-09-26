document.addEventListener("DOMContentLoaded", () => {
const searchInput = document.querySelector(".search-input");
  const sneakerSide = document.getElementById("sneakers");
  const watchSide = document.getElementById('watches');
  const pantSide = document.getElementById('pants');
  const clothSide = document.getElementById('clothes');
const productRow = document.getElementById('product-row');
  const sneakerRow = document.getElementById("sneaker-row");
  const watchRow = document.getElementById('watch-row');
  const pantRow = document.getElementById('pant-row');
  const clothRow = document.getElementById('cloth-row');
  const rows = [productRow, sneakerRow, watchRow, pantRow, clothRow];

  function hideAllRows() {
    rows.forEach(row => row.classList.add("d-none"));
  }

const cards = Array.from(document.querySelectorAll('.card'));

  function performSearch(query) {
    hideAllRows();
    if (query === "sneaker") {
      sneakerRow.classList.replace("d-none", "row");
    } else if (query === "watch") {
      watchRow.classList.replace("d-none", "row");
    } else if (query === "pant") {
      pantRow.classList.replace("d-none", "row");
    } else if (query === "cloth") {
      clothRow.classList.replace("d-none", "row");
    } else {
      productRow.classList.replace("d-none", "row");
      productRow.innerHTML = '';

      const filteredCards = cards.filter(card => {
        const productName = card.dataset.productName.toLowerCase();
        return productName.includes(query);
      });

      filteredCards.forEach(card => {
        const clonedCard = card.cloneNode(true);
        productRow.appendChild(clonedCard);
      });
    }
  }

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    performSearch(query);
  });

  sneakerSide.addEventListener("click", () => performSearch("sneaker"));
  watchSide.addEventListener("click", () => performSearch("watch"));
  pantSide.addEventListener("click", () => performSearch("pant"));
  clothSide.addEventListener("click", () => performSearch("cloth"));
  
  
  document.getElementById("to-top").addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});