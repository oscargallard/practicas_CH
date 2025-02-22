/* 
const celular1 = {
    marca: "samsung",
    modelo: "s25",
    precio: 1000
}

const celular2 = {
    marca: "apple",
    modelo: "iphone 16 pro",
    precio: 1200
}

// Función constructora
function Celular (marca, modelo, precio) {
    this.marca = marca,
    this.modelo = modelo,
    this.precio = precio
} */

const precioDolar = 1200; //variable global

class Celular {
    static id = 0
    
    constructor(marca, modelo, precio){
        this.id = ++Celular.id,
        this.marca = marca,
        this.modelo = modelo,
        this.precio = precio
    }
    
    enPesos = () => {
        this.precio = this.precio * precioDolar;
        console.log("Precio en pesos: "+ this.precio);        
    }
}

const celular1 = new Celular("samsung", "s25", 1000);
const celular2 = new Celular("apple", "iphone 16 pro", 1200);
const celular3 = new Celular("motorola", "g200", 1100);

// console.log(celular1, celular2, celular3);

celular1.enPesos();
celular2.enPesos();
celular3.enPesos();
