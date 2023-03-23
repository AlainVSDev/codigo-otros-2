//Este es un codigo/formulario para agregar invitados a una lista de eventos. Sedeberan ingresar los datos 'nombre', 'edad' y nacionalidad de cada invitado.
//El formulario requiere que el campo nombre no este vacio y la edad sea mayor a 18 anios, de lo contrario marcara error
//el usuario sera ingresado a la la lista si los datos son validos
//se pueden tambien eliminar invitados de la lista


var formulario = document.querySelector(".formulario")//#form no forma parte, lo correcto seria '.formulario'
formulario.onsubmit = function(event) { //se sustituye 'e' por 'event' ya que arroja error al llamar al metodo, asi mismo se modifica por 'preventDefault();' para evitar el envio del formulario predeterminado
  event.preventDefault(); 
  
  var n = formulario.elements[0] //Se obtiene el nombre de entrada del invitado
  var e = formulario.elements[1] //Se obtiene la edad del entrada del invitado
  var na = formulario.elements[2] //Se obtiene la nacionalidad de entrada del invitado
//se asignan los valores de entrada a las variables
  var nombre = n.value
  var edad = e.value
  var i = na.selectedIndex
  var nacionalidad = na.options[i].value

  /*console.log(nombre, edad)
  console.log(nacionalidad)
  despues de verificar que los valores de entrada si se muestran en consola, podemos retirar estos console.log()
  */ 
//condiciones para validar la entrada de datos del formulario
  if (nombre.length === 0) {
    nombre.classList.add("error") //si el campo nombre esta vacio, arrojara error al elemento HTML
  }
  if (edad < 18 || edad > 120) {
    edad.classList.add("error")//si la edad esta fuera del rango arroja error al elemento HTML
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad) //se verifica que ambos campos esten llenos correctamente si se cumplen se agrega el invitado
  }
}

//la siguiente funcion comprueba el valor del parametro de nacionalidad. Una vez hecho esto se cambia asi a una cadena de texto y ver si coincide con las abreviaturas, si coincide se asigna el valor correspondiente a la abreviatura.
function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")//se obtiene el elemento de la lista de invitados en la pagina HTML mediante el metodo getElementById

var elementoLista = document.createElement("div")//Se crea un elemento div
elementoLista.classList.add("elemento-lista") // se cambia 'elementoLista.classdList.added' por 'elementoLista.classList.add' esto creara una nueva clase de estilos CSS
lista.appendChild(elementoLista)

/*esta funcion me arroja repetido en 3 ocaciones 'nombre'
function crearElemento(descripcion, valor) { 
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
} */
//esta funcion si logra crear la tarjeta de los invitados con su respectivo 'nombre', 'edad', 'nacionalidad' y 'eliminar invitado'
function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)

//boton para borrar a los invitados de la lista
var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);
botonBorrar.onclick = function() { 
  botonBorrar.parentNode.remove()
    }



}