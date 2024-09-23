document.addEventListener("DOMContentLoaded", () => {
  const noCart = document.getElementById("noCart");
  const haveCart = document.getElementById("haveCart");
  const tbody = document.querySelector("#cart-table tbody");

  function updateLocalStorage(cartTable) {
    localStorage.setItem("cartTable", JSON.stringify(cartTable));
    table();  // Re-render the table
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
      const [name, disOutt, amount] = item; // Default size and color to "N/A"
      const priced = parseFloat(disOutt);
      const total = priced * amount;
      totalsum += total;

      const trow = document.createElement("tr");
      const tNo = index + 1;
      trow.innerHTML = `
        <td>${tNo}</td>
        <td>${name}</td>
        <td>$ ${priced.toFixed(2)}</td>
        <td>
          <button class="decrease-btn" data-index="${index}">-</button>
          ${amount}
          <button class="increase-btn" data-index="${index}">+</button>
        </td>
        <td>$ ${total.toFixed(2)}</td>
      `;
      tbody.appendChild(trow);
    });

    const totalAmount = document.getElementById("total");
    if (totalAmount) {
      totalAmount.innerHTML = "$ " + totalsum.toFixed(2);
    }

    // Add event listeners for increase and decrease buttons
    document.querySelectorAll('.increase-btn').forEach(button => {
      button.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        datas[index][2] += 1;  // Increase the amount
        updateLocalStorage(datas);
      });
    });

    document.querySelectorAll('.decrease-btn').forEach(button => {
      button.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        if (datas[index][2] > 1) {
          datas[index][2] -= 1;  // Decrease the amount, but not below 1
        } else {
          datas.splice(index, 1);  // Remove item if quantity is 1 and user clicks decrease
        }
        updateLocalStorage(datas);
      });
    });
  }

  table();
});