/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profession_type', {
    pid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'profession_type'
  });
};
