const sql = require('./db.js');

const Registration = function(registration){
    this.name= registration.name;
    this.email = registration.email;
    this.phn_number = registration.number;
    this.address = registration.address;
    
};


Registration.create = (newregistration,result)=>{
    sql.query('Insert into registration set ?',newregistration,(err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }    
        console.log("Create registration :",{id:res.insertedId,...newregistration});
        return(null,{id:res.insertedId,...newregistration});
    })
};

module.exports = Registration;