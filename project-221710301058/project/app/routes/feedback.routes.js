module.exports = app =>{
    const Feedback = require('../controllers/feedback.controller.js');
    app.post("/feedback",Feedback.create);
};