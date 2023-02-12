'use strict';
const {
  Model
} = require('sequelize');
const transaksi = require('./transaksi');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.transaksi, {
        foreignKey: 'id_user', 
        as: "transaksi"
      })
    }
  }
  user.init({
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama_user: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM,
      values: ["admin","kasir","manajer"]
    },
    username: DataTypes.STRING,
    password: DataTypes.TEXT
  }, {
    sequelize,
    tableName: 'user',
    modelName: 'user',
  });
  return user;
};