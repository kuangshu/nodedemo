var mysql = require('mysql');
var config = require('./bin/config.js');
//var Sequelize = require('sequelize');

var pool = mysql.createPool({
	host: config.mysql.host,
	user: config.mysql.user,
	password: config.mysql.password,
	database: 'activity'
});

function query(sql, callback) {
	pool.getConnection(function(err, connection) {
		// Use the connection
		connection.query(sql, function(err, rows) {
			callback(err, rows);
			connection.release(); //释放链接
		});
	});
}

exports.query = query;

/*var sequelize = new Sequelize('activity', config.mysql.user, config.mysql.password, {
	host: config.mysql.host,
	port: '3306',
	dialect: 'mysql',
	'define': {
		// 字段以下划线（_）来分割（默认是驼峰命名风格）  
		'underscored': true
	}
});

var User = sequelize.define('User', {
	// auto increment, primaryKey, unique
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		unique: true
	},

	// comment
	title: {
		type: Sequelize.STRING,
		comment: 'Task title'
	},

	// allow null
	description: {
		type: Sequelize.TEXT,
		allowNull: true
	},

	// default value
	deadline: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW
	}
});*/