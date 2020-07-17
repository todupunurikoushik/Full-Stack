const sql = require('./db.js');

const Signup = function(signup){
    this.first_name= signup.fname;
    this.last_name = signup.lname;
    this.create_user = signup.username;
    this.create_pass = signup.password;
    this.confirm_pass = signup.retype_password;
    this.phn_number = signup.number;
};


Signup.create = (newsignup,result)=>{
    sql.query('Insert into signup set ?',newsignup,(err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }    
        console.log("Create Signup :",{id:res.insertedId,...newsignup});
        return(null,{id:res.insertedId,...newsignup});
    })
};

module.exports = Signup;