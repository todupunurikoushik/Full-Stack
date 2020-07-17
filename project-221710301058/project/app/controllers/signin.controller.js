const Signin = require("../models/signin.model.js");

exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content can not be empty!"
        });
    }
    const signin = new Signin({
        txtUsername: req.body.username,
        txtPassword: req.body.password
    });
    Signin.create(signin,(err,data)=>{
        if(err)
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the signin."
        });
        else res.send(data);
    });
};
