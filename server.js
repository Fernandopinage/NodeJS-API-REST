const express = require('express')
const app = express();
const bodyparser = require('body-parser');
const Port = process.env.Port || '3000';

const bodyparser = require('body-parser');

app.use(bodyparser.json())

app.get('/',(req,res)=>{

    res.status(200);

})


app.listen(Port,()=>{
    console.log('Conectado')
});

