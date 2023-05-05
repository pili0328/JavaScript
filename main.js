

//
/*
let nombre = "pilar";
let saludo = "hola";

let mensaje = `Buenass ${nombre} quiero decir ${saludo}`;
 
prompt("ponga algo aqui pilar");
console.log(mensaje);
alert = (`Buenass ${nombre} como estas`)*/

/*let nombre = prompt("ingrese su apodo");
let apellido = prompt("ingrese su apellido");

if(nombre !="" && apellido !=""){
    alert(`buenass ${nombre} ${apellido}`);
}else{
    alert("Apodo y apellido se necesitan");
}*/

/*let edad = parseInt(prompt("Pone tu edad"));

if(edad >= 22){
    alert("podes pasar trola");
}else if(edad >= 15){
    alert("pasa con otra persona");
}else{
    alert("no pasas, flasheaste");
}*/

/*let numero = parseInt(prompt("Ingrese en digito"));

for(let i = 2; i <= 12; i++ ){
 let resultado = numero *i;
 alert(`${numero} * ${i} = ${resultado}`);
}*/

/*voy a hacer una funcion que vea si con la edad que pone tendria permiso para entrar*/

//ejemplo
/*
let edad = parseInt(prompt("ingrese su edad"));

    if(edad >= 21){
        alert("bienvenido a nuestra pagina, un placer tenerte aqui");
        break;
    }else if(edad >= 15){
        alert("se requiere autorizacion de tus tutores");
        break;
    }else{
        alert("no se te permite comprar");
        break;
    }
*/

function ingreso(edad){
    return edad;
}
let edad = parseInt(prompt("Ingrese su edad"));
    if(edad >= 21){
        alert("bienvenido a nuestra pagina, un placer tenerte aqui");
        
    }else if(edad >= 15){
        alert("se requiere autorizacion de tus tutores");
    
    }else{
        alert("no se te permite comprar");
       
    }
//ingreso("Bienvenida", "a nuestro local");
//ingreso("Lo sentimos", "no se te permite el paso");