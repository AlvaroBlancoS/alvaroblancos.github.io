let cadenaCapitulos = [];
let cadenaArticulos = [];
let cadenaParrafos = [];
let cajaTexto = angular.module("appLectura", ["ngSanitize", "ngAnimate"]);
cajaTexto
  .controller("CtrlCapitulos", function ($scope, $sce) {
    $scope.capitulos = [];
    for (let i = 0; i < cadenaCapitulos.length; i++) {
      let capitulo = cadenaCapitulos[i].join("<br><br>");
      $scope.capitulos.push($sce.trustAsHtml(capitulo));
    }
  })
  .controller("CtrlArticulo", function ($scope, $sce) {
    $scope.articulos = [];
    for (let i = 0; i < cadenaArticulos.length; i++) {
      let indice = cadenaArticulos[i].join("<br><br>");
      $scope.articulos.push($sce.trustAsHtml(indice));
    }
    $scope.indicesVisibles = new Array(cadenaArticulos.length).fill(true);

    $scope.toggleIndices = function (index) {
      $scope.indicesVisibles[index] = !$scope.indicesVisibles[index];
    };
    $scope.scroll = function (event) {
      // Obtén el texto dentro del enlace (nombre del artículo)
      let articulo = event.target.innerText.trim();
      // Busca todos los enlaces dentro del artículo correspondiente
      let articuloEnlaces = document.querySelectorAll("#contenido .articles a");
      let enlaces = event.target.parentElement.querySelectorAll(
        "#contenido .articles a"
      );
      // Itera sobre los enlaces y busca el que contenga el artículo (coincidencia parcial)
      let index = -1;
      for (let i = 0; i < articuloEnlaces.length; i++) {
        if (articuloEnlaces[i].innerText.trim().includes(articulo)) {
          index = i;
          break;
        }
      }
      if (index !== -1) {
        // Encuentra el artículo actual en el array de artículos
        let capIndex = cadenaArticulos.indexOf(articulo);
        // (Asumo que tienes una estructura de datos en algún lugar que coincida con la estructura HTML)
        console.log(
          "Artículo:",
          articulo,
          "Índice de Artículo:",
          capIndex,
          "Índice de Enlace:",
          index
        );
        articuloEnlaces[index].parentNode.scrollIntoView({
          behavior: "smooth",
        });
      } else {
        console.log("No se encontró el enlace en el Artículo:", articulo);
      }
    };
  })
  .controller("CtrlParrafos", function ($scope, $sce) {
    $scope.parrafos = [];
    for (let i = 0; i < cadenaParrafos.length; i++) {
      let parrafo = "";
      for (let j = 0; j < cadenaParrafos[i].length; j++) {
        parrafo += cadenaParrafos[i][j];
        if (j < cadenaParrafos[i].length - 1) {
          parrafo += "<br><br>";
        }
      }
      $scope.parrafos.push($sce.trustAsHtml(parrafo));
    }
    //Esto básicamente aparecerá o no los párrafos dependiendo el booleano.
    $scope.mostrar_parrafos = new Array(cadenaParrafos.length).fill(true);
    $scope.Parrafos_visibles = function (index) {
      $scope.mostrar_parrafos[index] = !$scope.mostrar_parrafos[index];
    };
  });
export function agregarCapitulo(cadena) {
  for (let i = 0; i < cadena.length; i++) {
    cadenaCapitulos.push(cadena[i]);
  }
}

export function agregarArticulo(cadena) {
  for (let i = 0; i < cadena.length; i++) {
    cadenaArticulos.push(cadena[i]);
  }
}

export function agregarParrafos(cadena) {
  for (let i = 0; i < cadena.length; i++) {
    cadenaParrafos.push(cadena[i]);
  }
}
