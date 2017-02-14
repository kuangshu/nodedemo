/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trade_promotion_record', {
    pid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    promotion_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    used_at: {
      type: DataTypes.STRING,
      allowNull: true
    },
    promotion_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    discount_fee: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    Column_8: {
      type: DataTypes.CHAR(10),
      allowNull: true
    }
  }, {
    tableName: 'trade_promotion_record'
  });
};
