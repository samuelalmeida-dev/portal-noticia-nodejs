'use strict'

const http = require ('http');

const server = http.createServer((req, res) => {
    res.end("<html><body>Portal de notícias<body></html>");
});

server.listen(3000);
console.log('Executando na porta 3000');

