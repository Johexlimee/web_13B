'use strict';

let myValue = 0;
const value = ()=>{
    myValue = parseFloat(prompt("Introduzca un valor"));
    return myValue;
}

const testValue = (value)=>{
    /*switch (value) {
        case 1: console.log("Introdujo 1"); 
        break;
        case 2: console.log("Introdujo 2");
        break;
        default: console.log("Otro valor");
    }*/

    switch(true){
        case value>=0 && value<3: alert("Aplazado"); 
        break;
        case value>=3 && value<5: alert("Aprovado"); 
        break;
        default: alert("Error en valor");
    }
}

let resp = value();
testValue(resp);

console.log(typeof(null));
console.log(typeof(undefined));
