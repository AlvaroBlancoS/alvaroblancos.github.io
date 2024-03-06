let boton = document.querySelectorAll(".b");
let indice = document.getElementById("column-indice");
boton[1].style.display = "none";
boton[0].addEventListener("click", function () {
  indice.style.display = "flex";
  boton[0].style.display = "none";
  boton[1].style.display = "flex";
});

boton[1].addEventListener("click", function () {
  indice.style.display = "none";
  boton[1].style.display = "none";
  boton[0].style.display = "flex";
});
/*ESTA PARTE NO ENTIENDO LO QUE ESTÁ HACIENDO*/
// Función que se ejecutará cuando cambie el tamaño de la ventana
function handleResize() {
  // Obtén el ancho y alto actual de la ventana
  var windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  // var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  // Realiza acciones basadas en el tamaño actual de la ventana
  if (windowWidth < 768) {
    indice.style.display = "none";
    // Realiza acciones específicas para ventanas pequeñas
  } else {
    indice.style.display = "flex";
    boton[0].style.display = "flex";
    boton[1].style.display = "none";
    // Realiza acciones específicas para ventanas grandes
  }
}

// Agrega un escuchador de eventos al evento resize
window.addEventListener("resize", handleResize);

// Llama a handleResize() al cargar la página para inicializar según el tamaño inicial de la ventana
handleResize();
