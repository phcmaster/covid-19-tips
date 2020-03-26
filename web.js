// var express = require("express");
// var app = express();
// app.use(express.static(__dirname + "/dist/covid19Tips")); //aqui você define onde está o index.html da sua aplicação.
// app.listen(process.env.PORT || 3000);

//Importa as dependências que acabamos de instalar
const express = require('express');
const path = require('path');

const app = express();

// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(__dirname + '/dist/covid19Tips'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/covid19Tips/index.html'));
});

// Inicia a aplicação pela porta configurada
app.listen(process.env.PORT || 8080);