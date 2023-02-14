document.getElementById("btn-menu").addEventListener("click", mostrar_menu);

document.getElementById("back-menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");

background_menu = document.getElementById("back-menu");

function mostrar_menu(){
  nav.style.display = "block";
  nav.style.right = "0px";
  background_menu.style.display = "block";
}

function ocultar_menu(){
  nav.style.right = "-250px";
  nav.style.display = "none";
  background_menu.style.display = "none";
}