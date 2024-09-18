document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".custom-card-size");

  cards.forEach(card => {
    card.addEventListener('click', () => {
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
    });
  });

  const data = sessionStorage.getItem("datas");
  const datas = data ? JSON.parse(data) : null;

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
      document.getElementById("sneaker-row").classList.replace("d-none", "row");
    } else if (category === 'watch') {
      document.getElementById("watch-row").classList.replace("d-none", "row");
    } else if (category === 'pant') {
      document.getElementById("pant-row").classList.replace("d-none", "row");
    } else if (category === 'cloth') {
      document.getElementById("cloth-row").classList.replace("d-none", "row");
    } 
  }
});