/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trade_order', {
    orderid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_virtual: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    outer_item_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pic_thumb_path: {
      type: DataTypes.STRING,
      allowNull: true
    },
    item_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    refunded_fee: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    num_iid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    oid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fenxiao_payment: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    discount_fee: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    is_present: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    total_fee: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    payment: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pic_path: {
      type: DataTypes.STRING,
      allowNull: true
    },
    item_refund_state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state_str: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    allow_send: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'trade_order'
  });
};
