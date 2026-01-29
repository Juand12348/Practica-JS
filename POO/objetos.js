// Objetos
// La diferencia entre los objetos y las variables primitivas es:
// Los objetos pueden tener propiedades
let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    email: "jperez@mail.com",
    edad: 28
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);

// Realizar acciones dentro de los objetos pero usamos this para acceder a los atributos
let persona2 = {
    nombre: "Juan",
    apellido: "Pérez",
    email: "jperez@mail.com",
    edad: 28,
    nombreCompleto: function (){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona2);

// Otra manera de crear un objeto
let persona3 = new Object();
persona3.nombre = "Carlos";
persona3.direccion = "Saturno 15";
persona3.tel = "8823093";

// Otra manera de acceder a una propiedad
console.log((persona3['direccion']));

// Con un for tambien podemos acceder a las propiedades
for( let propiedades in persona3){
    console.log(propiedades);
}

// Y con su valor
for( let valor in persona2){
    console.log((persona2[valor]));
}

// Agregar una propiedad o modificarla
console.log(persona3.tel);
persona3.tel = "78272332";
console.log(persona3.tel);

// Elimiar una propiedad
delete persona3.tel;

// Maneras de imprimir un objeto
console.log(persona.nombre + " " + persona.apellido + " " + 
    persona.email + " " + persona.edad);

for(let nombre in persona){
    console.log(persona[nombre]);
}

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);

// Método get y set en objetos

let persona4 = {
    norbre: "Daniel",
    apellido: "Marquez",
    edad: 28,
    get nombre_competo(){
        return this.norbre + ' ' + this.apellido;
    }
}

let persona5 = {
    norbre: "Daniel",
    apellido: "Marquez",
    edad: 28,
    get nombre_competo(){
        return this.norbre + ' ' + this.apellido;
    },
    set nombre(nombre){
        this.nombre = nombre;
    }
}

// metodo contructor
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

let persona6 = new Persona("Sara", "Mendoza", "sara@mail.com");
console.log(persona6);
console.log(persona6.nombreCompleto);

// Agregar una propiedad a un constructor
Persona.prototype.tel = "12432423";