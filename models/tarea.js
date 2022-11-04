const { v4: uudiv4 } = require('uuid');

class Tarea{

    id = '';
    desc = '';
    completadoEn = null;

    constructor(desc){

        this.id = uudiv4();
        this.desc = desc;
        this.completadoEn = null;

    }


}

//al exportar sin llaves {} se exporta por defecto y te ahorras la desestructuracion
module.exports = Tarea;