/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trial_user', {
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    openid: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: """"
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profession: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shop_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shop_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shop_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    average_spend: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shop_name_photos: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kitchen_photos: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cookbook_photos: {
      type: DataTypes.STRING,
      allowNull: false
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'trial_user'
  });
};
