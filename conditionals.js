// if, else if, else

//if
let age = 37

if (age == 37){
    console.log("La edad es 37")
}

// else (si no)
if (age == 37){
    console.log("La edad es 37")
} else {
    console.log("La edad no es 37")
}

// else if (si no, si)
if (age == 37){
    console.log("La edad es 37")

} else if (age < 18){
    console.log("Es menor de edad")
}
else {
    console.log("La edad no es 37")
}


// operador ternario

age == 37 ? console.log("La edad es 37") : console.log("La edad no es 37")

// switch(muchas condiciones contra una unica variable)

let day = 0
let dayName

switch (day){
    case 0: 
        dayName = "Lunes"
        break
    case 1: 
        dayName = "Marts"
        break
    case 2: 
        dayName = "Miercoles"
        break
    case 3: 
        dayName = "Jueves"
        break
    case 4: 
        dayName = "Viernes"
        break
    case 5: 
        dayName = "Sabvado"
        break
    case 6: 
        dayName = "Domingo"
        break
    default:
        dayName = "Numero de dia incorrecto"
}

    // 2
    let myName = "Pedro"
    let number = 0

    if (number == 1){
        console.log(myName)
    }

    // 2

    if(number > 0){
        console.log("El numero es positivo")
    } else if(number < 0){
        console.log("El numero es negativo")
    } else{
        console.log("El numero es cero")
    }

    // 3

    let edadPersona = 17

    let mayoriaDeEdad = 18

    let resto = mayoriaDeEdad - edadPersona

    if(edadPersona < 18){
        console.log("Es menor de edad, le faltan " + resto + " años")
    }else if (edadPersona >= 18){
        console.log("Es mayor de edad")
    }


    