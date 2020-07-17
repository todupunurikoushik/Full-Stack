const Signup = require("../models/signup.model.js");

exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content can not be empty!"
        });
    }
    const signup = new Signup({
        fname: req.body.first_name,
        lname: req.body.last_name,
        username: req.body.create_user,
        password: req.body.create_pass,
        retype_password: req.body.confirm_pass,
        number: req.body.phn_number
    });
    Signup.create(signup,(err,data)=>{
        if(err)
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the signup."
        });
        else res.send(data);
    });
};
