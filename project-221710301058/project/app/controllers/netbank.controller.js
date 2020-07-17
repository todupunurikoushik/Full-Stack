const Netbank = require("../models/netbank.model.js");

exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content can not be empty!"
        });
    }
    const netbank = new Netbank({
        txtUsername: req.body.username,
        txtPassword: req.body.password
        
        
    });
    Netbank.create(netbank,(err,data)=>{
        if(err)
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the netbank."
        });
        else res.send(data);
    });
};
