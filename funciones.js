// Funciones, bloque de codigo diseñado para realizar una tarea especifica

function myFunction(a, b){
    return a + b;
}

function myFunct(){
    console.log("Hola");
}

myFunct();

for(let i = 0; i < 5; i++){
    myFunct();
}

// Funciones Anonimas, que no tienen un nombre definido, 

const mtFunc2 = function(name){
    console.log("Hola " + name);
}

// Arrow Functions 

const myFunt3 = (name) => {
    console.log("Hola " + name);
}
