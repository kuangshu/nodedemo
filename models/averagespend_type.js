/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('averagespend_type', {
    aid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'averagespend_type'
  });
};
