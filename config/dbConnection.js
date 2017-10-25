const mysql = require('mysql');

module.exports = () => {
        return connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            port: '3307',
            database: 'portal_noticias'
        });
    };