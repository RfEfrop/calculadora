//La siguiente funcion copia el texto escrito en el input
//en el lbael en tiempo real
function reflejarTexto() {
  var entrada = document.getElementById("entrada");
  var pantalla = document.getElementById("pantalla");

  pantalla.textContent = entrada.value;
  contador=1;
}

//Esta funcion valida que en la casilla solo se escriba numeros
//validando que se use los numeros del codigo ascii entre el 48 y el 57.
//Consultar tabla ASCII
function validarNumeros(event) {
  var tecla = event.which || event.keyCode;
  if (tecla < 48 || tecla > 57) {
    event.preventDefault();
  }
}
//declaro e inicializo la variable contador
//y se crea la funcion que al pulsar las teclas escriba 
//en el label el numero o signo pulsado con las teclas
var contador=0;
function escribirEnLabel(texto) {
  if(contador==0){
  var pantalla= document.getElementById("pantalla");
  pantalla.textContent = texto;
  contador=1;
  }else{
  var pantalla= document.getElementById("pantalla");
  pantalla.textContent += texto;
  }
}

//Esta es la funcion que al presionar la tecla DEL borra el ultimo
//caracter del label
function borrarCaracter() {
  var label = document.getElementById("pantalla");
  var contenido = label.textContent;
  var nuevoContenido = contenido.slice(0, -1); // Elimina el último carácter

  label.textContent = nuevoContenido;
}

//Esta es la funcion que al pulsar la tacla AC resetea label
function borrarLabel(){
  var pantalla = document.getElementById("pantalla");
  pantalla.textContent = "Escriba en la casilla";
  contador=0;//toco por que si no se hace al volver a escribir no se borra "Escriba ..."
  //revisar la funcion escribirEnLabel() para entender porque.
}