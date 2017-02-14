/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('youzan_coupon_record', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    coupon_id: {
      type: DataTypes.CHAR(7),
      allowNull: false
    },
    open_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'youzan_coupon_record'
  });
};
