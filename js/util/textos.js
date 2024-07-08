let contenedor = document.getElementById("root");
contenedor.style.display = "flex";
contenedor.style.flexDirection = "column";
/**
 *
 * @param {*} op elegir la opción de linea de texto
 * @returns puede ser justificante (justify) o linea de izquierda (left) etc...
 */
export const alinear = (op) => {
  let resp = null;
  switch (op) {
    case 1:
      resp = "start";
      break;
    case 2:
      resp = "end";
      break;
    case 3:
      resp = "left";
      break;
    case 4:
      resp = "right";
      break;
    case 5:
      resp = "center";
      break;
    case 6:
      resp = "justify";
      break;
    default:
      console.error(op + " no existe esta opción para alinear el texto");
      break;
  }
  return resp;
};
/**
 *
 * @param {*} cadena escribir un cadena de texto para el parrafo
 * @param {*} estilo fondo de letra o estilo
 * @param {*} tamanio  tamanio de letra
 * @param {*} color  color de letra
 * @param {*} align ajustar la linea de texto
 * @param {*} id  poner id para identificar el parrafo
 */
export const agregarParrafo = (cadena, estilo, tamanio, color, align, id) => {
  let crearParrafo = document.createElement("p");
  crearParrafo.innerHTML = cadena;
  crearParrafo.style.fontFamily = estilo;
  crearParrafo.style.fontSize = tamanio;
  crearParrafo.style.color = color;
  crearParrafo.style.textAlign = align;
  crearParrafo.id = id;
  contenedor.appendChild(crearParrafo);
};
/**
 *
 * @param {*} titulo nombre para el titulo
 * @param {*} estilo fondo de letra o estilo
 * @param {*} tamanio tamanio de letra
 * @param {*} color color de letra
 * @param {*} id poner id para identificar el titulo
 */
export const agregarTitulo = (titulo, estilo, tamanio, color, id) => {
  let tamanios = ["h1", "h2", "h3", "h4", "h5", "h6"];
  let crearTitulo = null;
  let i = false;
  tamanios.forEach((valor) => {
    if (valor == tamanio) {
      crearTitulo = document.createElement(valor);
      i = true;
    }
  });
  if (!i) {
    console.error("Tamaño de título no permitido");
  } else {
    crearTitulo.style.fontFamily = estilo;
    crearTitulo.textContent = titulo;
    crearTitulo.style.color = color;
    crearTitulo.id = id;
    contenedor.appendChild(crearTitulo);
  }
};
/**
 *
 * @param {*} titulo nombre para el titulo
 * @param {*} estilo fondo de letra o estilo
 * @param {*} tamanio tamanio de letra
 * @param {*} color color de letra
 * @param {*} id poner id para identificar el titulo
 */
export const agregarTitulo_v2 = (titulo, estilo, tamanio, color, id) => {
  let tamanios = ["h1", "h2", "h3", "h4", "h5", "h6"];

  // Verificar si el tamaño está en la lista permitida y crear el elemento
  if (tamanios.includes(tamanio)) {
    let crearTitulo = document.createElement(tamanio);
    crearTitulo.style.fontFamily = estilo;
    crearTitulo.style.fontFamily = estilo;
    crearTitulo.textContent = titulo;
    crearTitulo.style.color = color;
    contenedor.appendChild(crearTitulo);
    crearTitulo.textContent = titulo;
    crearTitulo.id = id;
    contenedor.appendChild(crearTitulo);
  } else {
    console.error("Tamaño de título no permitido");
  }
};
/**
 *
 * @param {*} cadena escribir cualquier texto que quieras
 * @returns devuelve los textos en situaciones especificas, como cuando se quieren preservar los caracteres de escape o los saltos de linea.
 */
export const agregarTexto = (cadena) => {
  return String.raw`${cadena}`;
};
