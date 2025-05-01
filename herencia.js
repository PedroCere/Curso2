/*
🧬 ¿Qué es la herencia en JavaScript?
La herencia es un principio fundamental de la programación orientada a objetos (POO) que permite que una clase hija (subclase) herede las propiedades y métodos de una clase padre (superclase). Esto permite reutilizar código y crear estructuras más organizadas.

📦 ¿Cómo se implementa en JavaScript?
1. extends: crea una subclase que hereda de otra clase.
2. super(): se usa dentro del constructor de la subclase para llamar al constructor de la clase padre y heredar sus propiedades.
🧱 Sintaxis básica
*/
// Clase padre
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hablar() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

// Clase hija
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); // Llama al constructor de Animal
        this.raza = raza;
    }

    ladrar() {
        console.log(`${this.nombre} está ladrando.`);
    }

    // Podemos sobrescribir métodos de la clase padre
    hablar() {
        console.log(`${this.nombre} dice guau.`);
    }
}

/*
🎯 ¿Qué se hereda?
Cuando una clase hereda de otra:

Hereda todas las propiedades y métodos públicos de la clase padre.

Puede agregar sus propios métodos y propiedades.

Puede sobrescribir métodos del padre (override).

⚠️ Importante: uso de super
super(...) se debe usar en el constructor de la subclase antes de usar this.

También se puede usar super.metodo() para llamar a un método del padre desde el hijo.
*/


class Gato extends Animal {
    constructor(nombre) {
        super(nombre); // Importante: primero va super()
    }

    hablar() {
        super.hablar(); // Llama a método de Animal
        console.log(`${this.nombre} dice miau.`);
    }
}

class Vehiculo {
    constructor(marca) {
        this.marca = marca;
    }

    arrancar() {
        console.log(`${this.marca} está arrancando...`);
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo) {
        super(marca);
        this.modelo = modelo;
    }

    mostrarInfo() {
        console.log(`Coche: ${this.marca} ${this.modelo}`);
    }
}

const miCoche = new Coche("Toyota", "Corolla");
miCoche.arrancar();      // Toyota está arrancando...
miCoche.mostrarInfo();   // Coche: Toyota Corolla