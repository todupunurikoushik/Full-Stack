module.exports = app =>{
    const Registration = require('../controllers/registration.controller.js');
    app.post("/registration",Registration.create);
};