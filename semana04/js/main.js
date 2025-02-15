const jugadores = ["Messi", "Rodrigo De Paul", "Dibu Martinez", "Cuti Romero", "Lautaro Martinez", "Julian Alvarez"];

//console.log(jugadores);
//console.table(jugadores);

// push() para agregar al final
jugadores.push("Dybala");

// unshift() para agregar un nuevo elemento al inicio del array. 
// No es recomendable porque modifica la posición de los indices. 
jugadores.unshift("Paredes");

// shift() para quitar el primer elemento
jugadores.shift();

// pop() para quitar el ultimo elemento
jugadores.pop();

// includes() verifica si un elemento pertenece al array, devuelve true o false
/* console.log("Messi esta en el array?", jugadores.includes("Messi") ? "Si" : "No");
console.log("Paredes esta en el array?", jugadores.includes("Paredes") ? "Si" : "No"); */

// indexOf() busca un elemento en el array y nos devuelve su indice. 
// Si no lo encuentra devuele -1
/* console.table(jugadores);
console.log("Indice de 'Dybala':", jugadores.indexOf("Dybala"));
console.log("Indice de 'Messi':", jugadores.indexOf("Messi")); */

// Ordenar de forma ascendente 
// jugadores.sort((a, b) => a.localeCompare(b));
// console.table(jugadores);

/* const numeros = [100, 55, 7, 42, 200, 3, 21, 150, 9, 50];
numeros.sort((a, b) => a - b); // ordenamos de forma ascendente
console.log(numeros);
// Si ahora aplicamos reverse() lo ordenamos de forma descendente 
numeros.reverse();
console.log(numeros); */


// reverse() Invierte el orden del array
// Usamos el operador spread ([...jugadores]) para crear una copia del array original antes de mostrarlo
/* console.log("Array original:", [...jugadores]);
console.log("Array invertido:", jugadores.reverse()); */

// Para mantener el array original intacto
/* console.log("Array original:", jugadores);
console.log("Array invertido:", [...jugadores].reverse()); */

/* console.log("Array original:", [...jugadores]);
console.log("Aplicamos .sort().reverse()", jugadores.sort().reverse()); */

// join() Añade un string entre elemento y elemento del array
/* console.log(jugadores.join(" | "));
console.log(jugadores.join("⚽"));
 */

// filter() no modifica al array original 
/* const sin_messi = jugadores.filter(n => n != 'Messi');
console.log("Lista sin Messi", sin_messi); */

// map() no modifica al array original 
// Se aplica la modificación en cada elemento
/* const jugadoresMayusculas = jugadores.map(jugador => jugador.toUpperCase());
console.log("Jugadores en mayúsculas:", jugadoresMayusculas);

const jugadoresConEmoji = jugadores.map(jugador => `⚽ ${jugador}`);
console.log("Jugadores con Emoji:", jugadoresConEmoji); */

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let numerosImparesx100 = numeros
    .filter(n => n % 2 !== 0) // Obtengo los impares
    .map(n => n * 100); // y los multiplico por 100

console.log(numerosImparesx100);

let numerosParesx10 = numeros
    .filter(n => n % 2 === 0) // obtengo los pares
    .map(n => n * 10); // y los multiplico por 10
console.log(numerosParesx10);

/**
 * flatMap() es un método que combina map() y flat() en una sola operación. 
 * Es útil cuando quieres transformar y filtrar elementos simultáneamente.
 * La diferencia principal con los ejemplos anteriores del código (que usan filter() y map() por separado) es que flatMap() hace la operación en un solo paso y "aplana" automáticamente el resultado, eliminando los arrays vacíos que se generan para los números pares.
 */
let numerosImparesx1000 = numeros.flatMap(n => n % 2 !== 0 ? n * 1000 : []);
console.log(numerosImparesx1000);
