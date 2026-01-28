// Conversión de variables
console.log("*** Comversión de Variables ***");

let miNumero = "10";
let edad = Number(miNumero);
console.log(typeof edad);

// Función inNan
//Nos perimte conocer si un valor es de tipo numerico
if(isNaN(edad)){
    console.log("No es un número");
}else{
    console.log("si es un número");
}
