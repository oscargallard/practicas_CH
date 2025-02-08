const titulo = document.querySelector("h1");
titulo.innerHTML = "Practica de fciones 💻"

function calcularMulta(diasRetraso) {
    const multaPorDia = 0.50; // 50 centavos por día de retraso
    return diasRetraso * multaPorDia;
}

let dias_de_retraso = 5;
let multa = calcularMulta(dias_de_retraso);
//console.log(`La multa total es: $${multa} por ${dias_de_retraso} días de retraso.`); // Muestra: La multa total es: $2.5
let mensaje_multa = document.getElementById('parrafo_multa');
mensaje_multa.textContent = `La multa total es: $${multa} por ${dias_de_retraso} días de retraso.`


// Función para calcular el descuento
function calcularDescuento(precio, porcentajeDescuento) {
    return precio * (1 - porcentajeDescuento / 100);
}

// Función para calcular el precio final incluyendo el impuesto
function calcularPrecioFinal(precio, descuento, impuesto) {
    let precioConDescuento = calcularDescuento(precio, descuento);
    return precioConDescuento + (precioConDescuento * impuesto / 100);
}

// Invocación
let precioProducto = 100;
let descuento = 10;
let impuesto = 21;
let total = calcularPrecioFinal(precioProducto, descuento, impuesto);
//console.log(`El precio total es $${total} se aplico ${descuento}% de descuento y un IVA de ${impuesto}%`);
let mensaje_precio_total = document.getElementById('precio_total');
mensaje_precio_total.textContent = `El precio total es $${total} se aplico ${descuento}% de descuento y un IVA de ${impuesto}%`;

// Encapsulando la lógica en una función
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

let base = 10;
let altura = 5;
//console.log(`El área del triángulo es ${calcularAreaTriangulo(10, 5)}`);
let mensaje_area = document.getElementById('area_triangulo');
mensaje_area.textContent = `Con ${base} de base y ${altura} de altura. El área del triángulo es ${calcularAreaTriangulo(10, 5)}`;

const titulo2 = document.querySelector('h2');
titulo2.innerHTML = "Funciones Anónimas y Funciones Flecha";

const suma = function(a, b){
    return a + b;
};
const resta = function(a, b){
    return a - b;
}
//console.log(`La suma es ${suma(100, 25)}`);
let mensaje_suma = document.getElementById('suma');
mensaje_suma.textContent = `La suma de 100 y 25 es igual a ${suma(100, 25)}`

let mensaje_resta = document.getElementById('resta');
mensaje_resta.textContent = `El resultado de 100 - 30 es igual a ${resta(100, 30)}`

document.getElementById("miBoton").addEventListener("click", function(){
    alert("Boton pulsado 🛎️");
});

const multiplicar = (a, b) => a * b;
document.getElementById("multiplicar").textContent = `Multiplicar 7 por 8 es igual a ${multiplicar(7, 8)}`;

let cuadrados = [1, 2, 3, 4, 5].map(n => n * n);
document.getElementById("cuadrados").textContent = `Los cuadros de los primeros 5 números son: ${cuadrados.join(" | ")}`;

let arrayDescuento10 = [100, 200, 300, 400, 500].map(n => n * 0.9);
document.getElementById("descuento10").textContent = `Precios con 10% de descuento: ${arrayDescuento10.join(" | ")}`;
