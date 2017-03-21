var btnMenu = document.getElementById("menu_boton");
var nav = document.getElementById("menu_movil");

btnMenu.addEventListener('click', function(){
  nav.classList.toggle('mostrar');
});
