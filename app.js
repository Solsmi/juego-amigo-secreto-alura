let amigos = [];

function agregarAmigo() {
    const nombre = document.getElementById("amigo").value;
    //  validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
    //  Si el campo no está vacío, agregar el nombre al array amigos y limpiar el campo de entrada.
    //  Luego, llamar a la función mostrarAmigos() para actualizar la lista de amigos.
    if (nombre) { // Verificar si el campo no está vacío
         // Agregar el nombre al array amigos:
        amigos.push(nombre);
        document.getElementById("amigo").value = "";
        actualizarAmigos();
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

//función para actualizar la lista de amigos
function actualizarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista existente

    amigos.forEach(amigo => {
        lista.innerHTML += `<li>${amigo}</li>`;
    });
}

//función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos.
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    document.getElementById("resultado").innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}