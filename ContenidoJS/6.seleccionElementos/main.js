'use strict';
//Seleccion por id
const art1 = document.getElementById('art1');
//Seleccion por id queryselector
const art2 = document.querySelector('#art2');
//Seleccion por atributo name
const contenedor = document.getElementsByName('contenedorIMG');
//selecion por class
const subtitle = document.getElementsByClassName('subtitle');
// queryselector class
const stitle = document.querySelector('.subtitle');
//seleccionar todos los elementos
const li = document.querySelectorAll('li');

console.log(li);

const button = document.querySelector('#enviar');

button.addEventListener('click',()=>{
    const name = document.getElementById('name').value;
    alert(`Hola ${name}`);
});