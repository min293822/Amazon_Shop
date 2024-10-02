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
  const emailData = document.getElementById("email");
  const headData = document.getElementById("head");

  // Function to fetch user info
  function fetchUserInfo() {
    fetch('/userinfo/')
      .then(response => response.json())
      .then(data => {
        emailData.innerText = data.email || "not found";
        headData.innerText = data.username || "not found";
      })
      .catch(error => {
        emailData.innerText = "not found";
        headData.innerText = "not found";
        console.error('Error:', error);
      });
  }

  // Call the function to fetch user info
  fetchUserInfo();

  function hideAllRows() {
    rows.forEach(row => row.classList.add("d-none"));
  }

  const cards = Array.from(document.querySelectorAll('.card'));

  function performSearch(query) {
    hideAllRows();
    if (query === "sneaker") {
      sneakerRow.classList.remove("d-none");
    } else if (query === "watch") {
      watchRow.classList.remove("d-none");
    } else if (query === "pant") {
      pantRow.classList.remove("d-none");
    } else if (query === "cloth") {
      clothRow.classList.remove("d-none");
    } else {
      productRow.classList.remove("d-none");
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

  // Debounce function
  function debounce(func, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // Add event listeners
  searchInput.addEventListener("input", debounce(() => {
    const query = searchInput.value.toLowerCase();
    performSearch(query);
  }, 300));

  sneakerSide.addEventListener("click", () => performSearch("sneaker"));
  watchSide.addEventListener("click", () => performSearch("watch"));
  pantSide.addEventListener("click", () => performSearch("pant"));
  clothSide.addEventListener("click", () => performSearch("cloth"));

  const location = document.getElementById("location");
  fetch("/country/")
    .then(response => response.json())
    .then(data => {
      location.innerHTML = data.country || "Not Found";
    })
    .catch(error => {
      console.error('Error:', error);
      location.innerHTML = "Not Found";
    });

  document.getElementById("to-top").addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
