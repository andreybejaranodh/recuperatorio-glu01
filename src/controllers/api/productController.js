const db = require('../../database/models');
const Op = db.Sequelize.Op;

const controller = {
    async index(req, res) {
        try {
            const productos = await db.Product.findAll(
                {
                include: {
                    model: db.ProductCategory,
                    as: "product_categories"
                }
            }
            );
            res.json(productos);
        }
        catch {
            res.status(500).json({
                error: "Hubo un problema para obtener los productos"
            })
        }
        // Crear controlador para retornar todos los productos
    },
    async create (req, res) {
        // Crear controllador para crear un nuevo producto
    }
}

module.exports = controller;