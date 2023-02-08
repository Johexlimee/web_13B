'use strict';
const parrafo2 = document.getElementById('parrafo2');

console.log(parrafo2);

const mySubtitle = document.createElement("h2");
//Asignar contenido
mySubtitle.textContent = "Esto es un subtitulo creado desde javascript";
//Agregar atributos al elemento 
mySubtitle.id = "sub1";
mySubtitle.className = "subtitulo";
mySubtitle.style = "color: red; font-weight: bold";
mySubtitle.setAttribute("Name", "sub1");

//Insertar en el DOM
//document.body.appendChild(mySubtitle);

parrafo2.appendChild(mySubtitle);

const parrafo3 = document.createElement("p");
//parrafo3.textContent = "<h3>sub3</h3>";
parrafo2.innerHTML = "<h3><strong>sub3<strong></h3>";
parrafo2.appendChild(parrafo3);