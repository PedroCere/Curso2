// 1 

let myArray = ["mono","perro","gato","raton","elefante"]

// 2
myArray.push("caballo");
console.log(myArray);
// Agregar un elemento al inicio del array
myArray.unshift("perico");

//3
// Eliminar el tercero
myArray.splice(2, 1);

// 4
mySet = new Set("libro1", "libro2", "libro3", "libro4", "libro5");
mySet.add("Libro6");
mySet.add("Libro1");

//5
mySet.delete("Libro1");

//6
myMap = new Map();
myMap.set("Enero", "Pedro");
myMap.set("Febrero", "Juan");
myMap.set("Marzo", "Maria");
myMap.set("Abril", "Luis");
myMap.set("Mayo", "Ana");
myMap.set("Junio", "Jose");
myMap.set("Julio", "Luis");

console.log(myMap.has("Julio"));

// Añade al mapa una clave con un array que almacene los meses de verano
myMap.set("Verano", ["Junio", "Julio", "Agosto"]);

myArray2 = new Array();
console.log(myArray2);

// pasarlo a un set
mySet = new Set(myArray2);
console.log(mySet);

// pasarlo a un Map
myMap = new Map(mySet);
console.log(myMap);