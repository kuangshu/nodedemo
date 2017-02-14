/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('member', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nick_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    true_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false
    },
    head_image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gender: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: true
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true
    },
    level: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    invitecode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    open_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_follow: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    is_ca: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'member'
  });
};
