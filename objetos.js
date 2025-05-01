// Objects, todo lo que no es un dato primitivo, es una colección de propiedades.

// Sintaxis
// Puede contener propiedades, funciones o otros objetos

let person = {
    name: "Brais",
    age: 37,
    alias: "Pedro"
}

// Acceso a propiedades 

// Notación punto, para acceder a propiedades
console.log(person.name)
// Notación de corchetes
console.log(person["name"]
)

// Los objetos son modificables
// Modificación
person.name = "Juan"
console.log(person.name)

// Eliminación de propiedades

delete person.name
console.log(person)

// Nueva propiedad 

console.log(person)

// Métodos (funciones)

let person2 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function (){
        console.log("La persona camina")
    }
}


// Alineación de Objetos, un objeto dentro de otro

let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function (){
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 15
    }
}
console.log(person3)

// Sirve para modelar una entidad, representaciones de la realidad

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work

// Igualdad de objects

let person4 = {
    name: "Brais",
    age: 37,
    alias: "Pedro"
}


console.log(person)
console.log(person4)

console.log(person == person4) // No son iguales
console.log(person === person4) // Siguen sin ser iguales

// Los objetos se guardan con una dirección de memoria única
// Para compararlos tenemos que comparar sus propiedades

console.log(person.name == person4.name) // Son iguales

// Iteración, para iterar usamos un for IN 
for (let value in person4){
    console.log(value)
}




