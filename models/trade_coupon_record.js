/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trade_coupon_record', {
    cid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    coupon_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    coupon_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    coupon_description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    used_at: {
      type: DataTypes.STRING,
      allowNull: true
    },
    coupon_condition: {
      type: DataTypes.STRING,
      allowNull: true
    },
    coupon_content: {
      type: DataTypes.STRING,
      allowNull: true
    },
    coupon_type: {
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
    }
  }, {
    tableName: 'trade_coupon_record'
  });
};
