module.exports = (sequelize, dataTypes) => {
    let alias = 'Product_category'
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "product_categories",
        timestamps: false
    }
    const product_category = sequelize.define(alias, cols, config);

    product_category.associate = function (models) {
        product_category.hasMany(models.Product, {
            as: "products",
            foreignKey: "products_categories_id"            
        });
    };

    return product_category;
};