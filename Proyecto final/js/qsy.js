
let h1 = document.getElementById("h1");
let ul = document.getElementById("simpson");

const publicacion = [
    { title: "Homero Simpson", body: "Estado: vivo - Genero: Masculino - Cumpleaños: 12 de Mayo" },
    { title: "Marge Simpson", body: "Estado: viva - Genero: Femenino - Cumpleaños: 19 de Marzo" },
    { title: "Bart Simpson", body: "Estado: vivo - Genero: Masculino - Cumpleaños: 23 de Febrero" },
    { title: "Lisa Simpson", body: "Estado: viva - Genero: Femenino - Cumpleaños: 9 de Mayo" },
    { title: "Maggie Simpson", body: "Estado: viva - Genero: Femenino - Cumpleaños: 19 de Abril"},
]

localStorage.setItem("publicacion", JSON.stringify(publicacion))

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));

    publicacion.forEach(publicacion => {
        const li = document.createElement("li");
            li.innerHTML =  `
            <h2">${publicacion.title}</h2>
            <p>${publicacion.body}</p>
            
            `
            ul.append(li);
        });


    





