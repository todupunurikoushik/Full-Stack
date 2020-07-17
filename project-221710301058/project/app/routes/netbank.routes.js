module.exports = app =>{
    const Netbank = require('../controllers/netbank.controller.js');
    app.post("/netbank",Netbank.create);
};