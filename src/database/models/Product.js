module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'
    let cols = {
        name: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.DECIMAL(11,2)
        },
        product_categories_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "products",
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.ProductCategory, {
            as: "product_categories",
            foreignKey: "products_categories_id"            
        });
      };

    return Product;
};