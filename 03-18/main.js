// Diferentes tipos de console

console.log("Hola") // Imprime mensaje normal
console.error("chao") // Imprime mensaje rojo y un simbolo respectivo
console.warn("Adios") // Imrpime mensaje amarillo y un simbolo respectivo

// mensaje de confirmacion 
// aqui no habilita un input
// aparecen 2 botones " cancelar "
// y "aceptar"

confirm("Confirma pe")

// input 

let nombre = prompt("Ingrese su nombre:")
console.log(nombre)


let apellido = prompt("Ingrese su apellido: ")
console.log(apellido)

let edad = prompt("Ingrese su edad: ")
console.log(edad)

console.log(nombre,apellido,"tiene",edad,"años.")

// const una variable que no cambia 

const saludo =("Hola")
console.log(saludo)

// Error
//saludo =("Aloha") // una constate no puede cambiar pues no es mutable

let despedida =("Chao")
console.log(despedida)

despedida =("Largo")

// let es mutable si cambio el valor no me dara Error
console.log(despedida)

// Para JS un conjunto de edad son objetos
// una clase es un objeto
// string y numeros son objetos
// En JS todo es un objeto

let año =(2025) // Tipo de dto number

let nombreHermano=("Danilo") // Tipo de dato string

let altura =(1.75) // Tipo de dato float

let clase = true // Tipo de dato boolean

let pasaTiempos = ["Programar",'Estudiar',`LOL`]// Tipos de datos array

let residencia = {Calle: "C" ,numero: 61 } // Tipo de dato objeto

console.log(residencia.Calle) // C

console.log(pasaTiempos[2]) // LOL
console.log(pasaTiempos[0]) // Programar
pasaTiempos[1] ="Jugar" // Cambio Estudiar por Jugar
console.log(pasaTiempos[1]) // Jugar

console.log(pasaTiempos)


let adivinaNumero = prompt("Ingrese un numro del 1-10: ")
// if - elif  - else
adivinaNumero =  Number(adivinaNumero)
if(adivinaNumero == 1){
    console.log("Ganaste")
}
else if (isNaN(adivinaNumero)){
    console.log("Tienes que ingresar un numero ")
}
else if(adivinaNumero == 2){ // elif
    console.log("Ganaste un cupon")
}
else if( adivinaNumero < 10){ 
    console.log("Vuelve a intentarlo")
}
else{
    console.log("Escribe un numero del 1-10")
}


let numero1 = Number(prompt("Ingrese el primero numero para sumar:"))
let numero2 = Number(prompt("Ingrese el segundo numero para sumar 2:"))

let respuesta = numero1 + numero2
console.log(respuesta)
// and = && Y
// or = || o 
// not = ! no

// != Compara boleanos

// Aprender ciclos, bucles e iteradores