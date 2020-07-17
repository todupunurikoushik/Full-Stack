const Feedback = require("../models/feedback.model.js");

exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message : "Content can not be empty!"
        });
    }
    const feedback = new Feedback({
        name: req.body.name,
        email: req.body.email,
        feed_back: req.body.feedback
        
    });
    Feedback.create(feedback,(err,data)=>{
        if(err)
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the feedback."
        });
        else res.send(data);
    });
};
