const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.json({message:'Welcome to World'});
});

require('./app/routes/signin.routes.js')(app);
require('./app/routes/registration.routes.js')(app);
require('./app/routes/signup.routes.js')(app);
require('./app/routes/servicenumber.routes.js')(app);
require('./app/routes/feedback.routes.js')(app);
require('./app/routes/debitcreditcard.routes.js')(app);
require('./app/routes/netbank.routes.js')(app);
require('./app/routes/fgpass.routes.js')(app);


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});