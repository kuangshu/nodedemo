/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('member_trial_record', {
    rid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    open_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: false
    },
    receiver_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    receiver_mobile: {
      type: DataTypes.STRING,
      allowNull: false
    },
    receiver_district: {
      type: DataTypes.STRING,
      allowNull: false
    },
    receiver_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'member_trial_record'
  });
};
