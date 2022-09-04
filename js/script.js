const fabBtn = document.getElementById("fabBtn");
const closeBtn = document.getElementById("closeBtn");
const addPopup = document.getElementById("addPopup");

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
