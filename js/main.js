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

const editProduct = async(data) =>{
    const {id, ...dataUpdate} = data
    const config ={
        method: "PATCH", // Actualizar datos especificos
        body: JSON.stringify(dataUpdate)
    }
    const reponse = await fetch(`http://127.0.0.1:5600/products${id}`,config)
    const result = await reponse.json()
    return result
}

while (confirm("¿ Deseas actualizar un producto?")){
    const data = {}
    data.id = prompt("Ingrese el id del producto a actualizar", "Mic330")
    data.name = (confirm("¿Desea actualizar el nonmbre del producto ?")) ? prompt("Ingrese el nonbre del producto") : undefined
    if(confirm("¿Desea actulizar el precio del producto?")) data.price = Number(prompt("Ingrese el nuevo precio del producto"))
    if(confirm("¿Desea actualizar la categoria del producto?")) data.category = prompt("Ingrese la nueva categoria del producto")
    editProduct(data)
    .then(result => alert(JSON.stringify(result)))
    .catch(error => alert(error))
}

const deleteProduct = async(data) =>{
    const {id} = data
    const config ={
        method: "DELETE",
    }
    const reponse = await fetch(`http://127.0.0.1:5600/products${id}`,config)
    const result = await reponse.json()
    return result
}

while(confirm("¿ Deseas eliminar un producto?")){
    const data = {}
    data.id = prompt("Ingrese la id del producto que desea eliminar", "Mic330")
    data.name = (confirm("¿Desea eliminar el nombre del producto")) ? (alert("Nom"))
}