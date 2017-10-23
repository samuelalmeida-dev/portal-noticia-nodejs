'use strict'

const http = require ('http');

const server = http.createServer((req, res) => {
    
    let categoria =  req.url;
    
    if(categoria == '/tecnologia'){
        res.end("<html><body>Página de Tecnologia<body></html>");
    }else{
        
        res.end("<html><body>Portal de notícias<body></html>");
    }

});

server.listen(3000);
console.log('Executando na porta 3000');

