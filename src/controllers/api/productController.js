const db = require('../../database/models');

const controller = {
    async index(req, res) {
        // Crear controlador para retornar todos los productos
    },
    async create (req, res) {
        // Crear controllador para crear un nuevo producto
        try {
            const { name, description, price, productCategoryId } = req.body;

            const newProduct = await db.Product.create({
                name,
                description,
                price,
                product_categories_id: productCategoryId,
            });

            res.status(200).json({message: "Producto creado correctamente"})
        } catch (error) {
            res.status(500).json({ error: "Error creando el producto"})
        }
    }
}

module.exports = controller;