var mysql = require('mysql');
var pool = mysql.createPool({
	host: '119.29.196.168',
	user: 'root',
	password: 'sdSDgade34sdfFGH2650SA',
	database: 'nodedb'
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