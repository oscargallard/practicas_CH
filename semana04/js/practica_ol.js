const librosHarryPotter = [
    {
        id: 1,
        titulo: "Harry Potter y la Piedra Filosofal",
        añoPublicacion: 1997,
        paginas: 223,
        editorial: "Bloomsbury",
        disponible: true
    },
    {
        id: 2,
        titulo: "Harry Potter y la Cámara Secreta", 
        añoPublicacion: 1998,
        paginas: 251,
        editorial: "Bloomsbury",
        disponible: true
    },
    {
        id: 3,
        titulo: "Harry Potter y el Prisionero de Azkaban",
        añoPublicacion: 1999,
        paginas: 317,
        editorial: "Bloomsbury",
        disponible: true
    },
    {
        id: 4,
        titulo: "Harry Potter y el Cáliz de Fuego",
        añoPublicacion: 2000,
        paginas: 636,
        editorial: "Bloomsbury",
        disponible: true
    },
    {
        id: 5,
        titulo: "Harry Potter y la Orden del Fénix",
        añoPublicacion: 2003,
        paginas: 766,
        editorial: "Bloomsbury",
        disponible: true
    },
    {
        id: 6,
        titulo: "Harry Potter y el Misterio del Príncipe",
        añoPublicacion: 2005,
        paginas: 607,
        editorial: "Bloomsbury",
        disponible: true
    },
    {
        id: 7,
        titulo: "Harry Potter y las Reliquias de la Muerte",
        añoPublicacion: 2007,
        paginas: 607,
        editorial: "Bloomsbury",
        disponible: true
    }
];

// console.log("Lista de libros de Harry Potter:");
// console.table(librosHarryPotter);

// librosHarryPotter.sort((a, b) => b.añoPublicacion - a.añoPublicacion);
// console.log("Año de publicacion - Orden descendente");
// console.table(librosHarryPotter);

// const librosFiltrados = librosHarryPotter.filter(n => n.paginas > 300);
// console.log("Libros con más de 300 paginas");
// console.table(librosFiltrados);

// const libroEncontrado = librosHarryPotter.find(n => n.añoPublicacion > 2000);
// console.log("Primer libro despues del año 2000:", libroEncontrado.titulo + " del año " + libroEncontrado.añoPublicacion);

// some() devuelve true si algun elemento cumple la condición, false en caso contrario 
// console.log(librosHarryPotter.some(libro => libro.id === 5));
// console.log(librosHarryPotter.some(libro => libro.id === 8));
// console.log(librosHarryPotter.some(libro => libro.titulo === "Harry Potter y el Prisionero de Azkaban"));

// every() verifica si todos los elementos del array cumplen con la condición
// si algun elemento no cumple la condición devuelve false
const todoDeBloomsbury = librosHarryPotter.every(libro => libro.editorial.includes('Bloomsbury'));
const todoMayor500 = librosHarryPotter.every(libro => libro.paginas > 500);
console.log("Todos son de la editorial Bloomsbury?", todoDeBloomsbury); //true
console.log("Todos tienen mas de 500 paginas?", todoMayor500); //false


/*
continuar viendo el video
https://www.youtube.com/watch?v=5yPf74sCu2k&t=104s
*/
