//ejercicio 1
for(let i = 1; i < 21; i++){
 console.log(i)   
}
 

//ejercicio 2 crea un bucle que sume todos los numeros de 1 al 100 y muestre el resultado
let sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
    sum += i;
}

console.log("La suma de los números del 1 al 100 es:", sum);

// ejericio 3
let valor = 0;
while(valor < 51){
    valor++;
    if(valor % 2 == 0){
        console.log(valor);
    }
} 

// ejercicio 4
myArray = ["Pedroo", "Juan", "Maria", "Jose", "Luis", "Ana", "Luis", "Ana", "Jose", "Maria", "Juan", "Pedro"];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// ejercicio 5
let cadena = "Hola Mundo";
let vocales = 0;

for(let i = 0; i < cadena.length; i++){
    if(["a","e","i","o","u"].includes(cadena[i].toLowerCase())){
        vocales ++;
    }
}

console.log(vocales);


// ejercicio 6
let myArray2 = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10];
let mult = 1;

for(let i = 0; i < myArray2.length; i++){
    mult *= myArray2[i];
}
console.log(mult);

// ejercicio 7
let resultado;
let k = 1;

while(k < 11){
    resultado = k * 5;
    k++;
    console.log(resultado);
}

// ejercicio 8
let cadena2 = "caca"
let cadenaInvertida = "";

for(let i = cadena2.length - 1; i >= 0; i--){
    cadenaInvertida += cadena2[i];
}

console.log(cadenaInvertida);


