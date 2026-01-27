// Ejercicio 5: Arreglo y Suma
console.log("*** Ejercicio Arreglo y Suma ***");
const numeros = [2, 5, 8, 3, 10];
let total = 0;

numeros.forEach(numero => {
    total = numero + total;
    console.log(numero);
});

console.log("Total Suma Números: " + total);

// Ejercicio 6: Buscar nombre
console.log("*** Ejercicio Buscar nombre ***");
const nombres = ["Ana", "Luis", "Carlos", "Juancho"];


function buscarNombre(nombre){

    let nombreEncontrado = false;

    nombres.forEach(nombreA => {
        if(nombre === nombreA){
            nombreEncontrado = true;
        }
    });

    if(nombreEncontrado){
        console.log("Existe");
    }else{
        console.log("No Existe");
    }
}

buscarNombre("Carlos")


// Ejercicio 7: Pares e Impares
console.log("*** Ejercicio Pares e Impares ***");
const numerosE = [1, 2, 3, 4, 5, 6, 7, 8];
let numerosPares = 0;
let numerosImpares = 0; 

numerosE.forEach(numero => {
    if(numero % 2 == 0){
        numerosPares++;
    }else{
        numerosImpares++;
    }
});

console.log("Total números Pares: " + numerosPares);
console.log("Total números Impares: " + numerosImpares);

