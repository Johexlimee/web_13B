import {validateString, vAvg, checkAvg} from './validate.js';
import {paintCard, addStudent} from './paint.js'

const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar');

/* Generar eventos
    1. Colocando el metodo en el atributo onlclick, onmouseover, onmouseout de la etiqueta

    const captura = () => {
        console.log('Hizo click');
    }

    2. Metiante propiedad

    btnAgregar.onclick = function () {
        console.log('evento mediante propiedad');
    }

    3. Mediante el addEven......
*/

btnAgregar.onclick = function () {
    const name = document.getElementById('nombre').value;
    const lastName = document.getElementById('apellido').value;
    const avg = document.getElementById('promedio').value;
    const op = document.getElementById('opcion').value;

    // console.log(`${name} ${lastName} ${avg} ${op}`);

    if (validateString(name) && validateString(lastName) && opcion !=0){
        
    }
}