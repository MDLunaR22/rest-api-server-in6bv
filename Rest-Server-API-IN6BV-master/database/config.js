const mongoose = require('mongoose');

const conectionNoSql = async() => {

    try {
        
        await mongoose.connect( process.env.MONGODB_CNN )
        console.log('Base de datos conectada');

    } catch (error) {
        console.log(error)
        throw new Error('Error al momento de conectar la base de datos');
    }

}

module.exports = {
    conectionNoSql
}
