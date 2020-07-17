module.exports = app =>{
    const Debitcreditcard = require('../controllers/debitcreditcard.controller.js');
    app.post("/debitcreditcard",Debitcreditcard.create);
};