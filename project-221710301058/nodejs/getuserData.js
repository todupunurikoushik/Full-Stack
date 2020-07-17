let mysql = require('mysql');
let connect = require('./conn.js');
let connection = mysql.createConnection(connect);
let sqlproc = 'call get_userdata';
connection.query(sqlproc,(error,results)=>{
    if(error){
        return console.error(error.message);
    }
    console.log(results[0]);
});
connection.end();