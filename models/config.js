var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'u6354r3es4optspf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'rwk6q92l6tlmfy8i',
	password: 'jh5u7sj9wcysqp4e',
	port: 3306,
	database: 'tvg9mg79ve9q5v7e',
	insecureAuth: true
});

module.exports = {
	executeQuery: function (sql, sqlParam, callback) {
		if (sqlParam == null) {
			connection.query(sql, function (error, result) {
				if (error) {
					console.log(error);
				}
				callback(result);
			});
		}
		else {
			connection.query(sql, sqlParam, function (error, result) {
				if (error) {
					console.log(error);
				}
				callback(result);
			});
		}
	}
};
