class Validacion{
    /*Costructor: da valores iniciales a los atributos de un objeto*/
    constructor(){};

    inputValid(input, regex){
        return input.match(regex) ? true : false;
    };

    validNames(cad){
        const nombresRX = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
        const response = this.inputValid(cad, nombresRX);
        return response;
    }
    validMail(cad){
        const mailRX = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
        const response = this.inputValid(cad, mailRX);
        return response;
    }
    validarForm = (object) => {
        const valores = Object.values(object);
        let resp = valores.findIndex(e => e === false);
        return resp;
    }
}
export {Validacion};