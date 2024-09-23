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
  
});