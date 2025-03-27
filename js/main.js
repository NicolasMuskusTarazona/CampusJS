//Agregamos una lista en html y el json cambia
const saveProduct = async(data) => {
    const config = {
        method: "POST", //Guardar
        body: JSON.stringify(data)
    }
    const reponse = await fetch("http://127.0.0.1:5600/products",config)
    const result = await reponse.json()
    return result
}

while(confirm("¿ Deasea insertar un dato ?")) {
    const data = {
        id : prompt("Ingresa el id", "Mic330"),
        name: prompt("Ingrese el nombre", "Mac mini"),
        price: Number(prompt("Ingrese el precio", 600)),
        category: prompt("Ingrese la categoria", "Technology"),
    }
    saveProduct(data)
    .then(result => alert(JSON.stringify(result)))
    .catch(error => alert(error))
}