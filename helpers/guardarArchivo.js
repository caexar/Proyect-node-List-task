const fs = require('fs');

//los archivos txt son similares a json
const archivo = './db/data.json';

const guardarDB = (data) => {  
    //la funcion JSON.stringify trasforma el texto en String, pero en formato JSON aunq es lejible en txt
    fs.writeFileSync(archivo, JSON.stringify(data) );
}

const leerDB = () =>{
    if (!fs.existsSync(archivo)) {
        return null;
    }

    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data = JSON.parse(info);

    //console.log(data);

    return data;
} 

module.exports = { 
    guardarDB,
    leerDB
}