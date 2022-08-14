console.log("Desafio Complementario Luigi Marenco de los Santos")

class Juegos {
   constructor (juegos) {

      this.id = juegos.id;
      this.nombre = juegos.nombre;
      this.saga = juegos.saga;
      this.precio = +juegos.precio;
      this.cantidad = 1;
      this.precioTotal = +juegos.precio;
   
   }

   agregarJuego () {
   this.cantidad++;
   }

   quitarJuego(){
      this.cantidad--;

   }

   actualizarPrecioTotal(){
      this.precioTotal * this.cantidad;
   }

}

const juegos = [{
   id : "0",
   nombre: "The Secret of Monkey Island",
   saga: "Monkey",
   categoria:"Aventura",
   precio:1500,
},
{
   id : "1",
   nombre: "Lechuck Revenge",
   saga: "Monkey",
   categoria:"Aventura",
   precio:2000,
},
{
   id : "2",
   nombre: "Course of Monkey Island",
   saga: "Monkey",
   categoria:"Aventura",
   precio:1800,
},
{
   id : "3",
   nombre: "The shadows of the Templairs",
   saga: "Broken Sword",
   categoria:"Point and Click",
   precio:1000,
},
{
   id : "4",
   nombre: "The Smoking Mirrors",
   saga: "Broken Sword",
   categoria:"Point and Click",
   precio:1200,
},
{
   id : "5",
   nombre: "The Sleeping Dragon",
   saga: "Broken Sword",
   categoria:"Point and Click",
   precio:1000,
},
{
   id : "6",
   nombre: "Grim Fandango",
   saga: "Grim",
   categoria:"Aventura",
   precio:2200,
},
{
   id : "7",
   nombre: "Indiana Jones and The Fate of Atlantis",
   saga: "Indiana",
   categoria:"Point and Click",
   precio:1200,
},
{
   id : "8",
   nombre: "Loom",
   saga: "Loom",
   categoria:"Aventura",
   precio:10000,
}
]

//Pusheando un juego (te lo recomiendo)

juegos.push ({

   id : "9",
   nombre: "The last Door",
   saga: "The last Door",
   categoria:"Aventura",
   precio:9000,

})

console.table(juegos)
 
let carrito=[]
let sumaTotal

function menuDeCompras() {
   let stringsProductos = ""

   for (const juego of juegos){
      stringsProductos+= `${juego.id} : ${juego.nombre} $ ${juego.precio} \n`;
   }
    let idProducto = prompt(`Escriba el Numero para comprar el juego o ESC para salir:\n${stringsProductos}\n `);

     while (idProducto!== "ESC" ){
        let juegoEnCarrito = carrito.find((elemento) => elemento.id == idProducto);

        if (juegoEnCarrito) {
           let index = carrito.findIndex((elemento) => elemento.id === juegoEnCarrito.id);

           carrito [index].agregarJuego ();
           carrito [index].actualizarPrecioTotal()

           alert (`Se añadio otra unidad del juego seleccionado ${carrito[index].nombre}`);

           console.table(carrito);
        } else {
         carrito.push(new Juegos (juegos[idProducto]));;

           alert  (`Se agrego al carrito el juego ${juegos[idProducto].nombre} `)
        }

        idProducto = prompt (`Desea seguir comprando Juegos? Escribra el Numero para seleccionar una nueva o escriba ESC para salir\n${stringsProductos}`);
     }
}


function sumarPrecioTotal() {
   let precioTotal = 0;
   for (const juegos of carrito) {
       precioTotal += juegos.precioTotal;
   }

   return precioTotal;
}

menuDeCompras();
precioTotal = sumarPrecioTotal();

alert(`El precio total de tu compra es de $${precioTotal}. Lo esperamos pronto, page Cooming SOON!`);

console.log(carrito);

