let mysql = require('mysql');
let connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'koushik@123',
	database:'project'

});

let sqlCom="Insert into signin(username,password) values(?,?)";
let vals=['koushik123','koushik@1600'];
connection.query(sqlCom,vals);
connection.end();