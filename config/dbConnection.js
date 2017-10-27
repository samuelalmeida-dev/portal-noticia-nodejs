const mysql = require('mysql');

const connMySql = () => {
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: '3307',
        database: 'portal_noticias'
    });
}

module.exports = () => {
    return connMySql;
};