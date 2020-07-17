let mysql = require('mysql');
let connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'koushik@123',
	database:'project'

});
connection.connect(function(err){
	if(err){
		return console.error('error' + err.message);
	}
	console.log('Connected to mysql server');
});
connection.end(function(err){
	if(err){
		return console.error('error' + err.message);
	}
	console.log('Close the database connection');
});