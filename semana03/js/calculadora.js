// Delcarciones de funciones:
const sumar = (a, b) => alert(`✅El resultado de la suma es: ${a + b}`);

const restar = (a, b) => alert(`✅El resultado de la resta es: ${a - b}`);

const multiplicar = (a, b) => alert(`✅El resultado de la multiplicación es: ${a * b}`);

const dividir = (a, b) => {
    if (b === 0) {
        alert("❌Error: No se puede dividir por cero.");
    } else {
        alert(`✅El resultado de la división es: ${a / b}`);
    }
};

/* 
* La función obtenerNumero() recibe como argumento el mensaje a mostrar a la hora del ingreso de datos. 
* Y verifica que el dato ingresado sea un tipo de dato numérico.
*/
const obtenerNumero = (mensaje) => {
    let numero; // Definimos una variable local
    do {
        numero = parseFloat(prompt(mensaje));
        // Verificamos que la variable 'numero' tenga un valor númerico
        if(isNaN(numero)) {
            alert("⚠️Por favor, ingrese un número válido.");
        }
    } while(isNaN(numero));
    return numero; // Solo devolvemos un número válido
}

let menu; // Variable global para la selección de opciones
do {
    menu = parseInt(prompt("Elija una operación: \n1-Sumar \n2-Restar \n3-Multiplicar \n4-Dividir \n5-Salir"));

    /* 
    * Si menu NO es un número o esta fuera de rango mostramos un mensaje de error
    * Por esta validacion ya no es necesario el 'default' dentro del 'switch'
    */
    if (isNaN(menu) || menu < 1 || menu > 5) {
        alert(`❌[${menu}] Opción incorrecta! Por favor, elija una opción válida.`);
        continue;
    }

    if (menu !== 5){
        const numero1 = obtenerNumero("Ingrese el primer número:");
        const numero2 = obtenerNumero("Ingrese el segundo número:");

        switch (menu) {
            case 1:
                sumar(numero1, numero2);
                break;        
            case 2:
                restar(numero1, numero2);
                break;
            case 3:
                multiplicar(numero1, numero2);
                break;
            case 4:
                dividir(numero1, numero2);
                break;           
        } 
    } else {
        // Si menu === 5 mostramos mensaje de despedida 
        alert("👀Saliendo del programa...");
    }    
    
} while (menu !== 5);