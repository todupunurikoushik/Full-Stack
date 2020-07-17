const Fgpass = require("../models/fgpass.model.js");

exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content can not be empty!"
        });
    }
    const fgpass = new Fgpass({
        email: req.body.email
        
    });
    Fgpass.create(fgpass,(err,data)=>{
        if(err)
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the fgpass."
        });
        else res.send(data);
    });
};
