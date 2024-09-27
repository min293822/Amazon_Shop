document.addEventListener("DOMContentLoaded", () => {
 
  const data = localStorage.getItem("productDetails");
  const datas = data? JSON.parse(data): [];

  if (datas) {
    const titleDetail = document.getElementById("titleDetail");
    const priceDetail = document.getElementById("priceDetail");
    const stockDetail = document.getElementById("stockDetail");
    const colorDetail = document.getElementById("colorDetail");
    const sizeDetail = document.getElementById("sizeDetail");
    const advertiseDetail = document.getElementById("advertiseDetail");
    const discountDetail = document.getElementById("discountDetail");
    const imageDetail = document.getElementById("imageDetail");
    const discountOut = document.getElementById("discountOut");

    if (imageDetail) {
      imageDetail.setAttribute("src", datas[1]);
      imageDetail.setAttribute("alt", datas[5]);
    }

    if (titleDetail) titleDetail.innerHTML = datas[0];

    if (priceDetail) priceDetail.innerHTML = datas[2];
    if (discountDetail) discountDetail.innerHTML = datas[9];
    if (stockDetail) stockDetail.innerHTML = datas[3];
    if (advertiseDetail) advertiseDetail.innerHTML = datas[4];
    if (colorDetail) colorDetail.innerHTML = datas[7];
    if (sizeDetail) sizeDetail.innerHTML = datas[8] ;
    if (discountOut) {
      let discounted = parseFloat(datas[9].replace("$ ", ""));
      let orgPrice = parseFloat(datas[2].replace("$ ", ""));
      discountOut.innerHTML = ((1 - (discounted / orgPrice)) * 100).toFixed(2) + " % Off";
    
      
    }
  
  const sizeWatch = document.querySelectorAll(".sizeWatch");
  sizeWatch.forEach(siwatch => siwatch.innerHTML  = datas[8]);
  
    const productRow = document.getElementById('product-row');
  const sneakerRow = document.getElementById("sneaker-row");
  const watchRow = document.getElementById('watch-row');
  const pantRow = document.getElementById('pant-row');
  const clothRow = document.getElementById('cloth-row');
    const category = datas[6];
    
    if (category === 'sneaker') {
      sneakerRow.classList.replace("d-none", "row");
    } else if (category === 'watch') {
      watchRow.classList.replace("d-none", "row");
    } else if (category === 'pant') {
      pantRow.classList.replace("d-none", "row");
    } else if (category === 'cloth') {
      clothRow.classList.replace("d-none", "row");
    }
  }
  
  const customCards = document.querySelectorAll(".custom-card-size");
  customCards.forEach(card => {
    card.addEventListener('click', (event) => {
      
const cartBtn = card.querySelector(".btn-primary");
      if (event.target !== cartBtn) {
const title = card.querySelector(".card-title")?.innerHTML || "No title";
const img = card.querySelector(".card-img-top");
const discoOut = card.querySelector(".discount")?.innerHTML || "No discount";
const priceDetail = card.querySelector(".price")?.innerHTML || "No price";
const stockDetail = card.querySelector(".stock")?.innerHTML || "No stock";
const colorDetail = card.querySelector(".color")?.innerHTML || "No color";
const sizeDetail = card.querySelector(".size")?.innerHTML || "No size";
const advertiseDetail = card.querySelector(".advertise")?.innerHTML || "No advertise";
        const imgAttri = img.getAttribute('src');
        const imgAlt = img.getAttribute('alt');
        const category = card.closest(".col-md-4").getAttribute('data-category');

        let productDetails = [title,imgAttri,priceDetail, stockDetail, advertiseDetail, imgAlt, category, colorDetail, sizeDetail, discount];
        localStorage.setItem("productDetails", JSON.stringify(productDetails));
        window.location.href = "http://127.0.0.1:8000/Product/";
    }
    });
  });
  
  const discounts = document.querySelectorAll('.discount');
  for (let i = 0; i < discounts.length; i++) {
    const paren = discounts[i].parentElement;
    const discountValue = parseFloat(discounts[i].innerHTML);
    const grandpa = paren.parentElement;
    const grandprice = grandpa.querySelector(".price");
      if (discountValue === 0) {

      if (paren) {
        paren.style.background = "transparent";
        paren.style.color = "transparent";
      }
      if (grandprice) grandprice.style.display = "none";
            
    }
  }
  
});