// Map 

// Declaración 

let myMap = new Map();

// Inicialización

myMap = new Map([["nombre", "Juan"], ["edad", 30]]);
console.log(myMap);

// Métodos

myMap.set("apellido", "Perez");
console.log(myMap);

// has
console.log(myMap.has("nombre"));

// size
console.log(myMap.size);

// get
console.
    log(myMap.get("nombre"));
// delete
myMap.delete("nombre");
console.log(myMap);
   
// Convertir Map a Array
 let my
 Array = Array.from(myMap);
 console.log(myArray);
    
 // Convertir Array a Map
let myMap2 = new Map(myArray);
console.log(myMap2);

// Eliminar un elemento
myMap.delete("apellido");
console.log(myMap);

// Limpiar el Map
myMap.clear();
console.log(myMap);

// Iterar sobre el Map
myMap.forEach((value, key) => {
console.log(key, value);});

// Iterar sobre el Map con for of
for (let [key, value] of myMap) { console.log(key, value);}
           
