/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pid: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      references: {
        model: 'provinces',
        key: 'id'
      }
    }
  }, {
    tableName: 'users'
  });
};
