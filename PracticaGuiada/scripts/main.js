import {validateString, vAvg, checkAvg} from './validate.js';
import {paintCard, addStudent,modalAlert} from './paint.js'

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
    const avg = parseFloat(document.getElementById('promedio').value);
    const op = document.getElementById('opcion').value;

    // console.log(`${name} ${lastName} ${avg} ${op}`);

    if (validateString(name) && validateString(lastName) && op !=0){
        if ((!isNaN(avg)) && (vAvg(avg))){
            addStudent(name,lastName,avg)
        } else {
            document.querySelector('#promedio').value="";
            modalAlert("Promedio Invalido");
        }
    } else {
        modalAlert("Datos invalidos, revisar campos");
    }
}
btnMostrar.addEventListener('click', function(){
    paintCard("ESTUDIANTE");
})
