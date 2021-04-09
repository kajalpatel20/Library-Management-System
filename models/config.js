var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'td5l74lo6615qq42.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'nem6nuxcaz5mffqf',
	password: 'rkt0yv73some5emn',
	port: 3306,
	database: 'jvjag7d22uh8pva',
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
