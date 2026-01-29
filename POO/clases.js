function imprimir(info){
    return info.nombreCompleto();
}

class Persona {

    static contadorPersonas = 0;

    constructor(nombre, apellido){
        if(typeof nombre !== "string" || typeof apellido !== "string"){
            throw new Error("Datos inválidos");
        }
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorPersonas++;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return `${this._nombre} ${this._apellido}`;
    }

    static saludar(){
        return "Hola, Bienvenido a JS";
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    nombreCompleto(){
        return `${super.nombreCompleto()} - ${this._departamento}`;
    }
}

let persona1 = new Persona("Juan", "Martínez");
console.log(imprimir(persona1));
