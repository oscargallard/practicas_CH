// Objetos Literales
const jugadoresArgentina = [
    { id: 1, nombre: "Lionel Messi", posicion: "Delantero", edad: 36, titular: true, club: "Inter Miami" },
    { id: 2, nombre: "Emiliano Martínez", posicion: "Arquero", edad: 31, titular: true, club: "Aston Villa" },
    { id: 3, nombre: "Rodrigo De Paul", posicion: "Mediocampista", edad: 29, titular: true, club: "Atlético de Madrid" },
    { id: 4, nombre: "Ángel Di María", posicion: "Extremo", edad: 35, titular: false, club: "Benfica" },
    { id: 5, nombre: "Cristian Romero", posicion: "Defensor", edad: 25, titular: true, club: "Tottenham" },
    { id: 6, nombre: "Julián Álvarez", posicion: "Delantero", edad: 24, titular: true, club: "Manchester City" },
    { id: 7, nombre: "Enzo Fernández", posicion: "Mediocampista", edad: 23, titular: true, club: "Chelsea" },
    { id: 8, nombre: "Alexis Mac Allister", posicion: "Mediocampista", edad: 25, titular: true, club: "Liverpool" },
    { id: 9, nombre: "Nicolás Otamendi", posicion: "Defensor", edad: 35, titular: true, club: "Benfica" },
    { id: 10, nombre: "Nahuel Molina", posicion: "Defensor", edad: 26, titular: true, club: "Atlético de Madrid" }
];

/* console.log("Lista de jugadores");
console.table(jugadoresArgentina); */ 

// 'FOR OF' para recorrer el array de objetos
/* for (const jugador of jugadoresArgentina) {
    console.log("El jugador " + jugador.nombre + " juega en el club: " + jugador.club);    
} */

// Ordenamos el array de objetos en base a la clave 'edad'
// jugadoresArgentina.sort((a, b) => a.edad - b.edad);
// console.log("Lista ordena por edad", jugadoresArgentina);

// Filtramos y mostramos solo los jugadores mayores a 30
// filter() es muy útil para obtener subconjuntos de un array basados en propiedades de los objetos.
/* const mayoresDe30 = jugadoresArgentina.filter(n => n.edad > 30);
console.log("Lista de jugadores mayores de 30",mayoresDe30); */

// Para encontrar el primer objeto que cumple con una condición específica, se usa find()
let defensor = jugadoresArgentina.find(n => n.posicion == "Defensor");
console.log("Defensor de la seleción:", defensor);
