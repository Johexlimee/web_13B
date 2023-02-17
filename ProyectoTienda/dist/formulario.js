import { Validacion } from "./Validacion.js";
//Instanciar el objeto
const validacion = new Validacion();
const formulario = document.getElementById('form');
const btn = document.getElementById('btnSend');
//objeto de validacion
const formValid = {
    nombres: false,
    apellidos: true,
    mail: false,
    politica: false
}
//validacion
formulario.addEventListener("change", (e)=> {
    const inputId = e.target.id;
    const miValue = e.target.value;
    const miClass = e.target.classList;
    const validClass = () =>{
        miClass.add("is-valid");
        miClass.remove("is-invalid");
    }
    const inValidClass = () =>{
        miClass.add("is-invalid");
        miClass.remove("is-valid");
    }
    switch (inputId){
        case "names":
            formValid.nombres = validacion.validNames();
            formValid.nombres ? validClass() : inValidClass();
            console.log(Object.values(formValid));
        break;
        case "mail":
            formValid.mail = validacion.validMail(miValue);
            formValid.mail ? validClass() : inValidClass();
            console.log(Object.values(formValid));
        break;
        case "checkPolitica":
            if (e.target.checked) formValid.politica = true;
            else formValid.politica = false;
            console.log(Object.values(formValid));
        break;
    }
});