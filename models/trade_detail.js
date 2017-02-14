/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trade_detail', {
    did: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fans_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    consign_time: {
      type: DataTypes.STRING,
      allowNull: true
    },
    buyer_area: {
      type: DataTypes.STRING,
      allowNull: true
    },
    num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    relation_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    feedback: {
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
    buyer_message: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pay_time: {
      type: DataTypes.STRING,
      allowNull: true
    },
    shop_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    points_price: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    tuan_no: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    post_fee: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pic_thumb_path: {
      type: DataTypes.STRING,
      allowNull: true
    },
    receiver_city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    shipping_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    refunded_fee: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    discount_fee: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    receiver_state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    update_time: {
      type: DataTypes.STRING,
      allowNull: true
    },
    receiver_zip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    receiver_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pay_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    profit: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    receiver_district: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pic_path: {
      type: DataTypes.STRING,
      allowNull: true
    },
    receiver_mobile: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sign_time: {
      type: DataTypes.STRING,
      allowNull: true
    },
    seller_flag: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    handled: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    receiver_address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    trade_memo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    relations: {
      type: DataTypes.STRING,
      allowNull: true
    },
    outer_tid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'trade_detail'
  });
};
