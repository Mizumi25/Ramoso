'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vehicle.init({
    vehicle_name: DataTypes.STRING,
    vehicle_type: DataTypes.STRING,
    plate_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vehicle',
  });
  return vehicle;
};