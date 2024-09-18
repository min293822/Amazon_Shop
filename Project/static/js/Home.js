document.addEventListener("DOMContentLoaded", () => {
  
  const searchInput = document.querySelector(".search-input"); 
  const cartBtns = document.querySelectorAll('.btn-primary');
  const numOfCart = document.getElementById('numCart');
  const cards = Array.from(document.querySelectorAll('.card'));
  
 const productRow = document.getElementById('product-row');
const sneakerRow = document.getElementById("sneaker-row"); 
 const watchRow = document.getElementById('watch-row');
 const pantRow = document.getElementById('pant-row');
const clothRow = document.getElementById('cloth-row');

const sneakerSide = document.getElementById("sneakers"); 
 const watchSide = document.getElementById('watches');
 const pantSide = document.getElementById('pants');
const clothSide = document.getElementById('clothes');

const discounts = document.querySelectorAll('.discount');
const prices = document.querySelectorAll('.price');
const disOuts = document.querySelectorAll('.disOut');

const sizes = document.querySelectorAll('.size');

sizes.forEach(size => {
  if(size.innerHTML == ""){
    size.innerHTML = "Size - none";
  } else{
    size.innerHTML = "Size - " + size.innerHTML;
  }
});

disOuts.forEach((disOut, index) => {
  const discount = parseInt(discounts[index].innerHTML, 10);
  const price = parseInt(prices[index].innerHTML, 10);
const discountedPrice = price * (1 - (discount/100));
disOut.innerHTML = `$ ${discountedPrice.toFixed(1)}`;
  });
  
discounts.forEach(discount => {
  discount.innerHTML = discount.innerHTML + " %";
});

prices.forEach(price => {
  price.innerHTML = "$ " + price.innerHTML;
});

const rows = [productRow, sneakerRow, watchRow, pantRow, clothRow];

function hideAllRows(){
  rows.forEach(row =>
    row.classList.replace("row", "d-none"));
}

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


searchInput.addEventListener("input", ()=>{
  const query = searchInput.value.toLowerCase();
  performSearch(query);
});

sneakerSide.addEventListener("click", ()=>{
  performSearch("sneaker");
});

watchSide.addEventListener("click", ()=>{
  performSearch("watch");
});

pantSide.addEventListener("click", ()=>{
  performSearch("pant");
});

clothSide.addEventListener("click", ()=>{
  performSearch("cloth");
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
