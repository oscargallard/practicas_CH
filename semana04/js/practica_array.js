const gotCharacters = [
    "Jon Snow",
    "Tyrion Lannister",
    "Daenerys Targaryen",
    "Arya Stark",
    "Sansa Stark",
    "Cersei Lannister",
    "Jaime Lannister",
    "Joffrey Baratheon",
    "Robb Stark",
    "Bran Stark",
    "Stannis Baratheon",
    "Margaery Tyrell",
    "Theon Greyjoy",
    "Ramsay Bolton",
    "Petyr Baelish"
  ];

// console.table(gotCharacters);
// gotCharacters.sort((a, b) => a.localeCompare(b));
// console.log(gotCharacters);

console.log("Jon Snow esta en la lista?", gotCharacters.includes("Jon Snow"));
console.log("Sin Nombre esta en la lista?", gotCharacters.includes("Sin Nombre"));

console.log("Indice de Jon Snow:", gotCharacters.indexOf("Jon Snow"));
console.log("Indice de Sin Nombre", gotCharacters.indexOf("Sin Nombre"));

// El operador spread (...) crea una copia del array gotCharacters porque queremos evitar modificar el array original
// const arrayInvertido = [...gotCharacters].reverse();
// join("⚔️") para convertir el array en una cadena de texto, separando cada elemento con el emoji de espadas (⚔️)
// console.log("Array invertido:", arrayInvertido.join("⚔️"));
// console.log("Array original:", gotCharacters.join("⚔️"));

// 2 ** x: Representa 2 elevado a la potencia x
// 2 * x ** 2: Representa 2 multiplicado por x al cuadrado
// Ejemplo, para x=3, (2^3)=8 y (2×3²)=18
let valores = [];
for (let x = 0; x < 10; x++) {
  valores.push([2 ** x, 2 * x ** 2]);
}
// console.log("Funciones: exponencial vs cuadrática");
// console.table(valores);

//Mostrar en HTML
const tablaBody = document.getElementById("tablaBody");

valores.forEach((valor, index) => {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${index}</td>
    <td>${valor[0]}</td>
    <td>${valor[1]}</td>  
  `;
  tablaBody.appendChild(fila);
})