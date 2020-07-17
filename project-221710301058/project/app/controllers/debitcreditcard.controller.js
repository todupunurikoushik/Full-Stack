const Debitcreditcard = require("../models/debitcreditcard.model.js");

exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content can not be empty!"
        });
    }
    const debitcreditcard = new Debitcreditcard({
        number: req.body.card_no,
        name: req.body.name_on_card,
        date: req.body.expiry_date,
        cvv: req.body.cvv
        
    });
    Debitcreditcard.create(debitcreditcard,(err,data)=>{
        if(err)
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the debitcreditcard."
        });
        else res.send(data);
    });
};
