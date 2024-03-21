const express = require('express');

const productController = require('../../controllers/api/productController');

const router = express.Router();

// Implementar logica para retornar todos los productos
router.get('/', productController.index);
router.post('/', productController.create);

module.exports = router;