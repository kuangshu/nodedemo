/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trial_record', {
    rid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    order_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trial_status: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: "0"
    },
    is_synced: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: "0"
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'trial_record'
  });
};
