const sql = require('./db.js');

const Feedback = function(feedback){
    this.name= feedback.name;
    this.email = feedback.email;
    this.feedback = feedback.feed_back;
    
    
};


Feedback.create = (newfeedback,result)=>{
    sql.query('Insert into feedback set ?',newfeedback,(err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }    
        console.log("Create feedback :",{id:res.insertedId,...newfeedback});
        return(null,{id:res.insertedId,...newfeedback});
    })
};

module.exports = Feedback;