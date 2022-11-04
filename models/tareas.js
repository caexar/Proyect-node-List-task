const Tarea = require('./tarea');
require("colors");

/*
 *  demostracion grafica de lo que ara el _listado
 * _listado:
 *          { 'uuid-13241-46546-2: { id:12, desc: asd, completadoEN: 798789}'}, 
 */

class Tareas{

    //creo una propiedad listado pa guardar toda la lista
    _listado = {};

    //creamos un getter para retornar un arreglo con la lista
    get listadoArr(){

        const listado = [];
        //llenamos el arreglo con esta funcion 
        //el object.key extrae la llave ya que retornara un arreglo de String
        Object.keys(this._listado).forEach( key => {
            //extrae la tarea del listado
            const tarea = this._listado[key];
            listado.push( tarea);
        });

        return listado;
    }

    constructor(){
        this._listado = {};
    }

    //borrar
    borrarTarea( id = ''){

        if (this._listado[id]) {
            delete this._listado[id];
        }

    }

    cargarTareasFromArray( tareas = []){
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea( desc = '' ){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){
        
        console.log();
        this.listadoArr.forEach( ( tarea, i) => {
            
            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn)
                        ?"Completada".green
                        :"Pendiente".red;
            console.log(`${idx} ${desc} :: ${estado}`);

        });
        
    }

    listarPendientesCompletadas(completadas = true){

        let contador = 0;
        console.log();
        this.listadoArr.forEach( (tarea) => {

            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                        ?"Completada".green
                        :"Pendiente".red;   
            
            if (completadas) {
                if (completadoEn) {
                    contador += 1;
                    console.log(`${(contador + ".").green } ${ desc} :: ${completadoEn.green}`);
                }
            } else {
                if (!completadoEn) {
                    contador += 1;
                    console.log(`${(contador + ".").green} ${ desc} :: ${completadoEn}`);
                }
                
            }

        });


    }

    toggleCompletadas(ids = []){

        ids.forEach( id => {

            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString()
            }
        });

        this.listadoArr.forEach(tarea => {

            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }

        });

    }
}







module.exports = Tareas;