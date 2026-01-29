// Validaciones en JS
// Herramientas
// typeof dato === "numbre"
// Array.isArray(dato)
// dato != null && dato != undefined
// !isNaN(dato)
// Ejemplos:

// Validar numeros reales
function esNumeroValido(valor){
    if(typeof valor !== "number"){
        return false;
    }

    if(isNaN(valor)){
        return false
    }

    return true;
}

// Validar array de números
function esArrayNumeros(array){
    if(!Array.isArray(array)){
        return false;
    }

    if(array.length === 0){
        return false;
    }

    return array.every(n => esNumeroValido(n));
}

