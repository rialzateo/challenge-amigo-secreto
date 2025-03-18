// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombre= document.getElementById("amigo");
    if(nombre.value===''){
        alert("Por favor, inserte un nombre.");
    }else{
        amigos.push(nombre.value);
        document.getElementById("amigo").value='';
    }
    actualizar_amigos();
}


function actualizar_amigos(){
    let lista=document.getElementById("listaAmigos");
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        // Crea un nuevo elemento <li> para cada amigo
        const elemento = document.createElement('li');
        elemento.textContent = amigos[i];
    
        // Agrega el elemento <li> a la lista
        lista.appendChild(elemento);
    }
    
}

function sortearAmigo(){
    if(amigos.length===0){
        alert("No se puede amigos, no hay amigos en la lista");
    }else{
        let numero_aleatorio = Math.floor(Math.random()*amigos.length);
        let nombre_amigo = amigos[numero_aleatorio];
        document.getElementById("resultado").innerHTML=nombre_amigo;
    }
    document.getElementById("listaAmigos").innerHTML='';
}
