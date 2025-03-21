// Tarea

// ¿ Como funciona una API ?
// GRAPH WELL
// docker
// web socker
// cubernets


// Objetos, spread destructuracion
// los objetos son abstracciones de un plano

// ¿ Que son los Objetos ?
// Objeto 

// ' dato '
// " clave "


const tv ={
    type: "Screen plane",
    size: {
        height: 1.32,
        witdh: 1.55,
    },
    material: ["aluminum", "plastic"],
    brand : "Lg",
    'operative-system': "Androuid 16",
    color: ["black", "grey"],
    shape:"Rectangule",
    stated:false,
    parlants:false,
    volumen: 20,
    action(){
    // this quiere decir dentro del objeto
    // puede acceder " acceda al estado"
        if(this.stated){
            this.stated= false
        }else{
            this.stated = true
        }
        this.parlants = this.estado;
    },
    nivelvolumen(opcion){
        if(this.parlants){
            switch (opcion) {
                case "+":
                    this.volumen++;
                    break;
                case "-":
                    this.volumen--;
                    break;
                default:
                    console.log("La opcion del volumen no esta disponible")
                    break;
            }
        }else{
            console.log(`El televisor se encuentra en ${this.estado}`)
        }
    }
};

console.log(tv)

tv.action()
console.log(`El televisor se encuentra en este momento ${tv.stated}`)

tv.action()
console.log(`El televisor se encuentra en este momento ${tv.stated}`)

tv.action()
console.log(`El televisor se encuentra en este momento ${tv.stated}`)

tv.action()
console.log(`El televisor se encuentra en este momento ${tv.stated}`)
// Metodos de distancia


console.log(JSON.stringify(tv, null, 4))
console.log(json)
const obj = JSON.parse(json)
console.log(obj)


// Aprender a mapiar
// Aprender microservicios
// aprender bases de programacion
// aprender bases de programacion orientado a objetos
// patrones de diseño aprender
// ¿ Que es PHP ?