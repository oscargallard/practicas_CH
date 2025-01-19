/* 
Variables y tipos de datos

Consigna;
    1) Crea variables con los siguientes tipos de datos (Number, string y boolean)
    2)Muestra los valores de las variables en consola

Tips:
    a) Código fuente en archivo JavaScript, con formato .js, vinculando a este con el archivo HTML mediante el tag <script>    

    b) Utiliza la consola para ayudarte a encontrar los errores o fallas que provocan que el código no funcione. 
*/

let iva = 21;
let texto = "Todo principio tiene un final";
let haceCalor = true;

console.log(`${iva}% de IVA y es de tipo ${typeof iva}`);
console.log(`Frase: ${texto} y es de tipo ${typeof texto}`);
console.log(`Hace calor?: ${haceCalor} y es de tipo ${typeof haceCalor}`);

let nulo = null;
let indefinido = undefined;

console.log(`Nulo = ${nulo} y es de tipo ${typeof nulo}`);
console.log(`Indefinido = ${indefinido} y es de tipo ${typeof indefinido}`);
