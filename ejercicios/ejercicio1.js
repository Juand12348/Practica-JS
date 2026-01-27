// Ejercicio 1: Operaciones
console.log("*** Ejercicio Operaciones ***");
const a = 7;
const b = 3;

console.log("Suma: " + (a + b));
console.log("Resta: " + (a - b));
console.log("Multiplicación: " + (a * b));
console.log("División: " + (a / b));

// Ejercicio 2: Condicional Básico
console.log("*** Ejercicio Condicional Básico ***");
const numero = 7;
if(numero > 0){
    console.log("Positivo");
}else if(numero < 0){
    console.log("Negativo");
}else{
    console.log("Cero");
}

// Ejercicio 3: Ciclo Simple
console.log("*** Ejercicio Ciclo Simple ***");
for(let i = 1; i < 11; i++){
    console.log(i);
}

// Ejercicio 4: Función básico
console.log("*** Ejercicio Función básica ***")
function saludar(nombre){
    console.log(`Hola, ${nombre}`)
}

saludar("Juancho");