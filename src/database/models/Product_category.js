module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductCategory'
    let cols = {
        name: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "product_categories",
        timestamps: false
    }
    const productCategory = sequelize.define(alias, cols, config);

    productCategory.associate = function (models) {
        productCategory.hasMany(models.Product, {
            as: "products",
            foreignKey: "product_categories_id"            
        });
    };

    return productCategory;
};