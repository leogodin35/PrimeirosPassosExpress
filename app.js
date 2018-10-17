var express = require("express");

// Criar uma instancia do express no apps
var app = express();

app.use(express.static('public'));  // Determino que vou fazer carregamentos de arquivos estáticos dentro da public, 
                                    // ou seja, vai criar os caminhos dos arquivos a partir da pasta /public/

var path = require("path"); // Para ter acesso aos caminhos dentro do Sistema Operacional

// app.get('/', function(req, res){
//     res.send('Olá mundo!'); // qto acessar a home, imprime na tela a msg de retorno
// });

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/page/index.html'); // qto acessar a home direciona para o index.html
});

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + '/public/page/sobre.html'); // qto acessar a home direciona para o index.html
});

app.get('/contato', function(req, res){
    res.sendFile(__dirname + '/public/page/contato.html'); // qto acessar a home direciona para o index.html
});

app.listen(8080, function () {
    console.log('Executando na porta 8080...');
});