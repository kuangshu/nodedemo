/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fans_info', {
    fid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fans_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fans_nickname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    buyer_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fans_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'fans_info'
  });
};
