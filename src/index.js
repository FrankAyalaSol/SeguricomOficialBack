const express = require('express');
const app = express();
const cors = require('cors');
//const FormCita_Route = require('./routes/FormCitaRoutes')

require('./database');
app.use(cors());
app.use(express.json());

app.listen(3000);
console.log('Server on port', 3000);

app.use((req,res ,next) => {
    res.header ("Content -Type: application/json");
    res.header ('Access-Control-Allow-Origin', '*');
    res.header ('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Acesss-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET', 'PUT', 'POST', 'DELETE', 'OPTIONS');
    next();
});

app.use('/api', require('./routes/index'));
//app.use('/api', FormCita_Route);



module.exports=app;
