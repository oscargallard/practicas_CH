const titulo = document.querySelector("h1");
titulo.innerHTML = "Configuración de Descuento";

// Logica par modificar el descuento
let mensaje = document.getElementById('mensaje');
let descuentoInicial;
const descuentoPredeterminado = 10;
let descuentoActual = descuentoInicial ?? descuentoPredeterminado;

mensaje.textContent = `El descuento es del ${descuentoActual}%`;

const boton = document.getElementById("btnDescuento");

boton.addEventListener("click", () => {
    //let descuentoIngresado = prompt("Ingres el descuento en %");
    //let descuentoIngresado = document.getElementById("descuentoDeseado");
    //descuentoActual = descuentoIngresado ?? descuentoPredeterminado;

    let descuentoIngresado = document.getElementById("descuentoDeseado").value;    
    descuentoIngresado = Number(descuentoIngresado);
    // Validar que sea un número válido
    if(isNaN(descuentoIngresado) || (descuentoIngresado <= 1 || descuentoIngresado > 50)){
        descuentoIngresado = descuentoPredeterminado;
    }
    descuentoActual = descuentoIngresado;    

    mensaje.textContent = `El descuento es del ${descuentoActual}%`;
});

/* Segunda parte */
const titulo2 = document.querySelector("h2");
titulo2.innerHTML = "Practica FOR y WHILE";

// Pedir número mediante prompt y sumarle otro número en cada repetición, realizando una salida por cada resultado
/* const numeroFijo = 10;
let numeroIngresado = 0;
let suma = document.getElementById("sumas");

for (let i = 0; i < 3; i++) {
    numeroIngresado = Number(prompt(`${i+1}) Ingrese un número`));
    let nuevoParrafo = document.createElement("p"); // Creamos un párrafo para cada resultado
    nuevoParrafo.textContent = `La suma de ${numeroIngresado} y ${numeroFijo} es ${numeroIngresado + numeroFijo}`;
    // Agregamos el párrafo a la sección de resultados
    suma.appendChild(nuevoParrafo);
} */

/* Pedir un texto mediante prompt, concatenar un valor en cada repetición, 
realizando una salida por cada resultado, hasta que se ingresa “ESC”.*/

let textoIngresado = "";
const textoFijo = "▶️";
let textoResultado = document.getElementById("textos");

while(textoIngresado.toLocaleUpperCase() !== "ESC"){
    textoIngresado = prompt("Ingrese un texto (ESC para salir)");    

    if(textoIngresado.toLocaleUpperCase() !== "ESC"){
        //textoResultado.textContent += textoFijo + textoIngresado + "🌐";
        let nuevoParrafo = document.createElement("p");
        nuevoParrafo.textContent = textoFijo + textoIngresado + "🌐";
        textoResultado.appendChild(nuevoParrafo);        
    }
}

// Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces
let numeroCiclo = Number(prompt("Ingrese la cantidad de repetición"));
let saludoResultado = document.getElementById("saludos");
const saludo = "Hola! 😄";

for(let i = 0; i < numeroCiclo; i++){
    //console.log("Hola! 😄");
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = `(${i+1}) ${saludo}`;
    saludoResultado.appendChild(nuevoParrafo);    
}