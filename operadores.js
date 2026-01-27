// Operadores en JS
console.log("*** Operadores en JS ***");

// Operadores Aritmétricos
const a = 5;
const b = 6;

let resultado = 0;
resultado = a + b;
console.log("Suma: " + resultado);
resultado = a - b;
console.log("Resta: " + resultado);
resultado = a * b;
console.log("Multiplicación: " + resultado);
resultado = a / b;
console.log("División: " + resultado);
resultado = a % b;
console.log("Composición: " + resultado);

console.log("")

// pre-incremento
let c = 8;
let n = ++c;
console.log(c);
console.log(n);

console.log("")

// post-incremento
let f = 8;
let g = f++; 
console.log(f);
console.log(g);

console.log("");

// Operadores de Comparación
const numero1 = 8;
const numero2 = 3;


let comparacion = numero1 > numero2;
console.log(comparacion);
comparacion = numero2 < numero2;
console.log(comparacion);
comparacion = numero1 >= numero2;
console.log(comparacion);
comparacion = numero1 <= numero2;
console.log(comparacion);
comparacion = numero1 == numero2;
console.log(comparacion);
comparacion = numero1 != numero2;
console.log(comparacion);
comparacion = numero1 === numero2;
console.log(comparacion);
comparacion = numero1 !== numero2;
console.log(comparacion);

console.log("");

// Operadores Lógicos
const and = (7 === 7 && 7 === 9) ? "true" : "false";
console.log(and);
const or = ( 6 > 9 || 9 > 0) ? "true" : "false";
console.log(or);