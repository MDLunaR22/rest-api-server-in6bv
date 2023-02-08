//Importacion
const { response, request } = require('express');

const bcryptjs = require('bcryptjs')

const Usuario = require('../models/usuario')

const getUsuarios = (req = request, res = response) => {

    res.json({
        msg: 'GET API de usuarios'
    });

}

const postUsuario = async (req = request, res = response) => {

    const { nombre, correo, pass, rol }  = req.body;
    const usuarioDB = new Usuario({nombre, correo, pass, rol});

    const salt = bcryptjs.genSaltSync();

    usuarioDB.pass = bcryptjs.hashSync(pass, salt)

    await usuarioDB.save();

    res.json({
        msg: 'POST API de usuario',
        usuarioDB
    });

}

const putUsuario = (req = request, res = response) => {

    const { id } =  req.params;

    res.json({
        msg: 'PUT API de usuario',
        id
    });

}



const deleteUsuario = (req = request, res = response) => {

    res.json({
        msg: 'DELETE API de usuario'
    });

}



module.exports = {
    getUsuarios,
    postUsuario,
    putUsuario,
    deleteUsuario
}