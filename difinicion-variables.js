// Variables en JS
console.log("*** Varibales en JS ***")
// Para definir una variable usamos var o let sin importar el tipo de variable
var nombre = "Juan David";
var edad = 19;
var fuerte = true;
var persona = {
    nombre: "Juan David",
    peso: 55,
    altura: 1.68
}

// Conocer el tipo de dato
console.log(typeof nombre);

// Asi se define una función
function miFuncion(){

}

// Clases en JS
class Perro{
    constructor (nombre, raza){
        this.nombre = nombre;
        this.raza = raza;
    }
}

// Concatenación de cadenas
var primerNombre = "Juan";
var segundoNombre = " David";

console.log(primerNombre + segundoNombre);