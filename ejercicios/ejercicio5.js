// Ejercicio 1: Map
const numeros = [3, 6, 9, 12];

function dividiendoEntreTres(numeros){
    return numeros.map(n => n / 3);
}
console.log(dividiendoEntreTres(numeros));

// Ejercicio 2: Filter

function numerosMayores5(numeros){
    return numeros.filter(n => n > 5);
}
console.log(numerosMayores5(numeros));


// Ejercicio 3: Find
function encontrarMayor8(numeros){
    let numeroEncontrado = numeros.find(n => n > 8);
    if(numeroEncontrado === undefined){
        return null;
    }else{
        return numeroEncontrado;
    }
}
console.log(encontrarMayor8(numeros));


// Ejercicio 4: some y every
const edades = [18, 22, 15, 30];

function encontarAlgunMenor(edades){
    return edades.some(n => n < 18);
}
console.log(encontarAlgunMenor(edades));

function sonTodosMayores(edades){
    return edades.every(n => n >= 18);
}
console.log(sonTodosMayores(edades));

// Ejercicio 5: Reduce
const precios = [12000, 8000, 15000];

function calcularTotal(precios){
    return precios.reduce((acum, n) => acum + n, 0);
}
console.log(calcularTotal(precios));

function calcularPromedio(precios){
    return precios.reduce((acum, n) => acum + n, 0) / precios.length;
}
console.log(calcularPromedio(precios));

// Ejercicio 6: Encadenamiento
const numeros1 = [1, 2, 3, 4, 5, 6];

function calcularOperaciones(numeros1){
    return numeros1
    .filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((acum, n) => acum + n, 0);
}
console.log(calcularOperaciones(numeros1));