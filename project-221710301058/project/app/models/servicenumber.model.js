const sql = require('./db.js');

const Servicenumber = function(servicenumber){
    this.service_number = servicenumber.number;
   

};


Servicenumber.create = (newservicenumber,result)=>{
    sql.query('Insert into servicenumber set ?',newservicenumber,(err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }    
        console.log("Create Servicenumber :",{id:res.insertedId,...newservicenumber});
        return(null,{id:res.insertedId,...newservicenumber});
    })
};

module.exports = Servicenumber;