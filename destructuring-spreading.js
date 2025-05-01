
//La desestructuración te permite extraer valores de arrays u objetos
// y asignarlos a variables de forma sencilla.

// Desestructuración de arrays
const numeros = [1, 2, 3];
const [a, b, c] = numeros;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Desestructuración de objetos 
const persona = {
    nombre: "Juan",
    edad: 30
  };
  
  const { nombre, edad } = persona;
  
  console.log(nombre); // "Juan"
  console.log(edad);   // 30

// Puedes renombrar las variables si lo necesitas
const { nombre: nombreUsuario } = persona;
console.log(nombreUsuario); // "Juan"

// Spreading El operador spread (...) se usa para copiar o expandir los elementos de un array u objeto.
// Spread con arrays
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

console.log(arr2); // [1, 2, 3, 4]

// Tambien se usa para copiar arrays
const copia = [...arr1];

// Spread con objetos
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }


/*
📌 Diferencias clave
Concepto	Desestructuración	Spreading
¿Qué hace?	Extrae valores	Copia o expande valores
¿Dónde se usa?	Lado izquierdo de asignaciones	Lado derecho de asignaciones
Símbolo usado	No usa símbolos especiales	Usa ...
*/

