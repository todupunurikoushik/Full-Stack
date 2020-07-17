const mysql = require('mysql');
const dbconfig = require('../config/db.config.js');
const connection = mysql.createConnection({
    host:dbconfig.HOST,
    user:dbconfig.User,
    password:dbconfig.password,
    database:dbconfig.db
});

connection.connect(error =>{
    if(error){
        return console.error(error.message);
    }
    console.log('Successfully connected to MYSQL DATABSE');
});
module.exports = connection;