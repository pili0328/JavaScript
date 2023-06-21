//FORMULARIO

let div = document.getElementById("div");

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;

  if(!inputs[0].value.includes("@")){
    inputs[0].value = "";
  }
 
});

//USO DE UNA LIBRERIA, SWEET ALERT.

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
    window.location.href="./pages/qsy.html"
  }

});


