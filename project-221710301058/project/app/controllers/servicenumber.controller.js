const Servicenumber = require("../models/servicenumber.model.js");

exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content can not be empty!"
        });
    }
    const servicenumber = new Servicenumber({
        
        number: req.body.service_number,
       
        
    });
    Servicenumber.create(servicenumber,(err,data)=>{
        if(err)
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Servicenumber."
        });
        else res.send(data);
    });
};
