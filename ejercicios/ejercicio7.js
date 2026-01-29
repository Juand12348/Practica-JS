// Ejercicio 1
function numeroDoble(valor){
    if(!typeof valor === "number") return null;
    if(!Number.isFinite(valor)) return null;

    return valor * 2;
}

// Ejercicio 2
function esPositivo(valor){
    if(!typeof valor === "number") return null;
    if(!Number.isFinite(valor)) return null;
    if(valor < 0) return null;

    return valor;
}

function calcularCuadrado(valor){
    let numero = esPositivo(valor);
    if(numero === null){
        return null;
    }

    let cuadrado = numero ** 2;
    return cuadrado;
}

// Ejercicio 3
function esNumero(valor){
    if(typeof valor === "number" && Number.isFinite(valor)) return true;

    return false;
}


function realizarCalculo(op1, op2, operacion){
    let realizarOperacion = operacion(op1, op2);

    if(realizarOperacion === null){
        return null;
    }

    return realizarOperacion;
}

function dividir(op1, op2){
    if(!esNumero(op1)) return null;
    if(!esNumero(op2) || op2 === 0 ) return null;

    let division = op1 / op2;

    if(!esNumero(division)){
        return null;
    }

    return division;
}

let operacion = realizarCalculo(6, 5, dividir);

console.log(operacion);

// Ejercicio 4
function esNumero(valor){
    if(typeof valor === "number" && Number.isFinite(valor)) return true;

    return false;
}

function esArreglo(valor){
    if(!Array.isArray(valor)) return false;
    if(valor.length === 0) return false;
    
    return true;
}

function ejecutarSiValido(valor, validador, accion){
    let valido = validador(valor);
    if(!valido) return null;

    let resultado = accion(valor);
    if(resultado === null) return null;

    return resultado;
}

function duplicar(valor){
    let arregloLimpio = valor.every(n => esNumero(n));
    if(!arregloLimpio) return null;

    let duplicado = valor.map(n => n * 2);

    return duplicado;
}

let arreglo = [3, 5, 7, 3, 5];
console.log(ejecutarSiValido(arreglo, esArreglo, duplicar));