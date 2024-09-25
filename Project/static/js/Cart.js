document.addEventListener("DOMContentLoaded", () => {
  const noCart = document.getElementById("noCart");
  const haveCart = document.getElementById("haveCart");
  const tbody = document.querySelector("#cart-table tbody");

  function updateLocalStorage(cartTable) {
    localStorage.setItem("cartTable", JSON.stringify(cartTable));
    table(); 
  }

  function table() {
    tbody.innerHTML = ''; 
    let totalsum = 0;
    const check = localStorage.getItem("cartTable");
    const datas = check ? JSON.parse(check) : [];
    
    if (datas.length === 0) {
      noCart.style.display = "block";
      haveCart.style.display = "none";
    } else {
      noCart.style.display = "none";
      haveCart.style.display = "block";
    }

    datas.forEach((item, index) => {
      const [name, disOutt, amount] = item; 
      const priced = parseFloat(disOutt);
      const total = priced * amount;
      totalsum += total;

      const trow = document.createElement("tr");
      const tNo = index + 1;
      trow.innerHTML = `
        <td>${tNo}</td>
        <td>${name}</td>
        <td>$ ${priced.toFixed(2)}</td>
        <td class="amoun">
          <a class="btnDecrease btn-primary" data-index="${index}">-</a>
          ${Math.floor(amount)}
          <a class="btnIncrease btn-primary" data-index="${index}">+</a>
        </td>
        <td>$ ${total.toFixed(2)}</td>
      `;
      tbody.appendChild(trow);
    });

    const totalAmount = document.getElementById("total");
    if (totalAmount) {
      totalAmount.innerHTML = "$ " + totalsum.toFixed(2);
    }
    
    document.querySelectorAll('.btnIncrease').forEach(button => {
      button.style.fontSize = "20px";
      button.style.padding = "10px";
      button.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        datas[index][2] += 1;  
        updateLocalStorage(datas);
      });
    });

    document.querySelectorAll('.btnDecrease').forEach(button => {
      button.style.padding = "10px";
      button.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        if (datas[index][2] > 1) {
          datas[index][2] -= 1;  
        } else {
          datas.splice(index, 1);  
        }
        updateLocalStorage(datas);
      });
    });
  }

  table();
});