let inputAmigos = document.getElementById("amigo");
let listatAmigos = [];
let registroListaAmigos = document.getElementById("listaAmigos");
let resultadoAmigo = document.getElementById("resultado");

//agregamos los nombres ingresados en el input
function agregarAmigo(){
    if(inputAmigos.value == ''){
        alert("Ingrese un nombre");
    }else {
        listatAmigos.push(inputAmigos.value);
        registroListaAmigos.innerHTML = registroListaAmigos.innerHTML +    `<li>${inputAmigos.value}</li>`;
        limpiarInput();
    }  
}

//funcion para el boton del sorteo
function sortearAmigo(){
   const aleatorio = Math.floor(Math.random() * listatAmigos.length);
   const amigoSecreto = listatAmigos[aleatorio];
   resultadoAmigo.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}

//limpiar input
function limpiarInput(){
    document.querySelector('#amigo').value = ''; 
  }
