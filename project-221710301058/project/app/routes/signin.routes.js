module.exports = app =>{
    const Signin = require('../controllers/signin.controller.js');
    app.post("/signin",Signin.create);
};