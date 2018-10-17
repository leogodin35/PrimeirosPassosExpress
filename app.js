var express = require("express");

// Criar uma instancia do express no apps
var app = express();

app.get('/', function(req, res){
    res.send('Olá mundo!'); // qto acessar a home, imprime na tela a msg de retorno
});

app.listen(8080, function () {
    console.log('Executando na porta 8080...');
});