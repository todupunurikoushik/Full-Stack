const sql = require('./db.js');

const Fgpass = function(fgpass){
    this.email = fgpass.email;

};


Fgpass.create = (newfgpass,result)=>{
    sql.query('Insert into fgpass set ?',newfgpass,(err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }    
        console.log("Create Fgpass :",{id:res.insertedId,...newfgpass});
        return(null,{id:res.insertedId,...newfgpass});
    })
};

module.exports = Fgpass;