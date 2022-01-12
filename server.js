const express = require('express')
const app = express();
const bodyparser = require('body-parser');
const Port = process.env.Port || '3000';
const config = require('./config/defaut.json')
const bodyParser  = require("body-parser");

//app.use(bodyparser.json())

app.get('/',(req,res)=>{

    res.status(200).send('ok');

})


app.listen(Port,()=>{
    console.log('Conectado')
});

