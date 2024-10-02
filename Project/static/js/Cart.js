document.addEventListener("DOMContentLoaded", () => {
  const noCart = document.getElementById("noCart");
  const haveCart = document.getElementById("haveCart");
  const tbody = document.querySelector("#cart-table tbody");
  const totalAmount = document.getElementById("total");
  
  function updateLocalStorage(cartTable) {
    localStorage.setItem("cartTable", JSON.stringify(cartTable));
    renderTable(); 
  }

  function renderTable() {
    tbody.innerHTML = ''; 
    let totalsum = 0;
    const check = localStorage.getItem("cartTable");
    const datas = check ? JSON.parse(check) : [];
    
    noCart.style.display = datas.length === 0 ? "block" : "none";
    haveCart.style.display = datas.length === 0 ? "none" : "block";

    datas.forEach((item, index) => {
      const [name, disOutt, amount] = item; 
      const priced = parseFloat(disOutt);
      const total = priced * amount;
      totalsum += total;

      const trow = document.createElement("tr");
      trow.innerHTML = `
        <td>${index + 1}</td>
        <td>${name}</td>
        <td>$ ${priced.toFixed(2)}</td>
        <td class="amount">
          <a class="btnDecrease btn-primary" data-index="${index}">-</a>
          ${Math.floor(amount)}
          <a class="btnIncrease btn-primary" data-index="${index}">+</a>
        </td>
        <td>$ ${total.toFixed(2)}</td>
      `;
      tbody.appendChild(trow);
    });

    if (totalAmount) {
      totalAmount.innerHTML = "$ " + totalsum.toFixed(2);
    }

    attachEventListeners(datas);
  }

  function attachEventListeners(datas) {
    document.querySelectorAll('.btnIncrease').forEach(button => {
      button.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        datas[index][2] += 1;  
        updateLocalStorage(datas);
      });
    });

    document.querySelectorAll('.btnDecrease').forEach(button => {
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

  renderTable();
  
  const orderBtn = document.getElementById("orderbtn");
  orderBtn.addEventListener("click", () => {
    const orderProduct = [];
    const checkReturn = localStorage.getItem("cartTable");
    const dataReturn = checkReturn ? JSON.parse(checkReturn) : [];
    
    dataReturn.forEach(items => {
      let name = items[0];
      let disOutt = items[1];
      let amount = items[2];
      let current = [name, disOutt, amount];
      orderProduct.push(current);
    });
    
    localStorage.setItem("orderProduct", JSON.stringify(orderProduct));
    localStorage.removeItem('cartTable');
    window.location.href = "http://127.0.0.1:8000/Return/";
    
  });
});
