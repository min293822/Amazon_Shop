document.addEventListener("DOMContentLoaded", () => {
  
  const haveOrder = document.getElementById("haveOrder");
  const noOrder = document.getElementById("noOrder");
  const orderBody = document.querySelector("#orderTable tbody");
  
  function updateLocalStorage(orderProduct) {
    localStorage.setItem("orderProduct", JSON.stringify(orderProduct));
    orderTable(); 
  }
  
  function orderTable() {
    orderBody.innerHTML = "";
    const check = localStorage.getItem("orderProduct");
    const datas = check ? JSON.parse(check) : [];
    haveOrder.style.display = datas.length ? "block" : "none";
    noOrder.style.display = datas.length ? "none" : "block";
    
    datas.forEach((data, index) => {
      const [name, disOutt, amount] = data;
      const total = parseFloat(disOutt) * amount;
      const trow = document.createElement("tr");
      trow.innerHTML = `
        <td>${index + 1}</td>
        <td class="name">${name}</td>
        <td class="amount">${Math.floor(amount)}</td>
        <td class="tot">$ ${total.toFixed(2)}</td>
        <td><a class="cancel btn-primary" data-index="${index}">Cancel</a></td>
      `;
      
      orderBody.appendChild(trow);
    });
    
    attachCancelListeners(datas);
  }
  
  const popup = document.getElementById("popup");
  const popupCancel = document.getElementById("popupCancel");
  const popupName = document.getElementById("popupName");
  const popupAmount = document.getElementById("popupAmount");
  const popupTotal = document.getElementById("popupTotal");
  const can = document.getElementById("can");
  const cancelPopup = document.getElementById("cancelPopup");
  const cancelAll = document.getElementById("cancelAll");
  const selection = document.getElementById("selection");
  const canAll = document.getElementById("canAll");
  const back = document.getElementById("back");
  const backAll = document.getElementById("backAll");
  const table = document.getElementById("orderTable");
  
  function attachCancelListeners(datas) {
    const cancelBtns = document.querySelectorAll(".cancel");
    
    cancelBtns.forEach(btn => {
      btn.addEventListener("click", (event) => {
        const index = event.target.getAttribute("data-index");
        const parentRow = btn.parentElement.parentElement;
        const parentName = parentRow.querySelector(".name").innerHTML;
        const parentAmount = parseInt(parentRow.querySelector(".amount").innerHTML, 10);
        const parentTotal = parentRow.querySelector(".tot").innerHTML.replace("$ ", "");
        
        popup.style.display = "flex";
        table.style.display = "none";
        cancelPopup.style.display = "none";
        popupName.innerHTML = parentName;
        popupAmount.value = parentAmount;
        popupTotal.innerHTML = `$ ${parentTotal}`;
        
        can.onclick = () => {
          const amountToRemove = parseInt(popupAmount.value, 10);
          if (amountToRemove < parentAmount) {
            datas[index][2] -= amountToRemove; 
          } else {
            datas.splice(index, 1);
          }
          updateLocalStorage(datas);
          popup.style.display = "none";
          table.style.display = "block";
        };
        
        back.onclick = () => {
          popup.style.display = "none";
          table.style.display = "block";
        };
      });
    });
  }
  
  cancelAll.addEventListener("click", () => {
    cancelPopup.style.display = "flex";
    table.style.display = "none";
    popup.style.display = "none";
    const check = localStorage.getItem("orderProduct");
    const datas = check ? JSON.parse(check) : [];
    selection.innerHTML = "";
    
    datas.forEach((data, index) => {
      const name = data[0];
      const option = document.createElement("option");
      option.value = index;
      option.textContent = name;
      selection.appendChild(option);
    });
    
    backAll.onclick = () => {
      cancelPopup.style.display = "none";
      table.style.display = "block";
    };
    
    canAll.onclick = () => {
      let val = [];
      const options = selection.options;

      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          val.push(parseInt(options[i].value));
        }
      }
      
      val.sort((a, b) => b - a).forEach(num => {
        datas.splice(num, 1);
      });
      
      updateLocalStorage(datas); 
      cancelPopup.style.display = "none";
      table.style.display = "block";
    };
  });
  
  orderTable();
});
