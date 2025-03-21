// Funciones declarativas

function saludar(){
    return "Hola a todos"
}
console.log(saludar())
//saludar()  

// Funciones por expresion
// nos recomienda usar esta 
const nombre = prompt(`Bienvenido`)

const despedida = function(){
    return`Chao a ${nombre}`
}
console.log(despedida())

//despedida()

// Objeto

const bienvenida = new Function("nombre", `return "Bienvenido " + nombre`)
console.log(bienvenida(nombre))

// Funcion flecha 
// se cambia la palabra Funcion por una flecha

const hastaLuego = () => (`Hasta Luego ${nombre}`)

console.log(hastaLuego())