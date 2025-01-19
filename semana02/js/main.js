//Ciclo While
/* console.log("Ciclo While");
let cantidadVueltas = 1;

while (cantidadVueltas <= 5) {
    console.log(` El 🐕 dio ${cantidadVueltas} ${cantidadVueltas == 1 ? "vuelta" : "vueltas"}`);
    cantidadVueltas++;    
} */

// Ciclo Do...While
/* console.log("Ciclo Do While");
let i = 0;
let nota = 0;
let suma = 0;
let promedio = 0;
//Calculamos el promedio de 7 notas
do {    
    nota = Math.floor(Math.random() * 10) + 1; // del 1 al 10
    console.log(`Indice: ${i} // Nota: ${nota}`);
    suma = suma + nota;
    i++;
} while (i < 7);

promedio = (suma / i).toFixed(2);
console.log(`Promedio: ${promedio}`); */

// Otro ejemplo
/* let password = "";
let passwordCorrecto = "1234";
do {
    password = prompt("Ingrese su contraseña");
    if (password !== passwordCorrecto) {
        console.log("Contraseña incorrecta");
    }

} while (password !== passwordCorrecto);
console.log("Bienvenido!!!"); */

// Ciclo FOR
//console.log("Ciclo FOR - Números impares");
/* for(let i = 0; i < 10; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
} */

/* for(let i=0; i < 10; i++) {
    if(i % 2 === 0) {
        continue;
    }
    console.log(i);
} */

// Otro ejemplo
/* for(let i=0; i < 10; i++) {
    if(i === 5) {
        break;
    }
    console.log(i);
} */

// Validación de usuarios
const usuarios = [
    {nombre: "Ana", edad: 20, aceptoTermino: false},
    {nombre: "Luis", edad: 17, aceptoTermino: true},
    {nombre: "Carlos", edad: 18, aceptoTermino: true},
    {nombre: "Maria", edad: 15, aceptoTermino: true},
    {nombre: "Bianca", edad:34, aceptoTermino: true}
];
//console.table(usuarios);
//console.log(usuarios[1].nombre, usuarios[1].edad);
for (let index = 0; index < usuarios.length; index++) {
    if (usuarios[index].edad >= 18 && usuarios[index].aceptoTermino) {
        console.log(usuarios[index].nombre);
    }    
}
