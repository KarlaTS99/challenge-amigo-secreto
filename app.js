const inputAmigos = document.getElementById("amigo");
const listatAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

//agregamos los nombres ingresados en el input
function agregarAmigo(){
    if(inputAmigos.value == ''){
        alert("Ingrese un nombre");
    }else {
        listatAmigos.push(inputAmigos.value);
        ulListaAmigos.innerHTML = ulListaAmigos.innerHTML +    `<li>${inputAmigos.value}</li>`;
        limpiarCaja();
    }  
}

//funcion para el boton del sorteo
function sortearAmigo(){
   const aleatorio = Math.floor(Math.random() * listatAmigos.length);
   const amigoSecreto = listatAmigos[aleatorio];
   ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}

//limpiar input
function limpiarCaja(){
    document.querySelector('#amigo').value = ''; 
  }