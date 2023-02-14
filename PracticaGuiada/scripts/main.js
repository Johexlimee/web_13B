import {validateString, vAvg, checkAvg} from './validate.js';
import {paintCard,addStudent,addTeacher,modalAlert} from './paint.js'

const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar');
const opt = document.getElementById('opcion');

opt.onchange = function (){
    const op = document.getElementById('opcion').value; 
    if (op === 'profesor'){
        modalAlert("Los datos han cambiado a profesor")
        document.getElementById('text1').value="Nombres y Apellidos";
        document.getElementById('text2').value="Profesion";
        document.getElementById('text3').value="Edad";
    } else if (op === 'estudiante'){
        modalAlert("Los datos han cambiado a estudiante")
        document.getElementById('text1').value="Nombres";
        document.getElementById('text2').value="Apellidos";
        document.getElementById('text3').value="Promedio";
    }
}

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
    const nameApe = document.getElementById('nombre').value;
    const prof = document.getElementById('apellido').value;
    const age = parseFloat(document.getElementById('promedio').value);
    const op = document.getElementById('opcion').value;

    if (op === 'estudiante'){
        if (validateString(name) && validateString(lastName) && op !=0){
            if ((!isNaN(avg)) && (vAvg(avg))){
                addStudent(name,lastName,avg)
                modalAlert("Se agrego el estudiante")
                document.getElementById('nombre').value="";
                document.getElementById('apellido').value="";
                document.querySelector('#promedio').value="";
            } else {
                document.querySelector('#promedio').value= "";
                modalAlert("Promedio Invalido");
            }
        } else {
            modalAlert("Datos invalidos, revisar campos");
        }
    } else if (op === 'profesor') {
        if (validateString(nameApe) && validateString(prof) && op !=0){
            if (!isNaN(age)){
                addTeacher(name,lastName,avg)
                modalAlert("Se agrego el profesor")
                document.getElementById('nombre').value="";
                document.getElementById('apellido').value="";
                document.querySelector('#promedio').value="";
            }
        } else {
            modalAlert("Datos invalidos, revisar campos");
        }
    }
}
btnMostrar.addEventListener('click', function(){
    const op = document.getElementById('opcion').value;
    if (op === 'estudiante'){
        paintCard("ESTUDIANTE");
    } else if (op === 'profesor') {
        paintCard("PROFESOR");
    }  
})
