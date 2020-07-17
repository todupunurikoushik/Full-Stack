const sql = require('./db.js');

const Debitcreditcard = function(debitcreditcard){
    this.card_no= debitcreditcard.number;
    this.name_on_card = debitcreditcard.name;
    this.expiry_date = debitcreditcard.date;
    this.cvv = debitcreditcard.cvv;
    
};


Debitcreditcard.create = (newdebitcreditcard,result)=>{
    sql.query('Insert into debitcreditcard set ?',newdebitcreditcard,(err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }    
        console.log("Create Debitcreditcard :",{id:res.insertedId,...newdebitcreditcard});
        return(null,{id:res.insertedId,...newdebitcreditcard});
    })
};

module.exports = Debitcreditcard;