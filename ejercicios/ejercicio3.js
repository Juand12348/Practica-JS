// Ejercicio 8: Menu interactivo
console.log("*** Ejercicio Interactivo ***");

let salir = false;
while(!salir){
    console.log(`
        ===== MENÚ =====
        1. Sumar
        2. Restar
        3. Multiplicar
        4. Dividir
        5. Salir        
        `)

    const opcion = Number(prompt("Ingresa una opcion: "));
    if(opcion === 5){
        salir = true;
    }else{
        let numero1 = Number(prompt("Ingresa el Número 1: "));
        let numero2 = Number(prompt("Ingresa el Número 2: "));
        switch(opcion){
            case 1:
                sumar(numero1, numero2);
                break;
            case 2:   
                restar(numero1, numero2);
                break;
            case 3:
                multiplicar(numero1, numero2);
                break;
            case 4:
                dividir(numero1, numero2);
                break;
            default:
                console.log("Valor Inválido");
                break;
        }
    }

}


function sumar(a, b){
    let resultado = a + b;
    console.log("La suma es: " + resultado);
}

function restar(a, b){
    let resultado = a - b;
    console.log("La resta es: " + resultado);
}

function multiplicar(a, b){
    let resultado = a * b;
    console.log("La multiplicación es: " + resultado);
}

function dividir(a, b){
    let resultado = a / b;
    console.log("La división es: " + resultado);
}