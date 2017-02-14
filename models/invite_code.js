/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invite_code', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    invite_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    access_member_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'invite_code'
  });
};
