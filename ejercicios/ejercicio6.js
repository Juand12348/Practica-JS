function esNumero(valor){
    if(typeof valor === "number" && Number.isFinite(valor)) return true;

    return false;
}
function normalizarNumeros(valor){
    if(!Array.isArray(valor)) return null;

    let arregloLimpio = valor.filter(n => esNumero(n));

    if(arregloLimpio.length === 0){
        return null;
    }

    return arregloLimpio;
}

// Ejercicio 1
function normalizarNumeros(valor){
    if(!Array.isArray(valor)) return null;

    let arregloLimpio = valor.filter(n => esNumero(n));

    if(arregloLimpio.length === 0){
        return null;
    }

    return arregloLimpio;
}

let arreglo = [null, false, "sasa", "dasd", true, "asasas"]; 
console.log(normalizarNumeros(arreglo));

// Ejercicio 2
function filtrarPorRango(valor, min, max){
    let arregloNumeros = normalizarNumeros(valor);

    if(arregloNumeros === null) return null;
    if(!esNumero(min) || !esNumero(max)) return null;

    let arregloPorRango = arregloNumeros.filter(n => n >= min && n <= max);

    if(arregloPorRango.length === 0) return null;

    return arregloPorRango;
}

let arreglo2 = [3, 6, 7, 2, 1, 4, "as" , 7];
console.log(filtrarPorRango(arreglo2, 2, 6))

// Ejercicio 3
function procesarNumeros(valor, operacion){
    if(typeof operacion !== "function") return null;

    let resultado = operacion(valor);
    if(resultado === null) return null;

    let limpio = resultado.filter(n => typeof n === "number" && Number.isFinite(n));
    if(limpio.length === 0) return null;

    return limpio;
}
function sumar(valor){
    let arregloLimpio = normalizarNumeros(valor);
    if(arregloLimpio === null) return null;

    let arregloResultado = arregloLimpio.map(n => n + 5);
    return arregloResultado;
}

let arreglo3 = ["", 7, 2, 4, 6, 2, 1, 4];
console.log(procesarNumeros(arreglo3, sumar));

// Ejercicio 4
function esNumero(valor){
    if(typeof valor === "number" && Number.isFinite(valor)) return true;

    return false;
}



function validarFunciones(funciones){
    if(!Array.isArray(funciones)) return null;

    let funcionesLimpias = funciones.filter(n => typeof n === "function");
    
    if(funcionesLimpias.length === 0) return null;

    return funcionesLimpias;
}

function pipelineNumeros(valor, operaciones){
    let arreglo = normalizarNumeros(valor);
    if(arreglo === null) return null;
    

    let funciones = validarFunciones(operaciones);
    if(funciones === null) return null;

    let resultados = arreglo.map(n =>
    funciones.reduce((acc, f) => f(acc), n));



    if(resultados === 0) return null;

    return resultados;
}

function sumar(valor){
    return valor + 1;
}

function multiplicar(valor){
    return valor * 2;
}

function alCuadrado(valor){
    return valor ** 2;
}

let arreglo4 = [3, 5, 7, 2, 4, 6];
let operaciones = [sumar, multiplicar, alCuadrado];
console.log(pipelineNumeros(arreglo4, operaciones));

console.log(typeof sumar);