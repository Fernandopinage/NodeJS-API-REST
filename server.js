const express = require('express')
const app = express();
const bodyparser = require('body-parser');
const Port = process.env.Port || '3000';
const config = require('./config/defaut.json')
const bodyParser  = require("body-parser");

app.use(bodyParser.json())
app.get('/',(req,res)=>{

    res.status(200).send('ok');

})

app.get('/api/filmes',(req,res)=>{

    const filmes =[
       {nome:'Os Vingadores 3'},
       {nome:'Destacamento Blood'},
       {nome:'Pantera Negra'},
    ]
    res.send(JSON.stringify(filmes))


});

app.listen(Port,()=>{
    console.log('http://localhost:3000/')
});

