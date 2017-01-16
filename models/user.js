//var query = require('./db');
var config = require('../bin/config.js');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('activity', config.mysql.user, config.mysql.password, {
	host: config.mysql.host,
	port: '3306',
	dialect: 'mysql',
	'define': {
		// 字段以下划线（_）来分割（默认是驼峰命名风格）  
		'underscoredAll': true
	}
});

var User = sequelize.define('member', {
	// auto increment, primaryKey, unique
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		unique: true
	},
	trueName: Sequelize.STRING,
	mobile: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	openId: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	// default value
	createTime: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW
	}
});

User.sync().then(result=>{
	console.log('done');
});
/*function queryState(openId){
	return User.findOne({
		where: {
			openId: openId
		}
	})
}*/
module.exports = User;
