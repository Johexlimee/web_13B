'use strict';
//Contenedor var:global  let:Local conts:Constantes
/*
    Funciones: Clasica, flecha
*/

let numr1=9;

const IVA_P = 3.19;

//Funcion clasica

function addition(num1, num2){
    return num1 + num2;
}

//Invocacion de la funcion clasica
let response = addition(numr1, 8);
/*console.log(response);
console.log(addition(12,8));*/

//Funcion tipo flecha
const avg = (n1,n2,n3) => {
    return (n1 + n2 + n3) / 3;
}

console.log(avg(numr1,IVA_P,78));