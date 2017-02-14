/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('provinces', {
    id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pname: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'provinces'
  });
};
