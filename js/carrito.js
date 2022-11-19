const pintarCarrito = () => {


    modalContainer.innerHTML= ""; 
    modalContainer.style.display = "flex"

    const modalHeader = document.createElement ("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class= modal-header-title">Carrito.</h1>
    
    `;
modalContainer.append(modalHeader);


const modalbutton = document.createElement("h1");

modalbutton.innerText = "❌";
modalbutton.className = "modal-header-button";



modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";

   
})
modalHeader.append(modalbutton); 



carrito.forEach((productos)=>{
    
let contenidoCarrito = document.createElement("div");

contenidoCarrito.className = "modal-content"
contenidoCarrito.innerHTML = `

      <img src= "${productos.img}">
      <h3> ${productos.nombre}</h3>
      <p>${productos.precio}</p>
      <p>${productos.cantidad}</p>
      <p>${productos.cantidad * productos.precio}</p>
`;

modalContainer.append(contenidoCarrito)



console.log(carrito.length);

let eliminar = document.createElement("span")
eliminar.innerText ="❌"
eliminar.className = "delete-product"
contenidoCarrito.append(eliminar);

eliminar.addEventListener("click", eliminarProducto)
});

const total = carrito.reduce((acc, elemento) => acc + elemento.precio * elemento.cantidad ,0);
 const totalBuying = document.createElement("div")
 totalBuying.className = "total-content"
 totalBuying.innerHTML = `total a pagar:${total}`;
 modalContainer.append(totalBuying);

}


verCarrito.addEventListener("click", pintarCarrito); 

const eliminarProducto = () => {

    const foundId = carrito.find((element) => element.id);
carrito = carrito.filter((carritoId) => {

    return carritoId !== foundId;
});
carritoCounter();
saveLocal(); // vuelve a set de nuevo con los productos eliminados 
pintarCarrito();

}

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));


    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
}


carritoCounter();