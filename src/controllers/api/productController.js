const db = require('../../database/models');
const Op = db.Sequelize.Op;

const controller = {
    async index(req, res) {
        res.json("Hola")
        // Crear controlador para retornar todos los productos
    },
    async create (req, res) {
        // Crear controllador para crear un nuevo producto
    }
}

module.exports = controller;