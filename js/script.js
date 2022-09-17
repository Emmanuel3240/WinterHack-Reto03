let counter = 0;

//Botones
const fabBtn = document.getElementById("fabBtn");
const closeBtn = document.getElementById("closeBtn");
const addBtn = document.getElementById("addBtn");

//Sections
const addPopup = document.getElementById("addPopup");
const itemList = document.getElementById("itemList");
const emptyList = document.getElementById("emptyList");

//formulario
const addForm = document.getElementById("addForm");

//Tabla
const table = document.getElementById("itemListTable");

//Habilita el popup para agregar Items
fabBtn.addEventListener("click", () => {
  addPopup.classList.remove("d-none");
  fabBtn.classList.add("d-none");
  if (counter > 0) {
    itemList.classList.add("d-none");
    itemList.classList.add("d-md-block");
  } else {
    emptyList.classList.add("d-none");
    emptyList.classList.add("d-md-block");
  }
});

//Cierra el popup
closeBtn.addEventListener("click", () => {
  addPopup.classList.add("d-none");
  fabBtn.classList.remove("d-none");
  if (counter > 0) {
    itemList.classList.remove("d-none");
    itemList.classList.remove("d-md-block");
  } else {
    emptyList.classList.remove("d-none");
    emptyList.classList.remove("d-md-block");
  }
});

//Agregar items a la lista
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let itemName = e.target.itemName.value;
  let itemCategory = e.target.itemCategory.value;
  let itemDescription = e.target.itemDescription.value;
  if (itemName && itemCategory && itemDescription) {
    counter++;
    itemList.classList.remove("d-none");
    itemList.classList.remove("d-md-block");
    emptyList.classList.add("d-none");
    emptyList.classList.remove("d-md-block");
    addPopup.classList.add("d-none");
    fabBtn.classList.remove("d-none");
    addItem(itemName, itemCategory, itemDescription);
    addForm.reset();
  }
});

//Funciónn agregar Item
const addItem = (item, category, description) => {
  let itemFull = `
  <tr>
  <td scope="row">${category}</td>
  <td>${item}</td>
  <td><button
  class="btn btn-secondary btn-sm"
  id="detailBtn"
  name="detailBtn"
  data-bs-toggle="modal"
  data-bs-target="#detailModal"
  onClick="detailBtn('${item}', '${category}', '${description}')">
<i class="fa-solid fa-chevron-right fa-sm"></i>
</button></td>
</tr>`;
  table.innerHTML += itemFull;
};

//Boton detalle
const detailBtn = (item, category, description) => {
  let itemDetail = `
  <div class="card-fluid">
<img src="img/${category}.png" class="card-img-top float-center">
<div class="card-body">
  <h5 class="card-title">${item}</h5>
  <p class="card-text">${description}</p>
</div>
</div>`;
  modalBody.innerHTML = itemDetail;
};
