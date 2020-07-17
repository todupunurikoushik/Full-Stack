const sql = require('./db.js');

const Netbank = function(netbank){
    this.username= netbank.txtUsername;
    this.password = netbank.txtPassword;
    
    
};


Netbank.create = (newnetbank,result)=>{
    sql.query('Insert into netbank set ?',newnetbank,(err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }    
        console.log("Create Netbank :",{id:res.insertedId,...newnetbank});
        return(null,{id:res.insertedId,...newnetbank});
    })
};

module.exports = Netbank;