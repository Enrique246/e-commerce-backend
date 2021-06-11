// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

product_name: {
    type: DataTypes.STRING,
    allowNull: false,

},
price: {
  type: DataTypes.DECIMAL,
  allowNull: false,
  primaryKey: true,
  autoIncrement: true,
  validate: {
    isDecimal: true,
  },
},

stock: {
//     Integer.
type: DataTypes.INTEGER,
// Doesn't allow null values.
allowNull: false,
// Set a default value of 10.
defaultValue: 10,
// Validates that the value is numeric.
validate:{
isInt: true, 
}

  },
  category_id: {
    // Integer.
type: DataTypes.INTEGER,  
    
    // References the Category model's id.
    
      },
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
