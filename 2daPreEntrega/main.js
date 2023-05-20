const productos = [
  {id: 1, nombre: "blazer", precio: "10000"},
  {id: 2, nombre: "cargo", precio: "8000"},
  {id: 3, nombre: "borcegos", precio: "15000"},
];


let edad = parseInt(prompt("Ingrese su edad"));
    if(edad >= 21){
        alert("bienvenido a nuestra pagina, un placer tenerte aqui");
        
    }else if(edad >= 15){
        alert("se requiere autorizacion de tus tutores");
    
    }else{
        alert("no se te permite comprar");
    }

    let precio = parseInt(prompt("Ingrese el producto buscado"));

    let eleccion = productos.filter((item) => item.nombre);

    eleccion.forEach((item) => {
      let mensaje = `
      Id: ${item.id}
      Nombre: ${item.nombre}
      Precio: ${item.precio}
      `;

      alert(mensaje);
    });

const nombres = productos.map(item => item.nombre);
console.log(nombres);

