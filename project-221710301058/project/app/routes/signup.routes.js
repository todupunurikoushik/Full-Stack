module.exports = app =>{
    const Signup = require('../controllers/signup.controller.js');
    app.post("/signup",Signup.create);
};