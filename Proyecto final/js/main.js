/*
console.log(localStorage);

const productos = [
    {id: 1, nombre: "blazer", precio: "10000"},
    {id: 2, nombre: "cargo", precio: "8000"},
    {id: 3, nombre: "borcegos", precio: "15000"},
  ]; 

let usuario;
let usuarioStorage = localStorage.getItem("usuario");

if(usuarioStorage){
    usuario = usuarioStorage;
    alert(`Que bueno que volviste ${usuario}`);
}else{
    usuario = prompt("Ingrese su usuario");
    alert(`Espero que disfrute esta pagina ${usuario}`);
    localStorage.setItem("usuario", JSON.stringify(usuario));
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

    let titulo = document.getElementById("titulo");
    console.log(titulo.innerHTML);

    let boton = document.getElementById("boton");
    const texto = () => {
    console.log("click");
    }
    boton.addEventListener("click", texto);
 
localStorage.clear();*/ 


// INTENTAMOS OTRA VEZ

let div = document.getElementById("div");

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;

  if(!inputs[0].value.includes("@")){
    inputs[0].value = "";
  }
 
});

let boton = document.getElementById("boton")

boton.addEventListener("click",async ()=>{
  const { value: accept } = await Swal.fire({
    title: 'Terminos y Concidiones',
    input: 'checkbox',
    inputValue: 1,
    inputPlaceholder:
      'Estoy de acuerdo con los terminos y conciones',
    confirmButtonText:
      'Continuar <i class="fa fa-arrow-right"></i>',
    inputValidator: (result) => {
      return !result && 'Debes estar de acuerdo con los terminos y condiciones'
    }
  })

  
  if (accept) {
    Swal.fire('Estoy de acuerdo con los terminos y condiciones :)')
    window.location.href="simpsons.html"
  }

  
});


