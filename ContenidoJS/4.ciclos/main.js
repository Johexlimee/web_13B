'use strict';
console.log('ciclo for');
for (let i=0; i<10; i++) {
    console.log("Numero: "+i);
}

console.log('ciclo while');
let j=0;
while (j < 10) {
    console.log(j);
    j++;
}

console.log('ciclo do while');
let k=0;
do{
    console.log(`Numero ${k} ******* ${k}`);
    k++;
}while (k < 10);