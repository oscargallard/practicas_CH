function sumar(numeroA, numeroB) {
    return numeroA + numeroB;
}

function restar(numeroA, numeroB) {
    return numeroA - numeroB;
}

function multiplicar(numeroA, numeroB) {
    return numeroA * numeroB;
}

function dividir(numeroA, numeroB) {
    return numeroA / numeroB;
}

let menu = parseInt(prompt("Elija una operación: \n1-Sumar \n2-Restar \n3-Multiplicar \n4-Dividir \n5-Salir"));

while (menu !== 5) {
    switch (menu) {
        case 1:
            sumar(50, 30);
            break;
        case 2:
            restar(10, 100);
            break;
        case 3: 
            multiplicar(7, 2);
            break;
        case 4:
            dividir(25, 5);
            break;    
        default:
            alert("Opcion incorrecta!");
            break;
    }
    menu = parseInt(prompt("Elija una operación: \n1-Sumar \n2-Restar \n3-Multiplicar \n4-Dividir \n5-Salir"));
}