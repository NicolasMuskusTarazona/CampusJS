// Operadores, condicionales y estructuras repetitivas

// Operadores Aritmeticos 
// repasar mas en campus

let numero1 = Number(prompt("Ingrese un numero 1:", 5))
let numero2 = Number(prompt("Ingrese un numero 2:", 10))

// , 5 deja el numero en la peticion
// , 10 deja el numero en la peticion

let respuesta = numero1 + numero2
console.log(respuesta)


//Operadores de Asignacion abreviados
// Aprender 


// Recomendacion saltarselo
// 1.3 
// 1.4 

// 1.5 Operadores logicos
// compara la respuesta de una afirmacion booleano
// compara numeros o letras 
// todos los comparadores devuelve un booleano

// Concatenacion
// ${}
// Agarra el numero o la respuesta del usuario 
// y la pone en el texto , esto solamente sirve
// cuando el string se usa este tipo de comillas `Ej`
// ${}

let edad =Number(prompt("Ingrese su edad: ", 17))
if (edad >=0 && edad <=12){
    console.log(`Su edad es de ${edad} años por motivo usted es menor de edad`)
}
else if(edad >= 13 && edad <=17){
    console.log(`Su edad es de ${edad} usted es un adolecente`)
}
else if(edad >=18){
    console.log(`Su edad es de ${edad} años usted es mayor de edad`)
}
else{
    console.log("Ingrese un numero.")
}

// 3. Estructuras repetitivas

// Ciclos
// Tareas repetitivas con un inicio, condicion y avance

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// Bucles
// Tareas repetitivas se pueden controlar su condicion
do{
    console.log("Hola")
}while(confirm("¿Quiere repetir la tarea?"))

// Iteradores
// Tareas repetitivas se pueden realizar con el tipo de dato primitivo array

const pasaTiempos =["Comer","Jugar","Programar"]

pasaTiempos.forEach(function(value,indice,copy){
    console.log(value) // Muestra Cada caracter, cada uno en una linea
    console.log(indice) // Muestra en que posicion se encuentran
    console.log(copy) // Muestra todos los caracteres en una sola linea 
    // No aparece la tabla 
    //if(indice == 2) return;
    //console.log(value)
})