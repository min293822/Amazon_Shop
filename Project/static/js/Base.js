document.addEventListener("DOMContentLoaded", () => {

  // Search and Filter Functionality
  const searchInput = document.querySelector(".search-input");
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
    size.innerHTML = size.innerHTML ? "Size - " + size.innerHTML : "Size - none";
  });
  
  for(let i=0; i<discounts.length; i++){
    const paren = discounts[i].parentElement;
    const discoun = parseFloat(discounts[i].innerHTML);
    const grandpa = paren.parentElement;
    const grandprice = grandpa.querySelector(".price");
    if(discoun===0){
      if(paren) {
        paren.style.background = "#fff";
        paren.style.background ="transparent";
        paren.style.color ="transparent";
      }
     if(grandprice) grandprice.style.display = "none";
    }
  };
  
  disOuts.forEach((disOut, index) => {
    const discount = parseFloat(discounts[index].innerHTML);
    const price = parseFloat(prices[index].innerHTML.replace("$ ", ""));
    const discountedPrice = price * (1 - (discount / 100));
    disOut.innerHTML = `$ ${discountedPrice.toFixed(2)}`;
  });

  discounts.forEach(discount => {
    discount.innerHTML += " %";
  });

  prices.forEach(price => {
    price.innerHTML = "$ " + price.innerHTML;
  });

  const rows = [productRow, sneakerRow, watchRow, pantRow, clothRow];

  function hideAllRows() {
    rows.forEach(row => row.classList.add("d-none"));
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

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    performSearch(query);
  });

  sneakerSide.addEventListener("click", () => performSearch("sneaker"));
  watchSide.addEventListener("click", () => performSearch("watch"));
  pantSide.addEventListener("click", () => performSearch("pant"));
  clothSide.addEventListener("click", () => performSearch("cloth"));

  // Cart button click event
  const cartBtns = document.querySelectorAll('.btn-primary');

  cartBtns.forEach(button => {
    button.addEventListener('click', () => {
      numOfCart.textContent = parseInt(numOfCart.textContent) + 1;
      const parentBtn = button.parentElement;
      const grandparent = parentBtn.parentElement;
      const name = parentBtn.querySelector(".card-title").innerHTML;
      const size = parentBtn.querySelector(".size").innerHTML;
      const color = parentBtn.querySelector(".color").innerHTML;
      const discount = parseFloat(grandparent.querySelector(".discount").innerHTML);
      const priceNumber = grandparent.querySelector(".price").innerHTML;
      const disco = parseFloat(priceNumber.replace("$ ", ""));
      const price = disco * (1 - (discount / 100));
      const amount = 1;

      let currentItem = [name, size, color, price, amount];

      let check = sessionStorage.getItem("datas");
      let datas = check ? JSON.parse(check) : [];

      let existingItem = datas.find(item => item[0] === currentItem[0] && item[1] === currentItem[1] && item[2] === currentItem[2]);

      if (existingItem) {
        existingItem[4] += 1;
      } else {
        datas.push(currentItem);
      }
      sessionStorage.setItem("datas", JSON.stringify(datas));

      updateTable();
    });
  });
  
  const noCart = document.getElementById("noCart");
 const haveCart = document.getElementById("haveCart");
 console.log(numOfCart.textContent);
 if(numOfCart.textContent>0){
   haveCart.classList.remove("d-none");
 } else if(numOfCart.textContent=0){
  noCart.classList.remove("d-none");
 }

  
  function updateTable() {
    const tbody = document.querySelector("#tbody");
    let totalsum = 0;
    const check = sessionStorage.getItem("datas");
    const datas = check ? JSON.parse(check) : [];

    datas.forEach((item, index) => {
      const [name, size, color, price, amount] = item;
      const total = price * amount;
      totalsum += total;
     let priced = parseFloat(price);
      const trow = document.createElement("tr");
      
      const tNo = index +1;
      
      trow.innerHTML = `
        <td>${tNo}</td>
        <td>${name}</td>
        <td>${size}</td>
        <td>${color}</td>
        <td>$ ${priced.toFixed(2)}</td>
        <td>${amount}</td>
        <td>$ ${total.toFixed(2)}</td>
      `;
      tbody.appendChild(trow);
    });

    const totalAmount = document.getElementById("total");
    if(totalAmount){
    totalAmount.innerText = "$ " + totalsum.toFixed(2);
    } 
  }

updateTable();

  // Scroll to top button
  document.getElementById("to-top").addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Product Detail Page Handling
  const cardsCustom = document.querySelectorAll(".custom-card-size");

  cardsCustom.forEach(card => {
    card.addEventListener('click', (event) => {
      const cartBtn = card.querySelector(".btn-primary");
      if (event.target !== cartBtn){
        const title = card.querySelector(".card-title").innerHTML;
        const img = card.querySelector(".card-img-top");
        const price = card.querySelector(".price").innerHTML;
        const stock = card.querySelector(".stock").innerHTML;
        const color = card.querySelector(".color").innerHTML;
        const size = card.querySelector(".size").innerHTML;
        const advertise = card.querySelector(".advertise").innerHTML;
        const imgAttri = img.getAttribute('src');
        const imgAlt = img.getAttribute('alt');
        const category = card.closest(".col-md-4").getAttribute('data-category');

        let datas = [title, imgAttri, price, stock, advertise, imgAlt, category, color, size];
        sessionStorage.setItem("datas", JSON.stringify(datas));
        window.location.href = "Product";
      }
    });
  });

  // Product Detail Page Display
  const data = sessionStorage.getItem("datas");
  const datas = JSON.parse(data);

  if (datas) {
    const titleDetail = document.getElementById("titleDetail");
    const priceDetail = document.getElementById("priceDetail");
    const stockDetail = document.getElementById("stockDetail");
    const colorDetail = document.getElementById("colorDetail");
    const sizeDetail = document.getElementById("sizeDetail");
    const advertiseDetail = document.getElementById("advertiseDetail");
    const imageDetail = document.getElementById("imageDetail");

    if (imageDetail) {
      imageDetail.setAttribute("src", datas[1]);
      imageDetail.setAttribute("alt", datas[5]);
    }

    if (titleDetail) titleDetail.innerHTML = datas[0];
    if (priceDetail) priceDetail.innerHTML = datas[2];
    if (stockDetail) stockDetail.innerHTML = datas[3];
    if (advertiseDetail) advertiseDetail.innerHTML = datas[4];
    if (colorDetail) colorDetail.innerHTML = datas[7];
    if (sizeDetail) sizeDetail.innerHTML = datas[8];

    const category = datas[6]; 
    if (category === 'sneaker') {
      sneakerRow.classList.remove("d-none");
    } else if (category === 'watch') {
      watchRow.classList.remove("d-none");
    } else if (category === 'pant') {
      pantRow.classList.remove("d-none");
    } else if (category === 'cloth') {
      clothRow.classList.remove("d-none");
    } 
  }
});