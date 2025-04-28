// operadores 

// operadores arimteticos

let a = 5

let b = 10

console.log(a+b)// suma
console.log(a - b)// resta
console.log(a * b)// mult
console.log(a / b)// div

console.log(a % b)// mod
console.log(a ** b)// Exponente

a++
console.log(a)// Incremento

b--
console.log(b)// Decremento

// Operadores de asignación

let myVar = 2 
console.log(myVar)
myVar += 2
console.log(myVar)
myVar /= 2
console.log(myVar)

// Operadores de comparación

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == 5)//igualdad por valor
console.log(a == "5")
console.log(a === a)//igualdad por identidad (tipo y valor)
console.log(a === 5)
console.log(a === "5")
console.log(a != 5)//desigualdad por valor

// Operadores logicos

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)


// not (!)
console.log(!(5 > 10 || 15 > 20))
console.log(!(5 < 10 || 15 > 20))
console.log(!(5 < 10 || 15 < 20))

// Operadores ternarios

const isRaining = true

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")


// 1
let varSuma = 1+1
let varResta = 1-1
let varDiv = 1/1
let varMult = 1*1
let varMod = 1%1
let varPot = 1**1

// 2
let var3 = varDiv -= varMod 
let var4 = varDiv += varMod 
let var5 = varDiv *= varMod 

// 3
let varIgual = varSuma == varSuma
let varIgualValor = varSuma == varDiv
let varIgualValorTipo = varDiv === varMult

// 4 
let varFalse = var3 == var4

// 5
console.log(2<10 && 2<5)

// 6
console.log(2>9 || 1<2)

// 7
console.log(3>1 && 1<2 || 1<3)

// 8
console.log(!(1>2)||1<3)

// 9
const auto = true
auto ? console.log("Es un auto") : console.log("No es un auto")