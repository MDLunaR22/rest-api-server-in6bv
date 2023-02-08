//Configuración del server
//Importaciones básicas
const express = require('express');
const cors = require('cors');
const { conectionNoSql } = require('../database/config');

class Server {

    constructor() {
        //Variables de configuración
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Rutas de mi app
        this.routes();

        this.conectarDB();

    }


    middlewares() {

        //CORS 
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //directorio publico del proyecto
        this.app.use(express.static('public'));
    }


    routes() {
        this.app.use(this.usuarioPath, require('../routes/usuario'));
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        })
    }

    async conectarDB(){
        conectionNoSql();
    }
}



module.exports = Server;