/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('members', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    trueName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mobile: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    openId: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'members'
  });
};
