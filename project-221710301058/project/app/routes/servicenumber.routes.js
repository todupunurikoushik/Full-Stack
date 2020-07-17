module.exports = app =>{
    const Servicenumber = require('../controllers/servicenumber.controller.js');
    app.post("/servicenumber",Servicenumber.create);
};