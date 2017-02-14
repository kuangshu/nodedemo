/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trial_shoptype', {
    tid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shop_type: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    shop_type_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'trial_shoptype'
  });
};
