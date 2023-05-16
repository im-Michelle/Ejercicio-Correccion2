// El ejercicio regitra mediante un form a los invitados de una fiesta,  y despues se van viendo
// en la pantalla los datos,  lo que me falló es que 
// se puede editar los datos una vez ingresado, eso no me gusta


// Estaba referenciado por id y debe ser por la clase .formulario
var formulario = document.querySelector(".formulario");

formulario.onsubmit = function (e) {

  e.preventDefault();  // debe ser por la accion Default 


  // A mi gusto le fatal el punto y coma al final (algo opcional) bueno, en realidad en todo el codigo
  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

  if (nombre.length > 0
    && (edad > 18
      && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
}

var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  // debe ser con el metodo .add, no .added
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  var spanNombre = document.createElement("span");
  var inputNombre = document.createElement("input");
  var espacio = document.createElement("br");
  spanNombre.textContent = "Nombre: ";
  inputNombre.value = nombre;
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  inputNombre.readOnly = true; // Establecer el atributo readonly en el campo de nombre y no pueda editarse
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.classList.add("boton-borrar"); // Agregar la clase "boton-borrar"
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    elementoLista.remove();  // se va a remover el elemento de la lista
  }
}