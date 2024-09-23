document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.querySelector(".search-input");
  const numOfCart = document.getElementById('numCart');
  
  const sneakerSide = document.getElementById("sneakers");
  const watchSide = document.getElementById('watches');
  const pantSide = document.getElementById('pants');
  const clothSide = document.getElementById('clothes');
  const sizes = document.querySelectorAll('.size');
const discounts = document.querySelectorAll('.discount');

for(let i=0; i<sizes.length; i++){
  sizes[i].innerHTML = sizes[i].innerHTML ? "Size - " + sizes[i].innerHTML.replace("Size - ", "") : "Size - none";
}
  
  for (let i = 0; i < discounts.length; i++) {
    const paren = discounts[i].parentElement;
    const discountValue = parseFloat(discounts[i].innerHTML);
    const grandpa = paren.parentElement;
    const grandprice = grandpa.querySelector(".price");
    const priceElement = grandpa.querySelector('.price');
    if (discountValue === 0) {
      priceElement.style.margin = "10px";
      if (paren) {
        paren.style.background = "transparent";
        paren.style.color = "transparent";
      }
      if (grandprice) grandprice.style.display = "none";
    }
  }

discounts.forEach(discount =>

  discount.innerHTML = discount.innerHTML.replace(' %', '') + ' %');

const cartBtns = document.querySelectorAll('.btn-primary');

for (let i = 0; i < cartBtns.length; i++) {
  cartBtns[i].addEventListener("click", () => {
    const numCount = parseFloat(numOfCart.innerHTML) + (1/2);
    numOfCart.innerHTML = numCount;

    const parentBtn = cartBtns[i].parentElement;
    const name = parentBtn.querySelector(".card-title").innerHTML;
    const disOut = parentBtn.querySelector('.disOut').innerHTML;
    const disOutt = parseFloat(disOut.replace("$ ", "")).toFixed(1);
    const amount = 1;

    if (isNaN(disOutt)) {
      alert("Invalid discount value");
    } else {
      let currentItem = [name, disOutt, amount];
      let check = localStorage.getItem("cartTable");  // Consistent key
      const cartTable = check ? JSON.parse(check) : [];

      let existingItem = cartTable.find(item => item[0] === currentItem[0]);

      if (existingItem) {
        existingItem[2] += (1/2);  // Update amount
      } else {
        cartTable.push(currentItem);
      }

      localStorage.setItem("cartTable", JSON.stringify(cartTable));
    }
  });
}

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
  
  const customCards = document.querySelectorAll(".custom-card-size");
  customCards.forEach(card => {
    card.addEventListener('click', (event) => {
      
const cartBtn = card.querySelector(".btn-primary");
      if (event.target !== cartBtn) {
const title = card.querySelector(".card-title")?.innerHTML || "No title";
const img = card.querySelector(".card-img-top");
const discoOut = card.querySelector(".disOut")?.innerHTML || "No discount";
const priceDetail = card.querySelector(".price")?.innerHTML || "No price";
const stockDetail = card.querySelector(".stock")?.innerHTML || "No stock";
const colorDetail = card.querySelector(".color")?.innerHTML || "No color";
const sizeDetail = card.querySelector(".size")?.innerHTML || "No size";
const advertiseDetail = card.querySelector(".advertise")?.innerHTML || "No advertise";
        const imgAttri = img.getAttribute('src');
        const imgAlt = img.getAttribute('alt');
        const category = card.closest(".col-md-4").getAttribute('data-category');

        let productDetails = [title,imgAttri,priceDetail, stockDetail, advertiseDetail, imgAlt, category, colorDetail, sizeDetail, discoOut];
        localStorage.setItem("productDetails", JSON.stringify(productDetails));
        window.location.href = "http://127.0.0.1:8000/Product/";
    }
    });
  });
  
  document.getElementById("to-top").addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});