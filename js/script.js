//Botones
const fabBtn = document.getElementById("fabBtn");
const closeBtn = document.getElementById("closeBtn");
const addBtn = document.getElementById("addBtn");

//Sections
const addPopup = document.getElementById("addPopup");
const itemlist = document.getElementById("itemList");
const emptyList = document.getElementById("emptyList");

//formulario
const addForm = document.getElementById("addForm");

//Tabla
const table = document.getElementById("itemListTable");

//Con la siguiente función hago la mágia de mostrar u ocultar lo que quiero
function magia(x) {
  if (laMagia.matches) {
    fabBtn.classList.remove("d-none");
    closeBtn.classList.remove("d-none");
    addPopup.classList.add("d-none");
  } else {
    fabBtn.classList.add("d-none");
    closeBtn.classList.add("d-none");
    addPopup.classList.remove("d-none");
  }
}

//Aplicando magia segun como se visualice la app
var laMagia = window.matchMedia("(max-width: 768px)");
magia(laMagia);
laMagia.addListener(magia);

//Habilitar el popup para agregar Items
fabBtn.addEventListener("click", () => {
  addPopup.classList.remove("d-none");
  itemlist.classList.add("d-none");
  emptyList.classList.add("d-none");
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

//Agregar items a la lista
let counter = 0;
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let itemName = e.target.itemName.value;
  let itemCategory = e.target.itemCategory.value;
  let itemDescription = e.target.itemDescription.value;

  if (itemName && itemCategory && itemDescription) {
    counter++;
    if (counter > 0) {
      itemlist.classList.remove("d-none");
      emptyList.classList.add("d-none");
      magia(laMagia);
    } else {
      emptyList.classList.remove("d-none");
    }
    addItem(itemName, itemCategory, itemDescription);
    addForm.reset();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El formulario está incompleto",
    });
  }
});

//Cierra el popup y muestra la lista de Items
closeBtn.addEventListener("click", () => {
  addPopup.classList.add("d-none");
  if (counter > 0) {
    itemlist.classList.remove("d-none");
    emptyList.classList.add("d-none");
  } else {
    emptyList.classList.remove("d-none");
  }
});

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
