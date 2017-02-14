/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trial_feedback', {
    fid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    record_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    question_id: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'trial_feedback'
  });
};
