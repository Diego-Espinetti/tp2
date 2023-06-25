/* var valor = document.getElementById("contador");
var span = document.getElementsByTagName("span");
console.log(valor);
console.log(span); */

/* function contador(){
  var parrafo =   document.createElement("p", "Hola mundo");

  console.log(span[1])
  
} */

function EliminarItem(){
    console.log("Click desde Eliminar Item")
   // document.getElementsByClassName("carrito").remove(posicion)
}




const carrito = [];
const sumaTotal = 0;
const items = " ";
let operador = 0;

const producto = [
    {
        id:0,
        nombre:"Tele",
        Descripcion:"Televisors",
        img:"calabacin.jpg"
    },
     {
        id:1,
        nombre:"Iphone",
        Descripcion:"Iphone",
        img:"fresas.jpg"

    },
    {
        id:2,
        nombre:"Computadora",
        Descripcion:"Computadora",
        img:"papa.jpg"

}
];    


/* Funcionalidad para generar los productos desde javascript (Comprar) */

producto.forEach( element => {
    document.write(
        `<div class="productos">
        <h1 class="titulo">${element.nombre}</h1>
        <p>${element.Descripcion}</p>
        <img src=${element.img}>
        <button  id="0" class="AgregarCarrito" >Comprar</button>
        </div>`)
});         


const Eliminar = document.getElementsByClassName("Eliminar");





/* Funcionalidad del boton para agregar al carrito (Comprar) */
const AgregarCarrito = document.getElementsByClassName("AgregarCarrito");
for(const x in AgregarCarrito){

    
    AgregarCarrito[x].addEventListener("click", (e=>{
        let productoI = producto[x] 
        carrito.push(/* productoI.id */ productoI.nombre /* productoI.Descripcion */)
        console.log(carrito)

        
     //   console.log(Eliminar)
        let span = document.createElement("span")
        
    //    console.log(carrito)

    for(const w in carrito){
        console.log(w)
        operador = w
        
        span.innerHTML = 
        (`<div id=${w} class="productosLista">
        <h3 class="titulo">${productoI.nombre}</h3>
        <p>${productoI.Descripcion}</p>
        <button   class="Eliminar" >X</button>
        </div>`);
    }
    
    document.getElementById("modal").appendChild(span);
    
    var listita =  document.getElementsByClassName("productosLista");


    
    
            for(let d in listita){
                console.log(d, listita)
                for( const y in Eliminar){
                    Eliminar[y].addEventListener("click", (e=>
                        {
                            let productoLista = listita[y]
                            console.log(productoLista)
                            let modal = document.getElementById("modal");
                            //                            document.listita[y].remove()
                            document.getElementById(y).remove()
                            carrito.pop(y);
                            console.log(modal)
                            console.log(carrito)
                        }
                        )
                    )
                };
            }
        

         /*        for(const z in carrito){
                    console.log("click desde el boton eliminar");
                    console.log(operador)
                    carrito[z].addEventListener("click",(e=>{
                        document.carrito[operador].remove();
                        document.getElementById("modal").remove(0);

                   }))
            } */
    }));};
    

        


  







        
        
        
        
















/* 
 Agregar[1].addEventListener("click", (e=>{
   let productoI = producto[1] 
    carrito.push(productoI.id, productoI.nombre, productoI.Descripcion)
    
    console.log(carrito)
}));

Agregar[2].addEventListener("click", (e=>{
   let productoI = producto[2] 
    carrito.push(productoI.id, productoI.nombre, productoI.Descripcion)
    console.log(carrito)

}));
 */
 





/* 




Agregar[1].addEventListener("click", (e=>{

    console.log("Click con el boton del carrito")
}))
Agregar[2].addEventListener("click", (e=>{

    console.log("Click con el boton del carrito")
}))
Agregar[3].addEventListener("click", (e=>{

    console.log("Click con el boton del carrito")
}))*/