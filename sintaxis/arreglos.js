// Arreglos
console.log("*** Arreglos ***");

// Primera forma
let array = new Array('BMW', 'Mercedez', 'Volvo');

// Senguda forma
const autos = ["Porshe", "Audi", "Ferrari"];

// Agregar valores
autos.push("Lamborhini");

// Conocer el tamaño del arreglo
console.log(autos.length);

// Conocer si una variable es una arreglo
console.log(Array.isArray(autos));

// Métodos para Arrays

// MAP: Convierte un array en otro array del mismo tamaño

const numeros = [1, 2, 3];

const dobles = numeros.map(n => n * 2); // [1, 4, 6]

// filter: filtra el arreglo y crea otro con la condición dada
const numeros1 = [1, 2, 3, 4];

const pares = numeros1.filter(n => n % 2 === 0); // [2, 4]

// find: Encuantra un valor dentro del arreglo con la condición dada
const numeros2 = [1, 2, 3, 4];

const mayorQueDos = numeros.find(n => n > 2); // 3

// some: Evalua si existe o no un valor con la condición dada
const notas = [4, 3, 2];

const hayReprobado = notas.some(n => n < 3); // true

// every: Evalua si todos cumplen la condición, se detiene cuando encuentre algo falso
const notas2 = [4, 3, 5];

const todosAprueban = notas3.every(n => n >= 3); // true

// Reduce: perimte acumular mientras recorre un arreglo, a su vez que devuelve un valor
const numeros3 = [1, 2, 3];

const suma = numeros3.reduce((acum, n) =>{
    return acum + n;
}, 0);

const notas4 = [4, 3, 5];

const promedio = notas4.reduce((acum, n) => acum + n, 0) / notas.length;
