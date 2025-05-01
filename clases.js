// Clases
// Una clase en JavaScript es una plantilla para crear objetos con propiedades y métodos. 
// Es una forma más clara y estructurada de trabajar con la programación orientada a objetos (POO), 
// introducida en ES6 (ECMAScript 2015).


// ¿Para qué sirven? Las clases se usan para crear múltiples objetos similares (con los mismos atributos y comportamientos), sin tener que escribir todo desde cero cada vez.



class Person {
    constructor(name,age,alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// Sintaxis

let person = new Person("Brais",25,"Pedrocapo")

console.log(person)

// Valores por defecto 

class DefaultPerson {
    constructor(name = "Nombre por defecto",age,alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let DefaultPersonerson = new Person("pedro")

// Acceso a propiedades

console.log(person.name)
console.log(person["alias"])

person.alias = "Moure Dev"

// Funciones en calses 

class Person2 {
    constructor(name,age,alias){
        this.name = name
        this.age = age
        this.alias = alias
    } 
    walk(){
        console.log("La persona camina")
    }
}

let person4 = Person2("Brais", 23, "Caca")
person4.walk()

// Propiedades privadas, solo se accede desde dentro de la clase


class PrivatePerson {
    
    #bank // La defino antes con una almoadilla para que sea privada

    constructor(name,age,alias,bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank =  bank
    } 
        pay(){
            this.#bank
        }
}

let person5 = new Person2("Brais", 23, "Caca", "asdasdasdsad")

console.log(person5.bank)


// Getters y Setters

class GetPerson {
    
    #name
    #age
    #alias
    constructor(name,age,alias){
        this.#name = name
        this.#age = age
        this.#alias = alias
    } 

    get name(){             // get lo que hace es dejar que uses u obotengas una propiedad que es privada fuera de la clase
        return this.name
    }

    set age(newAge){
        return this.#age = newAge
    }

}




let person6 = new GetPerson("Brais", 23, "Caca")

console.log(person6)
console.log(person6.name)


// ✅ Clase base
class PersonWithMethod {
    constructor(name, age, alias) {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }

    walk() {
        console.log(`${this.name} camina`);
    }
}

// ✅ Subclase que hereda de PersonWithMethod
class Developer extends PersonWithMethod {
    constructor(name, age, alias, language) {
        super(name, age, alias);  // Llama al constructor de la clase padre
        this.language = language; // Nueva propiedad solo en Developer
    }

    code() {
        console.log(`${this.name} está programando en ${this.language}`);
    }

    // Sobrescribimos (override) el método walk
    walk() {
        console.log(`${this.name} camina rápido hacia el teclado`);
    }
}

// 🧪 Prueba
const dev1 = new Developer("Ana", 28, "AnitaDev", "JavaScript");

dev1.walk();  // Ana camina rápido hacia el teclado (override)
dev1.code();  // Ana está programando en JavaScript

console.log(dev1); // Developer con propiedades heredadas + language


