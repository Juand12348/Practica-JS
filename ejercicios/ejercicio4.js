let salir = false;
let notas = [];

function agregarNota(nota){
    notas.push(nota);
    console.log("Se acabo de ingresar nota: " + nota);
}

function mostrarNotas(){
    console.log("Listado de tus notas");
    for(let i = 0; i < notas.length; i++){
        console.log(notas[i]);
    }
}

function calcularPromedio(){
    let totalNotas = 0;
        for(let i = 0; i < notas.length; i++){
            totalNotas = totalNotas + notas[i];
        }

        let promedio = totalNotas / notas.length;
        console.log("El promedio de tus notas es: " + promedio);
}

function notaMasAlta(){
    let notaAlta = notas[0];
    for(let i = 0; i < notas.length; i++){
        if(notaAlta < notas[i]){
            notaAlta = notas[i];
        }
    }
    console.log("Tu nota mas alta es: " + notaAlta);
}

function notaMasBaja(){
    let notaBaja = notas[0];
    for(let i = 0; i < notas.length; i++){
        if(notaBaja > notas[i]){
            notaBaja = notas[i];
        }
    }
    console.log("Tu nota mas baja es: " + notaBaja);
}

while(!salir){
    console.log(`
        ===== GESTOR DE NOTAS =====
        1. Agregar nota
        2. Mostrar todas las notas
        3. Calcular promedio
        4. Nota más alta
        5. Nota más baja
        6. Salir
        `);

        let opcion = Number(prompt("Ingresa una opción: "));

        if(opcion === 1){
            let nota = Number(prompt("Ingresa la nota: "));
            agregarNota(nota);
        }else if(opcion === 2){
            mostrarNotas();
        }else if(opcion === 3){
            calcularPromedio();
        }else if(opcion === 4){
            notaMasAlta();
        }else if(opcion === 5){
            notaMasBaja();
        }else if(opcion === 6){
            salir = true;
        }else{
            console.log("Valor Inválido");
        }
}

