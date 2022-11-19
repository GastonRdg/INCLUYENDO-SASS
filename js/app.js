let dolarCompra;
const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById("cantidadCarrito")

let carrito  = JSON.parse(localStorage.getItem("carrito")) || []; // si hay algo guardado en el local || si no hay nada guardado 

productos.forEach((productos)=>{

let content = document.createElement("div");
content.className = "card";

content.innerHTML = `
<img src= "${productos.img}">
<h3> ${productos.nombre}</h3>
<p class="precio">${productos.precio}</p>
`;

shopContent.append(content)

let comprar = document.createElement("button")

comprar.innerText = "comprar";
comprar.className = "comprar";

content.append(comprar);

comprar.addEventListener("click",() => {

const repeat = carrito.some((repeatProductos) => repeatProductos.id === productos.id)   

if (repeat){
   carrito.map((prod) => {//recorremos el carrito y le decimos si ese id coincide con el id que esta adentro del procuto, sumame una cantidad
    if (prod.id === productos.id){
        prod.cantidad++;
    }
   })  
}else{

    carrito.push({
      
      
        id : productos.id,
        img:productos.img,
        nombre: productos.nombre,
        precio: productos.precio,
        cantidad: productos.cantidad


    
  });
     console.log (carrito);
       carritoCounter();
       saveLocal();
    };

  });
});
const saveLocal = () =>{
localStorage.setItem("carrito", JSON.stringify(carrito));
}

//function obtenerDolar(){
  //const URLDOLAR="https://api.bluelytics.com.ar/v2/latest";
  //fetch(URLDOLAR)
     // .then( respuesta => respuesta.json())
     // .then( cotizaciones => {
       //   const dolarBlue = cotizaciones.blue;
      //    console.log(dolarBlue);
       //   document.getElementById("fila_prueba").innerHTML+=`
       //       <p>Dolar compra: $ ${dolarBlue.value_buy} Dolar venta: $ ${dolarBlue.value_sell}</p>
          //`;
          //dolarCompra=dolarBlue.value_buy;
     //     
      //})
    //}
    
  function obtenerDolar(){
  fetch("https://api.bluelytics.com.ar/v2/latest",{

  })
  .then((response)=>response.json())
  .then((cotizaciones)=>{
    const dolarBlue = cotizaciones.blue;
    
    
      const content = document.createElement("div")
      content.innerHTML= `
      <p>Dolar compra: $ ${dolarBlue.value_buy} Dolar venta: $ ${dolarBlue.value_sell}</p>
      `;
      dolarCompra=dolarBlue.value_buy;
      dataDolar.append(content)
    })
  
  }
  obtenerDolar();