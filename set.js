// set

// declaración

let mySet = new Set();


// Inicialización

console.log(mySet);
console.log(mySet);

mySet = new Set([1, 2, 3, 4, 5, "caca", 37, true]);

console.log(mySet);

// Métodos

mySet.add(10);

console.log(mySet);

// has

mySet.has(10);
console.log(mySet.has(10));

// size

mySet.size;
console.log(mySet);

// Convertir Set a Array

let myArray = Array.from(mySet);
console.log(mySet);

// Convertir Array a Set

let mySet2 = new Set(myArray);
console.log(mySet);

// Eliminar un elemento

mySet.delete(10);

console.log(mySet);