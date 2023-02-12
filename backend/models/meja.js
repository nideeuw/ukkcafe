'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.transaksi, {
        foreignKey: "id_meja",
        as: "transaksi"
      })
    }
  }
  meja.init({
    id_meja: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nomor_meja: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ["tersedia","tidak_tersedia"]
    },
  }, {
    sequelize,
    tableName: 'meja',
    modelName: 'meja',
  });
  return meja;
};