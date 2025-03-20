// Ternarios
// simplificacion de un condicional sencillo de 2 rutas ( if -else )

//  ? === if
// else === :
// no podemos colocar varias lineas de codigo 




//if (true){
//    console.log("OK")
//}else{
//    console.log(":(")
//}

//const res = (true) ? "Ok" : ":(";

// Ej:

//const numero = Number(prompt("Ingrese el numero: "))
//if (numero %2 == 0){
//    console.log("Es par")
//}else{
//    console.log("No es par")
//}

// ternarios:

//const res = (numero % 2 == 0) ? "Es par " : "No es par"
//console.log(res)


const edad = Number(prompt("Ingrese su edad: "))

//if(edad >= 18){
//    console.log("Mayor de edad")
//}
//else if(edad >= 13 && edad <= 17){
//    console.log("Adolecente")
//}else{
//    console.log(":(")
//}


// if == ?
// else == :
// else if == :(condicion)?
const res = (edad >= 18)?
            "Mayor de edad"
            :(edad >= 13 && edad <= 17)?
            "Adolecenmte":
            ":("
console.log(res)

const numero = Number(prompt("Ingrese un numero"))
switch (numero) {
    case 1:
        console.log("Opcion 1")
        break;
    case 2:
        console.log("Opcion 2")
        break
    case 3:
        console.log("Opcion 3")
        break
    case 4:
        console.log("Opcion 4")
        break
    case 5:
    case 6:
    case 7:
        console.log("Opcion 5,6 y 7")
        break
    default:
        console.log("No existe la opcion")
        break;
}