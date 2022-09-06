//Botones
const fabBtn = document.getElementById("fabBtn");
const closeBtn = document.getElementById("closeBtn");
const addBtn = document.getElementById("addBtn");

//Sections
const addPopup = document.getElementById("addPopup");
const itemlist = document.getElementById("itemList");

//Con la siguiente función hago la mágia de mostrar u ocultar lo que quiero segun como se visualice la app
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

var laMagia = window.matchMedia("(max-width: 768px)");
magia(laMagia);
laMagia.addListener(magia);

//Habilitar el popup para agregar Items
fabBtn.addEventListener("click", showAddPopup);
function showAddPopup() {
  addPopup.classList.remove("d-none");
  fabBtn.classList.add("d-none");
  itemlist.classList.add("d-none");
}

//Agregar items a la lista
let itemName = document.getElementById("itemName");
let category = document.getElementById("category");
let description = document.getElementById("description");
addBtn.addEventListener("click", addItemToList);
function addItemToList() {}

//Cierra el popup y muestra la lista de Items
closeBtn.addEventListener("click", closeAddPopup);
function closeAddPopup() {
  addPopup.classList.add("d-none");
  fabBtn.classList.remove("d-none");
  itemlist.classList.remove("d-none");
}
