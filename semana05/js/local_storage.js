// LocalStorage es diferente al cache
// Para guardar pequeños datos, nosotros lo administramos 
// Navegador -> Application / Local storage o bien Session storage

const player = "messi";
const edad = 35;

// Guardar datos
localStorage.setItem("player", player);
localStorage.setItem("edad", edad);

// Recupero la que tengo en el local storage
console.log(localStorage.getItem("player"));
console.log(localStorage.getItem("edad"));

// localStorage.removeItem("edad");
// localStorage.clear();

const jugador = {
    nombre: "messi",
    goles: 111
}

// localStorage.setItem("jugador", jugador);
const jugadorJSON = JSON.stringify(jugador);
localStorage.setItem("jugador", jugadorJSON);

const jugador1 = JSON.parse(localStorage.getItem("jugador"));
console.log(jugador1);
