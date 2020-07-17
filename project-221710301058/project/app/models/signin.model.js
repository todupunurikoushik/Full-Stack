const sql = require('./db.js');

const Signin = function(signin){
    this.username = signin.txtUsername;
    this.password = signin.txtPassword;

};


Signin.create = (newsignin,result)=>{
    sql.query('Insert into signin set ?',newsignin,(err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }    
        console.log("Create Signin :",{id:res.insertedId,...newsignin});
        return(null,{id:res.insertedId,...newsignin});
    })
};

module.exports = Signin;