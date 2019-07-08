var Boton = document.getElementById('boton');
var link1 = document.getElementById('comunicate');
var menu =  document.getElementById('id-menu');

function showmenu() {
if (menu.classList.contains("hidden")) {
menu.classList.remove("hidden");
menu.classList.add("enabled-menu");
}
else{
menu.classList.remove("enabled-menu");
menu.classList.add("hidden");
}
}
function select() {
console.log("hola");
if (menu.classList.contains("enabled-menu")) {
menu.classList.remove("enabled-menu");
menu.classList.add("hidden");
}
else{
menu.classList.remove("hidden");
menu.classList.add("enabled-menu");
}
}
Boton.addEventListener('click', showmenu);
link1.addEventListener('click', select);
