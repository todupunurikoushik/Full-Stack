module.exports = app =>{
    const Fgpass = require('../controllers/fgpass.controller.js');
    app.post("/fgpass",Fgpass.create);
};