/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('youzan_point_record', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false
    },
    total: {
      type: DataTypes.STRING,
      allowNull: false
    },
    open_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: false
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'youzan_point_record'
  });
};
