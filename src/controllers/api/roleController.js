const db = require('../../database/models');

const controller = {
    index: async (req, res) => {
        try {
            const roles = await db.Role.findAll();
            return res.json({
                status: 200,
                data: roles
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    create: async (req, res) => {
        try {
            const { name } = req.body;
            const roleCreated = await db.Role.create({ name });
            return res.status(201).json({
                status: 201,
                message: 'Role created'
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = controller;