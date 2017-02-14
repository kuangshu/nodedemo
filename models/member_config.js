/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('member_config', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    open_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false
    },
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    restaurant_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    scale: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
      type: DataTypes.STRING,
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'member_config'
  });
};
