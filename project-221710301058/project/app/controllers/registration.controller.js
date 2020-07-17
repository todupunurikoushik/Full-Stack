const Registration = require("../models/registration.model.js");

exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content can not be empty!"
        });
    }
    const registration = new Registration({
        name: req.body.name,
        email: req.body.email,
        number: req.body.phn_number,
        address: req.body.address
        
    });
    Registration.create(registration,(err,data)=>{
        if(err)
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the registration."
        });
        else res.send(data);
    });
};
