// Loops o bucles, tareas repetitivas mientras una condición sea verdadera.


// for 
for (i = 0; i < 5; i++){
    console.log("Hola");
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++){
    console.log("Elemnto: " + numbers[i]);
}

// while
let j = 0;
while(j < 5){
    console.log("Hola");
    j++;
}

// do while, siempre se ejecuta al menos una vez
let k = 0;
do {
    console.log("Hola")
    k++;
} while (k < 5);

// for of (reccorer valores de algo que sea iterable)

myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
mySet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
myMap = new Map([["nombre", "Juan"], ["edad", 30]]);

for(let valor of myArray){
    console.log(valor);
}

for(let valor of mySet){
    console.log(valor);
}

for(let valor of myMap){
    console.log(valor);
}

// Buenas prácticas de bucles: revisar que la condición de salida sea posible, no hacer bucles infinitos, uso del break y continue.
// break, salir de un bucle
// continue, saltar una iteración

for(let valor of myArray){
    if(valor === 5){
        break;
    }
    console.log(valor);
}

for(let valor of myArray){
    if(valor === 5){
        continue;
    }
    console.log(valor);
}